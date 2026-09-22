# Backend

Planned TypeScript API responsible for savings records, approval workflow, audit history, and document extraction orchestration.

The backend must validate all extracted values server-side and preserve the original uploaded evidence.

## Project context

This project is being built as an auxiliary system for the Supply Chain area. SAP remains the official purchasing system and is not modified by this project.

The initial objective is not to develop technology immediately, but to build a solid understanding of the business, the operational flows, the systems used, and the data available in the area. The project is intended to support negotiation, savings tracking, evidence control, and reporting in a way that is aligned with real business needs.

The current focus is to:
- understand the operating model in Supply Chain;
- learn SAP and corporate tools;
- map purchasing, sourcing, contract, supplier, and performance processes;
- identify manual work, spreadsheet dependency, and operational bottlenecks;
- evaluate viable opportunities for automation and reporting.

## Business premise

The project is centered on the idea of helping the company to:
- track negotiated savings;
- validate evidence and supplier records;
- improve auditability;
- centralize operational information;
- support dashboards and management decisions;
- create a future path for data-driven automation and AI.

## Architecture principles

- SAP is the official source of transactional purchasing data.
- This platform is a support layer for validation, workflow, evidence management, and reporting.
- The project must not modify SAP directly.
- Data and process governance are as important as tooling itself.
- The future architecture should prioritize data quality and operational clarity before adopting advanced AI.

## Proposed flow

1. A buyer uploads the negotiation report.
2. The backend preserves the original file and extracts candidate fields.
3. The buyer confirms the extracted fields and submits the record.
4. A designated reviewer checks the evidence and approves or rejects it.
5. Approved records become available for reporting and export.

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

No field or integration contract is final until representative reports and the official destination application are identified.

## Data and analytics context

Given the SAP, Power BI, and Azure ecosystem, a likely long-term pattern is:
- SAP as the official transactional source;
- a consolidated data layer such as SQL Server, SAP BW/HANA, Azure SQL, Data Lake, Synapse, or another analytical store;
- Power BI and internal applications consuming standardized data;
- APIs and internal portals built over a governed data layer.

This is a critical investigation area for the next phase:
- identify where the current dashboards source data from;
- understand whether there is a corporate warehouse or analytical layer;
- confirm update frequency and synchronization cadence;
- understand whether the practice is near real-time, periodic, or daily load-based.

## Strategic view

The planned sequence is:

Process → Data → Automation → Dashboard → Artificial Intelligence

This avoids building technology for its own sake and ensures the solution is aligned to real operational pain points.

## AI and Azure context

The organization may have Azure, Azure AI Foundry, and Azure OpenAI available depending on central IT provisioning and licensing. The current access situation should be confirmed with the infrastructure and security teams. The use of corporate AI solutions, including ChatGPT Enterprise or similar offerings, must follow policies and formal approval processes.

AI should be treated as a later-stage capability, not as the starting point. Before large-scale AI adoption, the project needs:
- clear process understanding;
- consistent data quality;
- validated rules and KPIs;
- workflow and evidence control;
- governance and access restrictions.

## Initial PostgreSQL model

The first schema is in `backend/src/db/schema.sql` and contains:

- `buyers`: buyer employee code and identity data.
- `suppliers`: SAP Ariba supplier code and legal name.
- `savings_records`: purchase references, product/service, original and negotiated amounts, currency, status, review data, and timestamps.
- `evidence_documents`: immutable file metadata, storage key, content type, size, and SHA-256 hash.
- `audit_events`: append-only workflow events in JSONB.

`original_amount`, `negotiated_amount`, `savings_amount`, and `savings_percentage` are kept in PostgreSQL with constraints. The savings values are generated from the two source amounts, so clients cannot submit an inconsistent saving amount.

The database stores document metadata and integrity information. The original file should be stored in an approved document or object-storage service, not directly in the relational table, unless Information Security approves that design.

## Brainstorm summary

The project should start with business understanding, not with technology first. The recommended early path is:

1. Learn the SAP process and operational role.
2. Understand the purchase and negotiation lifecycle.
3. Map source systems and data owners.
4. Identify gaps, bottlenecks, and spreadsheet dependency.
5. Define business rules for savings and approval.
6. Prototype a simple workflow for record capture and review.
7. Build basic reporting and KPI views.
8. Add automation where justified.
9. Only then consider AI and advanced analytics.

This approach is more sustainable and better aligned with the governance and operational realities of a multinational company.

## Database

The initial persistence layer targets PostgreSQL. Set `DATABASE_URL` in the environment and run:

```text
npm run db:migrate --workspace backend
```

The migration creates the buyer, supplier, savings record, evidence metadata, and audit event tables. No production database credentials are committed to the repository.

## Next steps

- validate the SAP and purchasing process with the business team;
- map data sources and dependencies;
- confirm the target reporting model;
- define the first savings rule set;
- implement the MVP workflow and evidence validation;
- validate dashboards with stakeholders before scaling the solution.