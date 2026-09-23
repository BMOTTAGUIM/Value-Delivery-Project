# Dados de referência

As planilhas em `source/` são os arquivos originais fornecidos para análise.

Os arquivos em `normalized/` são representações JSON dos mesmos workbooks. A estrutura preserva:

- nome do arquivo e das abas;
- posição da linha de cabeçalho;
- linhas anteriores ao cabeçalho em `preamble`;
- ordem e posição das colunas;
- número original de cada linha;
- valores das células;
- fórmulas identificadas na linha.

Os JSONs são uma cópia estruturada para transporte, análise e prototipação do Hub. Eles não substituem o XLSX quando formatação, gráficos, filtros, macros ou validações visuais forem relevantes.

Os arquivos podem conter informação comercial. O uso, compartilhamento e versionamento devem seguir a classificação e a autorização corporativa aplicáveis.