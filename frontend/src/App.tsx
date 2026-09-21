import './styles.css';

const statusSteps = ['Contratado', 'Implementado', 'Mensurado', 'Validado'];

const responsibilities = [
  ['Supply Chain', 'Estrutura a oportunidade, conduz a negociação e mantém a evidência comercial.'],
  ['Operação', 'Valida o baseline, confirma a implementação e mede desempenho e qualidade.'],
  ['Finanças', 'Valida metodologia, cálculo, reflexo financeiro e evita dupla contagem.'],
  ['Gestão Contratual', 'Acompanha SLA, reajustes, aditivos e a erosão do valor na vigência.'],
  ['Inteligência Técnica', 'Valida ganhos técnicos, alternativas, especificação e ciclo de vida.'],
  ['HSE, Compliance, Jurídico e Tax', 'Validam componentes específicos de valor, risco e tratamento tributário.'],
  ['Auditoria', 'Verifica evidências, reprodutibilidade, aprovações e aderência à execução.'],
];

export function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">VD</div>
        <div className="brand-copy">
          <strong>Value Delivery</strong>
          <span>Supply Chain</span>
        </div>
        <nav aria-label="Navegação principal">
          <a className="nav-link active" href="#overview"><span>◉</span> Visão geral</a>
          <a className="nav-link" href="#iniciativas"><span>◆</span> Iniciativas</a>
          <a className="nav-link" href="#responsabilidades"><span>▣</span> Responsabilidades</a>
          <a className="nav-link" href="#metodologia"><span>↗</span> Metodologia</a>
        </nav>
        <div className="sidebar-note">
          <span className="note-label">Princípio de controle</span>
          <p>SAP continua sendo o sistema oficial do processo de compras.</p>
        </div>
        <div className="user-chip"><span>BM</span><div><strong>Bruno M.</strong><small>Administrador</small></div></div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">Supply Chain <span>/</span> Value Delivery</div>
          <div className="topbar-actions"><button className="icon-button" aria-label="Notificações">♢</button><button className="help-button">?</button></div>
        </header>

        <section className="hero-section">
          <div>
            <p className="eyebrow">Modelo de gestão de benefícios</p>
            <h1>Valor entregue é<br /><em>mais que economia.</em></h1>
            <p className="hero-text">Identifique, implemente, meça e valide os benefícios gerados por Supply Chain para o negócio.</p>
          </div>
          <div className="hero-stamp"><span className="stamp-ring">✓</span><span><strong>Critério de valor entregue</strong><small>Implementado + mensurado + validado</small></span></div>
        </section>

        <section className="metric-grid" aria-label="Indicadores">
          <article className="metric-card highlight"><span className="metric-label">Valor contratado</span><strong>R$ 8,4 mi</strong><small>↑ 12,8% vs. período anterior</small><div className="sparkline"><i /><i /><i /><i /><i /><i /><i /></div></article>
          <article className="metric-card"><span className="metric-label">Valor validado</span><strong>R$ 5,9 mi</strong><small>70% do valor contratado</small><div className="progress"><span style={{ width: '70%' }} /></div></article>
          <article className="metric-card"><span className="metric-label">Iniciativas ativas</span><strong>24</strong><small>8 aguardando validação</small><div className="metric-status"><span className="dot green" /> 16 em acompanhamento</div></article>
          <article className="metric-card"><span className="metric-label">Evidências pendentes</span><strong>07</strong><small>Requerem ação nesta semana</small><div className="metric-status"><span className="dot amber" /> Revisão necessária</div></article>
        </section>

        <section className="saving-types" aria-labelledby="saving-types-title">
          <div className="section-heading"><div><p className="eyebrow">Origem do benefício</p><h2 id="saving-types-title">Como o Saving impacta o Delivery</h2></div><span className="section-tag">Classificação financeira</span></div>
          <div className="saving-type-grid">
            <article className="saving-type-card"><span className="saving-type-icon">%</span><div><h3>Reajuste</h3><p>Saving medido comparando o percentual previsto com o percentual efetivamente contratado.</p></div><div className="saving-rule"><span className="rule-dot" /><strong>% prevista × % contratado</strong><small>Registrar o índice escolhido, a previsão e o percentual negociado.</small></div></article>
            <article className="saving-type-card"><span className="saving-type-icon">R$</span><div><h3>Orçamento (EBITDA)</h3><p>Saving medido comparando o orçamento disponível com o valor contratado.</p></div><div className="saving-rule"><span className="rule-dot" /><strong>Orçamento × contratado</strong><small>Validar a redução no orçamento e a execução da entrega prevista.</small></div></article>
            <article className="saving-type-card"><span className="saving-type-icon">↔</span><div><h3>Proposta final × proposta inicial</h3><p>Saving medido pela diferença entre a proposta final e o valor inicial, normalmente o MPAT no template do Excel.</p></div><div className="saving-rule"><span className="rule-dot" /><strong>MPAT como baseline</strong><small>Registrar o valor inicial e confirmar que escopo e premissas são comparáveis.</small></div></article>
            <article className="saving-type-card"><span className="saving-type-icon">◷</span><div><h3>Prazo de pagamento ampliado</h3><p>Ganho temporário de capital de giro que gera folga no fluxo de caixa durante a vigência.</p></div><div className="saving-rule"><span className="rule-dot" /><strong>Benefício temporário</strong><small>Medir o período, as condições acordadas e o efeito financeiro real no caixa.</small></div></article>
          </div>
          <div className="adjustment-example"><span className="adjustment-icon">i</span><p><strong>Exemplo: aditivo por falta de verba</strong><span>Se o reajuste da verba, normalmente definido por um índice como o IPCA, for negociado abaixo do valor previsto, a diferença conta como Saving. O reajuste previsto seria inputado no caixa como custo, e não como penalty.</span></p></div>
          <div className="baseline-example"><div className="baseline-heading"><span className="baseline-icon">%</span><div><p className="eyebrow">Composição de custos</p><h3>Baseline: reajustar somente o que varia</h3></div></div><p className="baseline-copy">O baseline é o valor de mercado previsto para o produto ou serviço e deve refletir sua composição real.</p><div className="baseline-layout"><div className="composition-bar"><span className="labor-part">60% mão de obra</span><span className="input-part">40% insumo</span></div><div className="baseline-math"><div><span>Preço total</span><strong>100%</strong></div><div><span>Parcela exposta ao mercado</span><strong className="positive">40%</strong></div><div><span>Base correta do reajuste</span><strong>Valor do insumo</strong></div></div></div><p className="baseline-note">Se o preço do insumo variar, o reajuste deve incidir sobre os 40% correspondentes, e não proporcionalmente sobre o preço total. Assim, o cálculo preserva o valor real do baseline.</p></div>
        </section>

        <section className="content-grid" id="iniciativas">
          <article className="panel initiatives-panel">
            <div className="panel-heading"><div><p className="eyebrow">Acompanhamento</p><h2>Iniciativas em destaque</h2></div><button className="text-button">Ver todas <span>↗</span></button></div>
            <div className="table-wrap"><table><thead><tr><th>Iniciativa</th><th>Responsável</th><th>Valor</th><th>Status</th></tr></thead><tbody>
              <tr><td><strong>Manutenção de ativos críticos</strong><small>Contrato MC-2026-041</small></td><td>Supply Chain</td><td><strong>R$ 1,2 mi</strong><small className="positive">+ disponibilidade</small></td><td><span className="pill green-pill">Validado</span></td></tr>
              <tr><td><strong>Logística de materiais</strong><small>Contrato LM-2026-018</small></td><td>Operação</td><td><strong>R$ 860 mil</strong><small className="positive">+ produtividade</small></td><td><span className="pill blue-pill">Mensurado</span></td></tr>
              <tr><td><strong>Serviços especializados</strong><small>Contrato SE-2026-009</small></td><td>Finanças</td><td><strong>R$ 540 mil</strong><small className="negative">Evidência pendente</small></td><td><span className="pill amber-pill">Implementado</span></td></tr>
            </tbody></table></div>
          </article>

          <article className="panel process-panel" id="metodologia">
            <div className="panel-heading"><div><p className="eyebrow">Regra de reconhecimento</p><h2>Quando há valor entregue?</h2></div></div>
            <p className="panel-intro">Uma iniciativa só deve ser apresentada como valor entregue quando completar o ciclo de controle.</p>
            <div className="steps">{statusSteps.map((step, index) => <div className="step" key={step}><span className={`step-number ${index < 3 ? 'done' : ''}`}>{index < 3 ? '✓' : '4'}</span><span>{step}</span>{index < statusSteps.length - 1 && <i />}</div>)}</div>
            <div className="validation-callout"><span>✓</span><p><strong>Próximo marco: validação financeira</strong><small>8 iniciativas aguardam confirmação de Finanças.</small></p><button aria-label="Abrir validações">→</button></div>
          </article>
        </section>

        <section className="comparison-section">
          <div className="section-heading"><div><p className="eyebrow">Exemplo aplicado</p><h2>Savings versus Value Delivery</h2></div><span className="section-tag">Serviços de manutenção</span></div>
          <div className="comparison-grid"><div className="scenario"><span className="scenario-label">Cenário anterior</span><strong>R$ 12,0 mi</strong><div><span>Disponibilidade</span><b>88%</b></div><div><span>SLA de atendimento</span><b>12 horas</b></div><div><span>Paradas corretivas</span><b className="negative">Altas</b></div></div><div className="arrow">→</div><div className="scenario new-scenario"><span className="scenario-label">Nova contratação</span><strong>R$ 11,5 mi</strong><div><span>Disponibilidade contratada</span><b className="positive">93%</b></div><div><span>SLA de atendimento</span><b className="positive">6 horas</b></div><div><span>Plano preventivo</span><b className="positive">Estruturado</b></div></div><div className="delivery-result"><span className="metric-label">Não basta economizar</span><strong>R$ 500 mil</strong><p>O benefício real depende da implementação, do desempenho alcançado e da ausência de erosão por aditivos.</p><span className="result-link">Acompanhar entrega <b>↗</b></span></div></div>
        </section>

        <section className="roles-section" id="responsabilidades"><div className="section-heading"><div><p className="eyebrow">Governança compartilhada</p><h2>Quem participa da entrega</h2></div><p className="muted-copy">Cada função valida uma parte do valor e mantém a cadeia de evidências íntegra.</p></div><div className="roles-grid">{responsibilities.map(([role, description]) => <article className="role-card" key={role}><span className="role-icon">{role === 'Supply Chain' ? '↗' : role === 'Finanças' ? 'R$' : role === 'Auditoria' ? '✓' : '◇'}</span><div><h3>{role}</h3><p>{description}</p></div></article>)}</div></section>

        <footer><span>Value Delivery · 2026</span><span>Registros auditáveis de benefício <b>●</b></span></footer>
      </main>
    </div>
  );
}
