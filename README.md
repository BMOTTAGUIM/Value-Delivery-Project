# Negociation-Savings-Efficiency

Gestão de Economia nas Negociações da Área de Supply Chain.

Internal support platform for recording negotiation evidence and approved savings. The official SAP process remains unchanged.

## Project structure

- `frontend/`: user interface for submission, review, and dashboards.
- `backend/`: API, validation, workflow, audit trail, and document processing.
- `docs/`: requirements, architecture, security, and decision records.
- `infra/`: deployment and infrastructure definitions, kept separate from application code.

## Principles

1. SAP remains the official source for the purchasing process.
2. This platform stores supporting evidence and an auditable savings record.
3. Extracted values require human confirmation and reviewer approval.
4. No corporate integration or secret is committed to this repository.

## Contexto de Value Delivery

**Value Delivery** é o processo de identificar, contratar, implementar, medir e validar benefícios gerados por Supply Chain para o negócio. Os benefícios podem ser financeiros, operacionais, técnicos, estratégicos, sustentáveis ou relacionados à mitigação de riscos.

Uma iniciativa só deve ser apresentada como **valor entregue** quando estiver implementada, mensurada, possuir evidências e tiver sido validada pelas funções responsáveis. O valor contratado ou o Saving estimado não representam, sozinhos, valor entregue.

### Ciclo de Value Delivery

O processo completo deve acompanhar as seguintes etapas:

1. **Identificação da oportunidade:** Supply Chain identifica uma oportunidade de redução de custo, melhoria operacional, ganho técnico, benefício estratégico, sustentabilidade ou mitigação de risco.
2. **Estruturação do baseline:** a referência anterior ou de mercado é documentada, incluindo escopo, volume, premissas, composição de custos, moeda, período e fonte.
3. **Sourcing e negociação:** são registradas as propostas, alternativas, condições comerciais e decisões que levaram ao resultado negociado.
4. **Contratação:** o benefício contratado é associado ao fornecedor, contrato, fechamento da negociação e pedido de compra quando aplicável.
5. **Implementação:** a solução, condição comercial, plano de trabalho ou alteração contratual passa a ser executada.
6. **Medição:** o resultado real é acompanhado por indicadores financeiros, operacionais, técnicos, de qualidade, segurança ou desempenho.
7. **Validação:** as funções responsáveis verificam evidências, cálculo, execução, reflexo financeiro e ausência de dupla contagem.
8. **Reporte:** o resultado validado é consolidado por comprador, área e período e preparado para o relatório ou carga no Zycus.

### Status sugeridos

Os status devem separar o que foi negociado do que foi efetivamente entregue:

- **Oportunidade identificada:** existe uma hipótese de benefício, ainda sem contratação.
- **Em sourcing ou negociação:** as alternativas comerciais estão sendo avaliadas.
- **Contratado:** a condição negociada foi formalizada, mas ainda não comprova entrega.
- **Implementado:** a nova condição ou solução está em execução.
- **Mensurado:** existem dados de resultado e evidências de desempenho.
- **Em validação:** as áreas responsáveis estão revisando cálculo, evidências e reflexo financeiro.
- **Validado / Valor entregue:** está implementado, mensurado, documentado e aprovado conforme os critérios internos.
- **Rejeitado ou suspenso:** há inconsistência, falta de evidência, alteração de escopo, perda do benefício ou outra pendência impeditiva.

Uma iniciativa só deve entrar como **valor entregue** nos relatórios oficiais quando alcançar o status Validado. O sistema deve manter o histórico das transições, responsáveis, datas e justificativas.

### Saving versus Value Delivery

Saving é o resultado financeiro ou comercial identificado na negociação. Value Delivery é mais amplo: confirma se o benefício gerado por Supply Chain chegou ao negócio, foi implementado e continua existindo na operação.

Por isso, a redução do preço contratado não é suficiente. O acompanhamento deve considerar implementação, qualidade, produtividade, disponibilidade, cumprimento de SLA, segurança, aditivos, mudanças de escopo, custo total e eventual erosão do benefício durante a vigência.

#### Exemplo: contratação de manutenção

No cenário anterior, um serviço de manutenção custava R$ 12 milhões por ano, tinha disponibilidade de 88%, SLA de atendimento de 12 horas e alto número de paradas corretivas. Na nova contratação, o custo passou para R$ 11,5 milhões, a disponibilidade contratada subiu para 93%, o SLA passou para 6 horas e foi criado um plano preventivo estruturado.

O Saving inicialmente identificado é de R$ 500 mil. O Value Delivery precisa verificar também:

- se o plano preventivo foi implementado;
- se a disponibilidade efetivamente alcançou o resultado esperado;
- se as paradas corretivas foram reduzidas;
- se o SLA de 6 horas está sendo cumprido;
- se houve aditivos que consumiram a economia;
- se a qualidade e a segurança foram preservadas;
- qual é o custo total após a implementação.

Se a disponibilidade não melhorar ou se os aditivos consumirem a economia, o valor efetivamente entregue será diferente do valor originalmente contratado.

### Formas de Saving

As principais formas de Saving consideradas neste projeto são:

| Forma | Como é metrificada | Observação |
| --- | --- | --- |
| Reajuste | Percentual previsto versus percentual contratado | Deve registrar o índice utilizado, como IPCA, e comparar a previsão com o percentual negociado. |
| Orçamento (EBITDA) | Orçamento disponível versus valor contratado | Impacta diretamente o Delivery e o resultado operacional. |
| Proposta final versus proposta inicial | Proposta final versus valor inicial, normalmente o MPAT no template do Excel | Escopo, premissas e condições precisam ser comparáveis. |
| Prazo de pagamento ampliado | Benefício financeiro decorrente do prazo adicional | Representa ganho temporário de capital de giro e folga no fluxo de caixa. |

O método escolhido deve ser registrado no Saving e determinar quais campos e evidências são obrigatórios. As bases de comparação não podem ser misturadas sem justificativa: cada valor precisa indicar se veio de orçamento, reajuste, proposta, prazo de pagamento ou outro método aprovado.

#### Metrificação dos Savings

- **Reajuste:** comparar o percentual previsto com o percentual contratado. O índice utilizado, como IPCA, a data-base, a previsão e o percentual final devem ser registrados.
- **Orçamento (EBITDA):** comparar o orçamento disponível ou previsto com o valor contratado. Como impacta diretamente o Delivery e o resultado operacional, o orçamento de referência precisa estar documentado.
- **Proposta final versus proposta inicial:** comparar a proposta final com a proposta inicial. No template do Excel, o valor inicial normalmente é o **MPAT**; esse valor deve ser preservado como baseline da negociação.
- **Prazo de pagamento ampliado:** registrar o prazo original, o prazo negociado, a vigência e a forma de medir o ganho temporário de capital de giro e a folga no fluxo de caixa.

### Baseline e composição de custos

O **baseline** é o valor previsto de mercado para o produto ou serviço e deve refletir sua composição real de custos. Ele é a referência para medir se uma variação de preço é justificável.

Exemplo: em um pedido de compra em que 60% do preço corresponde à mão de obra e 40% corresponde ao insumo, uma alteração no preço de mercado do insumo deve ser aplicada somente sobre os 40% relacionados ao insumo. Não é adequado aplicar essa variação proporcionalmente sobre o preço total, pois a mão de obra não sofreu a mesma alteração.

Essa composição evita reajustes indevidos e torna o cálculo do Saving reproduzível, transparente e aderente ao valor econômico real.

O baseline não é apenas um número de comparação. Ele deve explicar por que o produto ou serviço tinha aquele valor previsto, qual parcela está exposta ao mercado e quais parcelas permanecem estáveis. Essa decomposição é essencial para validar reajustes e evitar que uma oscilação de um insumo seja aplicada indevidamente sobre mão de obra ou outros componentes.

### Exemplo de reajuste em aditivo

Quando um contrato recebe um aditivo por falta de verba, o reajuste pode ser definido com base em um índice de mercado, como o IPCA. Se o reajuste negociado ficar abaixo do valor previsto, a diferença deve ser considerada Saving: o valor previsto seria lançado no caixa da empresa como custo, e não como penalty.

O cálculo deve manter a evidência do índice, do percentual previsto, do percentual negociado, da base de cálculo e do impacto financeiro efetivo.

Esse Saving não deve ser classificado como penalty. O reajuste previsto por falta de verba seria uma despesa lançada no caixa da empresa; quando a negociação reduz esse impacto abaixo do valor previsto, existe uma economia evitada que deve ser rastreada como Saving, desde que a metodologia e a evidência sejam aprovadas.

### Governança da validação

- **Supply Chain:** identifica a oportunidade, conduz sourcing e negociação, registra o benefício contratado, acompanha a implementação e mantém a evidência comercial.
- **Área requisitante ou Operação:** valida o baseline operacional, confirma a implementação e mede qualidade, produtividade e desempenho.
- **Finanças ou Controladoria:** valida metodologia, baseline e cálculo, evita dupla contagem, confirma o reflexo financeiro e diferencia economia, cost avoidance e benefício não financeiro.
- **Gestão Contratual:** acompanha SLA, medição, reajustes e aditivos, verificando a entrega dos compromissos e a erosão do valor.
- **Inteligência Técnica:** valida ganhos técnicos, alternativas, mudanças de especificação, produtividade, ciclo de vida e desempenho.
- **HSE, Compliance, Jurídico e Tax:** validam componentes específicos de valor, risco, integridade, exposição jurídica e tratamento tributário.
- **Auditoria:** verifica evidências, reprodutibilidade do cálculo, ausência de dupla contagem, aprovação adequada e correspondência com a execução. Auditoria não é proprietária da iniciativa nem substitui a validação operacional.

Nem todo benefício de HSE, Compliance, Jurídico, Tax ou outras áreas precisa ser convertido artificialmente em dinheiro. Quando a natureza do benefício for não financeira, o sistema deve registrar o indicador, a evidência e a validação correspondente sem criar uma conversão monetária sem fundamento.

## Objetivo corporativo do projeto

Este projeto será uma camada de captura, validação, rastreabilidade e reporte dos Savings gerados pelos compradores de Supply Chain. A finalidade é reduzir a dependência de consolidação manual, preservar o lastro de cada valor e preparar um relatório consistente para carga na plataforma global **Zycus**.

Como não existe API disponível do SAP neste momento, a solução deve priorizar integrações indiretas e controladas, como importação de relatórios padronizados, planilhas, arquivos exportados e captura assistida pelos compradores. Nenhum dado deve ser considerado definitivo sem origem identificada, validação humana quando necessária e evidência associada.

### Medição por comprador e área

Cada comprador deve possuir um código único associado à sua pessoa e área de Supply Chain, por exemplo Serviços Operacionais, Energia, Ambiente e outras áreas que serão definidas posteriormente. O sistema deve permitir acompanhar:

- meta anual individual de Saving;
- Saving registrado, aprovado e validado;
- percentual de progresso em relação à meta;
- quantidade e valor por contrato, fechamento e pedido de compra;
- pendências, rejeições, duplicidades e evidências faltantes;
- consolidação por comprador, área, categoria, fornecedor e período.

As metas são definidas anualmente a partir do relatório geral do Zycus. Por isso, ano de referência, versão da meta, código do comprador, código da área e origem do relatório precisam fazer parte do registro e do histórico de alterações.

### Rastreabilidade mínima

Cada Saving deve ser identificável e rastreável até os documentos e eventos que o originaram, incluindo comprador, área, fornecedor, contrato, fechamento da negociação, pedido de compra, baseline, método de cálculo, moeda, período, evidências, aprovações e eventual registro de exportação para o Zycus. A densidade e a veracidade desses dados são requisitos corporativos, não apenas indicadores de interface.

## Diretriz arquitetural

A recomendação inicial é um **monólito modular com TypeScript**, usando React no frontend, Fastify no backend, PostgreSQL como fonte de verdade e armazenamento de objetos aprovado para os arquivos originais. A ingestão dos Excel/CSV extraídos pelo bot do SAP deve ocorrer por um worker assíncrono, com layouts versionados, validação por linha, detecção de duplicidade e importação idempotente. O mesmo stack reduz a complexidade operacional e permite extrair o importador ou o adaptador do Zycus como serviços independentes quando houver necessidade real.

O arquivo recebido do SAP não deve ser tratado como verdade absoluta. O sistema deve preservar o arquivo bruto e seu hash, registrar lote, versão do layout, linha de origem, valores originais e normalizados, totais de controle e mensagens de validação. Para dados digitados manualmente, deve exigir referência de origem, baseline, método, evidência e revisão por outra pessoa; alterações após aprovação devem gerar uma nova versão ou evento compensatório, nunca apagar o histórico.

Os detalhes da arquitetura, controles de qualidade, modelo de dados, logs, auditoria, acessibilidade e evolução da implantação estão em [docs/architecture.md](docs/architecture.md). A arquitetura deve medir tanto a operação quanto a qualidade dos dados: taxa de rejeição, duplicidades, campos faltantes, diferenças de reconciliação, tempo de aprovação, valor aprovado, valor validado e falhas de exportação para o Zycus.

## Planned local setup

Prerequisites: Node.js 20 or later and npm 10 or later.

```text
npm install
npm run dev
```

The application code will be added in small, validated slices. Before any corporate rollout, the solution needs review by IT, Information Security, Data Protection, and the process owner.

## Current status

The functional context and initial control requirements for buyer-level Saving capture, annual targets, auditability, and Zycus reporting are documented. The current implementation is still a prototype: SAP ingestion, corporate authentication, document OCR, database workflow, target management, and the Zycus export contract remain to be designed and approved.
