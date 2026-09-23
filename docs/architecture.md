# Architecture Notes

## Initial boundary

The platform is an auxiliary system. SAP remains the official purchasing system and is not modified by this project.

The platform is also the controlled staging and reporting layer for Zycus. It does not replace SAP or Zycus: it captures source data, applies the approved Saving methodology, maintains lineage and approvals, reconciles totals, and produces an export-ready report.

## Discovery-first direction

The first objective is to understand the real Supply Chain project chain before committing to a final platform or automation design. The discovery must cover opportunities, sourcing, negotiation, contracts, purchase orders, implementation, measurement, validation, systems, data owners, responsibilities, spreadsheets, exceptions, and rework.

Technology must support the proven process rather than impose a premature workflow or data model. The final solution may be a platform, a focused automation, an assisted process, or a combination, selected according to the actual volume, recurrence, data quality, control requirements, and process maturity.

The long-term concept is a **Value Delivery Hub**: a single controlled entry point for Supply Chain data that can accept guided forms, Excel/CSV imports, evidence references, assisted document extraction, and future integrations. It should normalize these inputs, expose missing data and duplicates, preserve source lineage, support human review, and prepare validated records for reporting or Zycus export.

The Hub is not required to replace existing systems immediately. It should reduce spreadsheet fragmentation while allowing existing processes to continue during discovery and controlled transition.

## Prototype without production data

The absence of a SAP API and the current unavailability of real Excel databases do not block discovery, architecture, or prototyping. The initial work can use interviews, Zycus screens and official tenant templates, synthetic data, anonymized examples, and local or disposable test storage.

Do not create a corporate production database or treat prototype values as authoritative before data ownership, classification, quality responsibility, retention, access, security, approved environment, and governance are defined. Separate discovery, homologation, and production environments. Real data enters only after authorization and source-quality controls are approved.

The immediate Zycus investigation must identify the tenant-specific screens, fields, mandatory values, statuses, validation rules, approval flow, import/export mechanisms, error responses, and official file layout. Public Zycus material confirms general API, SFTP, and iSaaS capabilities but does not confirm the organization's exact template. A preparatory internal model must not be treated as an official load contract.

## Hub evolution path

1. **Discovery:** map the real chain, systems, data, roles, calculations, validations, bottlenecks, and exceptions.
2. **Input prototype:** provide initiative registration, guided steps, spreadsheet import, basic validation, evidence references, pending items, and manual review using synthetic or authorized data.
3. **Consolidation and automation:** add approved calculation rules, targets, audit, dashboards, integrations, and controlled Zycus export.

Candidate input capabilities include layout-aware Excel/CSV import, column mapping, row-level errors, duplicate detection, source-file preservation, correction and reprocessing, guided forms, evidence upload, assisted extraction, and review queues. Automation may suggest values and calculations, but must not approve Savings without approved rules, sufficient evidence, and an accountable reviewer.

## Proposed flow

1. An approved source file or assisted capture is received from a buyer or process owner.
2. The ingestion process preserves the original file, source batch, row reference, and extraction metadata.
3. The backend validates business keys, detects duplicates, extracts candidate fields, and applies the selected Saving method.
4. The buyer confirms the extracted fields, links the buyer code, area, contract, closing, purchase order, baseline, and evidence, then submits the record.
5. Designated reviewers approve or reject the record; financial and operational validations remain attributable to their responsible functions.
6. Approved values are reconciled against annual buyer targets and aggregated by area and reporting period.
7. A controlled export batch is generated for Zycus, retaining the exact source records, validation results, and export status.

## Candidate record fields

- SAP or purchase reference
- Buyer
- Supplier
- Service category
- Original value and currency
- Negotiated value and currency
- Calculated savings and savings percentage
- Evidence file and extraction confidence
- Status, reviewer, timestamps, and audit events
- Supply Chain area code and buyer annual target reference
- Contract, negotiation closing, purchase order, and source batch references
- Saving method, baseline components, calculation inputs, and reporting period
- Zycus export batch, row status, and reconciliation result

No field or integration contract is final until representative reports and the official destination application are identified.

## Integration without SAP API

The first integration boundary should be file-based and observable rather than an unapproved direct connection. Candidate sources are standardized Excel/CSV exports, controlled shared-folder ingestion, or a buyer capture form with mandatory source references. Each import receives a batch identifier, source filename, hash, received timestamp, owner, format version, and row-level lineage. Adapters can be added later when an approved SAP interface or Zycus contract is available.

The reporting layer should expose at least two views: a management view showing progress against annual targets by buyer and area, and an audit/export view showing every Saving, its calculation inputs, evidence, approval history, and Zycus export status.

## Initial PostgreSQL model

The first schema is in `backend/src/db/schema.sql` and contains:

- `buyers`: buyer employee code and identity data.
- `suppliers`: SAP Ariba supplier code and legal name.
- `savings_records`: purchase references, product/service, original and negotiated amounts, currency, status, review data, and timestamps.
- `evidence_documents`: immutable file metadata, storage key, content type, size, and SHA-256 hash.
- `audit_events`: append-only workflow events in JSONB.

`original_amount`, `negotiated_amount`, `savings_amount`, and `savings_percentage` are kept in PostgreSQL with constraints. The savings values are generated from the two source amounts, so clients cannot submit an inconsistent saving amount.

The database stores document metadata and integrity information. The original file should be stored in an approved document/object-storage service, not directly in the relational table, unless Information Security approves that design.

Run the initial schema with `npm run db:migrate --workspace backend` after setting `DATABASE_URL`.

## Recommended target architecture

### Decision

For the current constraints, use a **modular monolith with TypeScript from browser to API**, PostgreSQL as the system of record, and approved object storage for original files. Process imports asynchronously through a job worker, but keep the first deployment as one operational unit. This matches the current repository, avoids premature microservices, and leaves clear boundaries for extracting the ingestion or Zycus export workers later.

Recommended language and responsibilities:

- **TypeScript:** frontend, API, validation contracts, calculation rules, import orchestration, reporting queries, and audit workflows.
- **SQL/PostgreSQL:** constraints, foreign keys, uniqueness, reconciliation queries, generated calculations, and transactional state changes.
- **Excel/CSV parser:** a versioned parser in the backend, with each supported layout treated as an explicit adapter. Do not rely on column position without a layout version.
- **Infrastructure configuration:** use the approved corporate deployment standard. Keep storage, database, identity, secrets, and observability replaceable behind configuration rather than hard-coded in business code.

Python is not required for the first version. It should be introduced only if a proven need appears for heavy document extraction, data science, or an approved OCR service. Adding a second language now would increase deployment, security, and support overhead without improving source veracity.

### Logical layers

1. **Source boundary:** receives Excel/CSV files exported by the SAP bot or a controlled manual submission. The original file is immutable, hashed, virus-scanned where required, and never overwritten.
2. **Ingestion layer:** identifies the layout version, validates headers and data types, normalizes dates, currencies, decimal separators and identifiers, and produces row-level errors without silently discarding data.
3. **Canonical domain layer:** stores buyers, areas, suppliers, contracts, negotiation closings, purchase orders, targets, baselines, Saving methods, records, evidence, and relationships between them.
4. **Validation and calculation layer:** applies the versioned Saving formula, baseline composition, currency and period rules, duplicate detection, completeness rules, and reconciliation controls. Calculation inputs and formula version are stored with the result.
5. **Workflow layer:** separates draft, submitted, reviewed, approved, validated, rejected, and exported states. A buyer cannot approve their own record, and an approved value is corrected by a new version or compensating event rather than silent editing.
6. **Reporting layer:** provides buyer and area progress against annual targets, operational quality queues, reconciliation dashboards, and an audit/export view.
7. **Zycus adapter:** maps only validated records to the official Zycus template or API when approved. Every export is a batch with a template version, row-level result, checksum, totals, and retry status.

### File ingestion without a SAP API

The SAP bot export should be treated as a source batch, not as a trusted database. For every file, store:

- source system, bot/process name, owner, extraction timestamp and reporting period;
- original filename, size, SHA-256 hash, layout version and received timestamp;
- row number, row hash, source values and normalized values;
- import status, validation messages, duplicate decision and responsible user;
- control totals from the file and totals accepted into the canonical model.

The import must be idempotent: reprocessing the same file hash must not create new Savings. A changed file must create a new source batch and show the differences. A file with invalid rows should be partially visible for correction, but invalid values must never silently enter approved reporting.

### Controls for manual data quality

No application can prove that a human typed a true value if there is no independent source. The design should therefore make incorrect or incomplete input difficult to submit and easy to detect:

- prefill fields extracted from the source and show the source file and row beside every material value;
- require SAP reference, buyer code, area code, contract or purchase order, method, baseline, currency, period and evidence before submission;
- validate formats, ranges, dates, currencies, percentages, negative values, duplicate business keys and incompatible status changes;
- require a reason and evidence when a buyer overrides an extracted value;
- compare source totals, contract totals, purchase-order totals and Saving totals before approval;
- use maker-checker approval: buyer submits, a different reviewer validates, and Finance or the responsible function confirms the financial method when applicable;
- maintain exception queues for missing fields, conflicting sources, unusual percentages, impossible dates, duplicate records and changes after approval;
- use risk-based sampling and periodic reconciliation against SAP exports, rather than claiming 100% accuracy from manual entry;
- preserve rejected submissions and corrections as history, never delete them from the audit trail.

### Data model principles

Separate the following concepts instead of placing everything in one `savings_records` row:

- **Source batch and source row:** what the bot or user supplied.
- **Canonical entities:** buyer, area, supplier, contract, closing and purchase order.
- **Baseline:** reference value, composition components, source, period and version.
- **Saving calculation:** method, inputs, formula version, output, currency and validation status.
- **Evidence and approvals:** immutable files, hashes, reviewer decisions, comments and timestamps.
- **Target:** buyer, area, year, target version, source report and approved amount.
- **Export batch:** Zycus template version, selected records, reconciliation totals and row outcomes.

Financial amounts should use PostgreSQL `NUMERIC`, never JavaScript floating-point arithmetic. Store the currency and scale explicitly, normalize decimal separators at ingestion, and define rounding only in the formula version. Dates should be ISO 8601 values with an explicit business timezone. Codes should be stored as strings so leading zeroes are preserved.

### Logging and audit

Application logs and business audit events are different:

- **Operational logs:** structured JSON with timestamp, level, service, environment, correlation ID, request/job ID, actor code, event name, duration, outcome and error code. Never log secrets, full documents, tokens or unnecessary supplier-sensitive values.
- **Business audit events:** append-only records for import received, row accepted/rejected, value overridden, calculation executed, evidence added, submission, review, approval, rejection, correction, reconciliation and export. Include before/after references, actor, reason, source batch and formula version.

Use correlation IDs from file receipt through import job, review and Zycus export. Metrics should include files received, rows processed, rejection rate, duplicate rate, missing-evidence rate, time to approval, approved value, validated value, export failures and reconciliation differences. Alert on control failures, not only on server errors.

### Accessibility and usability

The capture workflow is a control surface, not only a dashboard. It should meet WCAG 2.2 AA as a target: full keyboard operation, visible focus, semantic labels, correct input types, accessible error summaries, sufficient contrast, no color-only status meaning, screen-reader announcements for import progress, and tables that expose headers and relationships. Users must be able to download the source row and evidence, understand why a field failed, save a draft, and resume without losing work.

### Deployment evolution

Start with one web application, one API, one worker process and PostgreSQL/object storage. Add a queue when imports or exports become long-running. Extract the ingestion worker or Zycus adapter only when independent scaling, deployment cadence, or security boundaries justify it. This keeps the first release easy to operate while preserving the architecture needed for corporate scale.
