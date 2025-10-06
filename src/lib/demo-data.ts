// Dados de demonstração para o ASV Marketing

import { 
  User, Client, Lead, Project, Task, Proposal, Revenue, Expense, 
  Timesheet, DashboardKPIs, NavigationItem 
} from './types';

// Usuários demo
export const demoUsers: User[] = [
  {
    id: '1',
    nome: 'Ana Silva',
    email: 'ana@asvmarketing.com',
    role: 'admin',
    custo_hora: 150,
    capacidade_semana: 40,
    ativo: true
  },
  {
    id: '2',
    nome: 'Carlos Santos',
    email: 'carlos@asvmarketing.com',
    role: 'gestor_projetos',
    custo_hora: 120,
    capacidade_semana: 40,
    ativo: true
  },
  {
    id: '3',
    nome: 'Marina Costa',
    email: 'marina@asvmarketing.com',
    role: 'colaborador',
    custo_hora: 80,
    capacidade_semana: 40,
    ativo: true
  }
];

// Clientes demo
export const demoClients: Client[] = [
  {
    id: '1',
    razao_social: 'TechCorp Ltda',
    fantasia: 'TechCorp',
    contatos: [
      { nome: 'João Oliveira', email: 'joao@techcorp.com', telefone: '(11) 99999-9999', cargo: 'CEO' }
    ],
    nps_medio: 9,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    razao_social: 'Inovação Digital S.A.',
    fantasia: 'InovaDigital',
    contatos: [
      { nome: 'Maria Fernandes', email: 'maria@inovadigital.com', telefone: '(11) 88888-8888', cargo: 'CMO' }
    ],
    nps_medio: 8,
    created_at: '2024-02-01T10:00:00Z'
  },
  {
    id: '3',
    razao_social: 'StartupXYZ Ltda',
    fantasia: 'StartupXYZ',
    contatos: [
      { nome: 'Pedro Lima', email: 'pedro@startupxyz.com', telefone: '(11) 77777-7777', cargo: 'Founder' }
    ],
    nps_medio: 10,
    created_at: '2024-02-15T10:00:00Z'
  }
];

// Leads demo
export const demoLeads: Lead[] = [
  {
    id: '1',
    nome: 'Roberto Silva',
    empresa: 'EcommercePlus',
    origem: 'Website',
    estagio: 'qualificacao',
    valor_potencial: 25000,
    owner: '2',
    proximo_passo: 'Agendar reunião de descoberta',
    created_at: '2024-03-01T10:00:00Z'
  },
  {
    id: '2',
    nome: 'Lucia Santos',
    empresa: 'FashionBrand',
    origem: 'Indicação',
    estagio: 'proposta',
    valor_potencial: 40000,
    owner: '2',
    proximo_passo: 'Enviar proposta personalizada',
    created_at: '2024-03-05T10:00:00Z'
  }
];

// Projetos demo
export const demoProjects: Project[] = [
  {
    id: '1',
    client_ref: '1',
    nome: 'Campanha de Lançamento Q1',
    status: 'em_producao',
    escopo: 'Criação de campanha completa para lançamento de produto',
    valor: 50000,
    custo_prev: 30000,
    inicio: '2024-01-15',
    fim: '2024-04-15',
    responsavel: '2',
    progresso: 65,
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    client_ref: '2',
    nome: 'Rebranding Completo',
    status: 'aprovacao',
    escopo: 'Nova identidade visual e estratégia de marca',
    valor: 80000,
    custo_prev: 45000,
    inicio: '2024-02-01',
    fim: '2024-05-01',
    responsavel: '2',
    progresso: 85,
    created_at: '2024-02-01T10:00:00Z'
  },
  {
    id: '3',
    client_ref: '3',
    nome: 'Growth Hacking MVP',
    status: 'kickoff',
    escopo: 'Estratégias de crescimento para startup',
    valor: 30000,
    custo_prev: 18000,
    inicio: '2024-03-01',
    fim: '2024-06-01',
    responsavel: '2',
    progresso: 15,
    created_at: '2024-03-01T10:00:00Z'
  }
];

// Tarefas demo
export const demoTasks: Task[] = [
  {
    id: '1',
    project_ref: '1',
    titulo: 'Criação de personas',
    descricao: 'Desenvolver 3 personas principais do público-alvo',
    status: 'concluida',
    prioridade: 'alta',
    estimativa_h: 8,
    prazo: '2024-03-15',
    responsavel: '3',
    tags: ['pesquisa', 'estrategia'],
    created_at: '2024-01-20T10:00:00Z'
  },
  {
    id: '2',
    project_ref: '1',
    titulo: 'Design de landing page',
    descricao: 'Criar layout responsivo para campanha',
    status: 'em_andamento',
    prioridade: 'alta',
    estimativa_h: 16,
    prazo: '2024-03-20',
    responsavel: '3',
    tags: ['design', 'ui/ux'],
    created_at: '2024-02-01T10:00:00Z'
  },
  {
    id: '3',
    project_ref: '2',
    titulo: 'Apresentação final do rebranding',
    descricao: 'Preparar apresentação executiva com nova identidade',
    status: 'aprovacao',
    prioridade: 'critica',
    estimativa_h: 12,
    prazo: '2024-03-18',
    responsavel: '2',
    tags: ['apresentacao', 'branding'],
    aprovacao_status: 'pendente',
    created_at: '2024-02-15T10:00:00Z'
  }
];

// KPIs do Dashboard
export const demoDashboardKPIs: DashboardKPIs = {
  tarefas_vencendo_hoje: 3,
  tarefas_vencendo_semana: 8,
  percentual_concluidas: 72,
  projetos_por_status: {
    kickoff: 1,
    em_producao: 1,
    aprovacao: 1,
    ajustes: 0,
    entregue: 0
  },
  horas_registradas_mes: 156,
  leads_no_funil: 12,
  mrr_estimado: 45000,
  rentabilidade_media: 38,
  alertas: [
    {
      id: '1',
      tipo: 'warning',
      titulo: 'Tarefa crítica vencendo hoje',
      descricao: 'Apresentação final do rebranding precisa ser aprovada',
      created_at: '2024-03-18T08:00:00Z'
    },
    {
      id: '2',
      tipo: 'info',
      titulo: 'Novo lead qualificado',
      descricao: 'EcommercePlus demonstrou interesse em nossos serviços',
      created_at: '2024-03-17T14:30:00Z'
    }
  ]
};

// Navegação principal
export const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'BarChart3',
    href: '/dashboard'
  },
  {
    id: 'comercial',
    label: 'Comercial',
    icon: 'Users',
    href: '/comercial',
    badge: 5,
    children: [
      { id: 'leads', label: 'Leads', icon: 'UserPlus', href: '/comercial/leads' },
      { id: 'pipeline', label: 'Pipeline', icon: 'GitBranch', href: '/comercial/pipeline' },
      { id: 'propostas', label: 'Propostas', icon: 'FileText', href: '/comercial/propostas' }
    ]
  },
  {
    id: 'projetos',
    label: 'Projetos',
    icon: 'FolderOpen',
    href: '/projetos',
    badge: 3
  },
  {
    id: 'tarefas',
    label: 'Tarefas',
    icon: 'CheckSquare',
    href: '/tarefas',
    badge: 8
  },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: 'Building2',
    href: '/clientes'
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    icon: 'DollarSign',
    href: '/financeiro',
    children: [
      { id: 'receitas', label: 'Receitas', icon: 'TrendingUp', href: '/financeiro/receitas' },
      { id: 'despesas', label: 'Despesas', icon: 'TrendingDown', href: '/financeiro/despesas' },
      { id: 'relatorios', label: 'Relatórios', icon: 'PieChart', href: '/financeiro/relatorios' }
    ]
  },
  {
    id: 'equipe',
    label: 'Equipe',
    icon: 'Users2',
    href: '/equipe'
  },
  {
    id: 'conversas',
    label: 'Conversas',
    icon: 'MessageSquare',
    href: '/conversas',
    badge: 2
  },
  {
    id: 'automacao',
    label: 'Automação',
    icon: 'Zap',
    href: '/automacao'
  },
  {
    id: 'configuracoes',
    label: 'Configurações',
    icon: 'Settings',
    href: '/configuracoes'
  }
];

// Utilitários para formatação
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

// Função de formatação de data que evita hydration mismatch
export const formatDate = (date: string): string => {
  // Usar valores fixos para evitar diferenças entre servidor e cliente
  const dateMap: Record<string, string> = {
    '2024-01-15': '15/01/2024',
    '2024-02-01': '01/02/2024',
    '2024-02-15': '15/02/2024',
    '2024-03-01': '01/03/2024',
    '2024-03-05': '05/03/2024',
    '2024-03-15': '15/03/2024',
    '2024-03-18': '18/03/2024',
    '2024-03-20': '20/03/2024',
    '2024-04-15': '15/04/2024',
    '2024-05-01': '01/05/2024',
    '2024-06-01': '01/06/2024'
  };
  
  return dateMap[date] || date;
};

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    // Task status
    'todo': 'bg-gray-500',
    'em_andamento': 'bg-blue-500',
    'aprovacao': 'bg-yellow-500',
    'concluida': 'bg-green-500',
    'cancelada': 'bg-red-500',
    
    // Project status
    'kickoff': 'bg-purple-500',
    'em_producao': 'bg-blue-500',
    'ajustes': 'bg-orange-500',
    'entregue': 'bg-green-500',
    
    // Lead stages
    'novos': 'bg-gray-500',
    'qualificacao': 'bg-blue-500',
    'proposta': 'bg-yellow-500',
    'negociacao': 'bg-orange-500',
    'fechado_ganho': 'bg-green-500',
    'fechado_perdido': 'bg-red-500',
    
    // Priority
    'baixa': 'bg-green-500',
    'media': 'bg-yellow-500',
    'alta': 'bg-orange-500',
    'critica': 'bg-red-500'
  };
  
  return colors[status] || 'bg-gray-500';
};

export const getPriorityIcon = (priority: string): string => {
  const icons: Record<string, string> = {
    'baixa': 'ArrowDown',
    'media': 'Minus',
    'alta': 'ArrowUp',
    'critica': 'AlertTriangle'
  };
  
  return icons[priority] || 'Minus';
};