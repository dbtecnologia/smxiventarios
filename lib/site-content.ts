/**
 * Conteúdo central do site. Edite aqui textos, contatos e listas.
 * Itens com `review: true` precisam de confirmação da SMX antes da publicação
 * e exibem um selo "Confirmar" enquanto SHOW_REVIEW_NOTES estiver ativo.
 */

export const SHOW_REVIEW_NOTES = true

export const site = {
  name: 'SMX Inventários',
  url: 'https://www.smxinventarios.com.br',
  city: 'Rio de Janeiro',
  stateCode: 'RJ',
  yearsInMarket: 20,
  email: 'comercial@smxinventarios.com.br',
  phones: [{ label: 'Comercial', display: '(21) 4104-3180', tel: '+552141043180' }],
  whatsapp: [
    { display: '(21) 96502-3771', number: '5521965023771' },
    { display: '(21) 98143-2473', number: '5521981432473' },
  ],
  whatsappMessage:
    'Olá, SMX! Gostaria de solicitar um orçamento de inventário de estoque para minha empresa.',
}

export function whatsappUrl(number: string = site.whatsapp[0].number) {
  return `https://wa.me/${number}?text=${encodeURIComponent(site.whatsappMessage)}`
}

export const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#quem-somos', label: 'Quem Somos' },
  { href: '#solucoes', label: 'Soluções' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#areas-atendidas', label: 'Áreas Atendidas' },
  { href: '#contato', label: 'Contato' },
]

export const processSteps = [
  {
    title: 'Planejamento e preparação do local',
    description:
      'Alinhamos escopo, datas e cronograma com sua equipe e organizamos previamente a área a ser inventariada.',
  },
  {
    title: 'Contagem com equipe treinada',
    description:
      'Profissionais qualificados, sob liderança experiente em campo, realizam a contagem com equipamentos confiáveis.',
  },
  {
    title: 'Conferência e análise de divergências',
    description:
      'Os resultados são verificados de forma analítica, com apontamento de divergências e das condições físicas dos produtos.',
  },
  {
    title: 'Relatórios e arquivos para o seu sistema',
    description:
      'Entregamos relatórios completos e comparativos, além dos arquivos para atualizar o saldo de estoque no seu sistema interno.',
  },
]

export const benefits = [
  {
    icon: 'boxes',
    title: 'Conhecimento real do estoque',
    description: 'Saiba com clareza o que existe fisicamente em cada área, loja ou depósito.',
  },
  {
    icon: 'shield',
    title: 'Prevenção de perdas',
    description: 'Divergências identificadas cedo ajudam a investigar causas e agir com rapidez.',
  },
  {
    icon: 'scan',
    title: 'Identificação de rupturas',
    description: 'Visualize itens em falta que o sistema aponta como disponíveis.',
  },
  {
    icon: 'cart',
    title: 'Compras mais assertivas',
    description: 'Pedidos de compra baseados em saldos confiáveis, e não em estimativas.',
  },
  {
    icon: 'coins',
    title: 'Redução de custos',
    description: 'Menos capital parado em excesso de estoque e melhor uso do capital de giro.',
  },
  {
    icon: 'chart',
    title: 'Apoio à tomada de decisão',
    description: 'Relatórios comparativos que embasam decisões operacionais e financeiras.',
  },
] as const

export const differentials = [
  {
    title: 'Liderança experiente em campo',
    description:
      'Toda operação conta com um líder preparado para resolver os desafios de cada inventário.',
  },
  {
    title: 'Equipe qualificada e treinada',
    description: 'Profissionais capacitados para contagens precisas em diferentes ambientes de estoque.',
  },
  {
    title: 'Equipamentos modernos e confiáveis',
    description: 'Coletores de dados que garantem precisão na leitura dos produtos.',
  },
  {
    title: 'Software próprio',
    description: 'Leitura correta dos produtos, contagem ágil e resultados logo após a conclusão.',
  },
  {
    title: 'Resultados analíticos',
    description: 'Mais do que contar: verificamos os números e apontamos divergências e condições físicas.',
  },
  {
    title: 'Relatórios comparativos',
    description: 'Comparação entre estoque físico e sistema, pronta para análise da sua gestão.',
  },
]

export const segments = [
  { title: 'Varejo de moda e vestuário', review: true },
  { title: 'Farmácias e drogarias', review: true },
  { title: 'Supermercados e mercearias', review: true },
  { title: 'Cosméticos e perfumaria', review: true },
  { title: 'Brinquedos e presentes', review: true },
  { title: 'Utilidades domésticas e decoração', review: true },
  { title: 'Tintas e materiais de construção', review: true },
  { title: 'Saúde e hospitais', review: true },
  { title: 'Lazer e atrações turísticas', review: true },
  { title: 'Transporte e serviços', review: true },
]

export const regions = [
  {
    name: 'Sudeste',
    states: [
      { code: 'RJ', name: 'Rio de Janeiro' },
      { code: 'SP', name: 'São Paulo' },
      { code: 'MG', name: 'Minas Gerais' },
      { code: 'ES', name: 'Espírito Santo' },
    ],
  },
  {
    name: 'Nordeste',
    states: [
      { code: 'BA', name: 'Bahia' },
      { code: 'SE', name: 'Sergipe' },
      { code: 'AL', name: 'Alagoas' },
      { code: 'PE', name: 'Pernambuco' },
      { code: 'PB', name: 'Paraíba' },
      { code: 'RN', name: 'Rio Grande do Norte' },
    ],
  },
]

export const allServedStates = regions.flatMap((r) => r.states)

export const operationTypes = [
  'Loja de varejo',
  'Rede de lojas',
  'Supermercado / mercearia',
  'Farmácia / drogaria',
  'Centro de distribuição / depósito',
  'Indústria',
  'Outro',
]
