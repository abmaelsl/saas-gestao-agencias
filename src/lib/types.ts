// Tipos e interfaces do ASV Marketing

export type UserRole = 'admin' | 'gestor_projetos' | 'financeiro' | 'comercial' | 'colaborador' | 'cliente';

export type TaskPriority = 'baixa' | 'media' | 'alta' | 'critica';
export type TaskStatus = 'todo' | 'em_andamento' | 'aprovacao' | 'concluida' | 'cancelada';
export type ProjectStatus = 'kickoff' | 'em_producao' | 'aprovacao' | 'ajustes' | 'entregue';
export type LeadStage = 'novos' | 'qualificacao' | 'proposta' | 'negociacao' | 'fechado_ganho' | 'fechado_perdido';
export type ApprovalStatus = 'pendente' | 'aprovado' | 'recusado';

export interface User {
  id: string;
  nome: string;
  email: string;
  role: UserRole;
  custo_hora: number;
  capacidade_semana: number;
  ativo: boolean;
  avatar?: string;
}

export interface Client {
  id: string;
  razao_social: string;
  fantasia: string;
  contatos: Contact[];
  nps_medio?: number;
  created_at: string;
}

export interface Contact {
  nome: string;
  email: string;
  telefone?: string;
  cargo?: string;
}

export interface Lead {
  id: string;
  client_ref?: string;
  nome: string;
  empresa: string;
  origem: string;
  estagio: LeadStage;
  valor_potencial: number;
  owner: string;
  proximo_passo: string;
  notas?: string;
  created_at: string;
}

export interface Project {
  id: string;
  client_ref: string;
  contract_ref?: string;
  nome: string;
  status: ProjectStatus;
  escopo: string;
  valor: number;
  custo_prev: number;
  inicio: string;
  fim: string;
  responsavel: string;
  progresso: number;
  created_at: string;
}

export interface Task {
  id: string;
  project_ref: string;
  titulo: string;
  descricao?: string;
  status: TaskStatus;
  prioridade: TaskPriority;
  estimativa_h: number;
  prazo: string;
  responsavel: string;
  tags: string[];
  aprovacao_status?: ApprovalStatus;
  aprovacao_comentario?: string;
  created_at: string;
}

export interface Proposal {
  id: string;
  lead_ref?: string;
  client_ref?: string;
  itens: ProposalItem[];
  subtotal: number;
  impostos: number;
  desconto: number;
  total: number;
  validade: string;
  status: 'rascunho' | 'enviada' | 'aprovada' | 'recusada';
  created_at: string;
}

export interface ProposalItem {
  descricao: string;
  quantidade: number;
  valor_unitario: number;
  total: number;
}

export interface Revenue {
  id: string;
  project_ref?: string;
  client_ref?: string;
  valor: number;
  data: string;
  status_recebimento: 'pendente' | 'recebido' | 'atrasado';
  meio: string;
  created_at: string;
}

export interface Expense {
  id: string;
  project_ref?: string;
  client_ref?: string;
  categoria: string;
  valor: number;
  data: string;
  observacoes?: string;
  created_at: string;
}

export interface Timesheet {
  id: string;
  task_ref: string;
  user_ref: string;
  horas: number;
  inicio?: string;
  fim?: string;
  nota?: string;
  created_at: string;
}

export interface DashboardKPIs {
  tarefas_vencendo_hoje: number;
  tarefas_vencendo_semana: number;
  percentual_concluidas: number;
  projetos_por_status: Record<ProjectStatus, number>;
  horas_registradas_mes: number;
  leads_no_funil: number;
  mrr_estimado: number;
  rentabilidade_media: number;
  alertas: Alert[];
}

export interface Alert {
  id: string;
  tipo: 'warning' | 'error' | 'info';
  titulo: string;
  descricao: string;
  created_at: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  badge?: number;
  children?: NavigationItem[];
}