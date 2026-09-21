# Requirements

## Objetivo corporativo

Construir uma camada auxiliar para captura, validação, rastreabilidade e reporte de Savings de Supply Chain, preparando dados confiáveis para o relatório e a carga na plataforma global Zycus. SAP continua sendo o sistema oficial do processo de compras.

## In scope

- Upload negotiation evidence.
- Extract candidate original and negotiated values.
- Show extracted values with confidence and evidence reference.
- Allow controlled confirmation and reviewer approval.
- Preserve an immutable audit trail.
- Produce internal savings summaries and exports.
- Capture the source and lineage of each value through buyer, area, supplier, contract, negotiation closing, and purchase order.
- Register annual targets per buyer and area, including target version and reference year.
- Calculate progress for each buyer as approved or validated savings against the buyer's annual target.
- Produce reports by buyer, area, category, supplier, contract, purchase order, closing, period, and savings method.
- Prepare a controlled Zycus export with a traceable export batch and source records.
- Support controlled ingestion without a SAP API through standardized spreadsheets, exported files, and assisted manual capture.
- Preserve import file metadata, row-level source references, validation results, and duplicate detection.

## Out of scope for the initial prototype

- Changing SAP records.
- Automatic posting to the destination application.
- Direct database access to corporate systems.
- Unapproved authentication or OCR services.

## Open decisions

- Official application name and posting process.
- Supported report formats and representative samples.
- Approved identity, storage, OCR, and hosting services.
- Savings calculation rules for taxes, currencies, scope changes, and cancellations.
- Official Zycus import template, mandatory fields, validation rules, and submission process.
- Approved SAP extracts, report owners, file formats, frequency, and secure transfer location.
- Buyer code, Supply Chain area code, and annual target governance.
- Definitions of contract, negotiation closing, purchase order, and their relationship when one Saving spans multiple records.
- Areas to be included after the initial scope, such as Serviços Operacionais, Energia, and Ambiente.

## Requisitos de qualidade e controle

- Every reported amount must have a source, calculation method, currency, reference period, and evidence.
- Records must be deduplicated using business keys and reviewed when the source data conflicts.
- Approved values must be immutable through append-only audit events; corrections create a new version or compensating event.
- The system must distinguish captured, submitted, approved, validated, rejected, and exported values.
- Reports must reconcile totals by buyer and area with the source records before Zycus export.
- Export failures and rejected rows must be retained with actionable validation messages.
