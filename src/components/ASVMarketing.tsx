'use client';

import React, { useState } from 'react';
import { 
  BarChart3, Users, FolderOpen, CheckSquare, Building2, DollarSign, 
  Users2, MessageSquare, Zap, Settings, Menu, Search, Bell, 
  ChevronDown, ChevronRight, Plus, Filter, Calendar, Grid3X3,
  TrendingUp, TrendingDown, Clock, AlertTriangle, CheckCircle,
  ArrowUp, ArrowDown, Minus, UserPlus, GitBranch, FileText,
  PieChart, X
} from 'lucide-react';
import { 
  navigationItems, demoDashboardKPIs, demoProjects, demoTasks, 
  demoLeads, formatCurrency, formatDate, getStatusColor, getPriorityIcon 
} from '@/lib/demo-data';
import { NavigationItem, DashboardKPIs } from '@/lib/types';

// Componente de ícone dinâmico
const DynamicIcon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons: Record<string, React.ComponentType<any>> = {
    BarChart3, Users, FolderOpen, CheckSquare, Building2, DollarSign,
    Users2, MessageSquare, Zap, Settings, UserPlus, GitBranch, FileText,
    TrendingUp, TrendingDown, PieChart, ArrowUp, ArrowDown, Minus, AlertTriangle
  };
  
  const IconComponent = icons[name] || Settings;
  return <IconComponent className={className} />;
};

// Componente de navegação lateral
const Sidebar = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(['comercial', 'financeiro']);
  
  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full bg-[#1E1E1E] border-r border-[#2B2B2B] z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-auto
        w-64
      `}>
        {/* Header */}
        <div className="p-6 border-b border-[#2B2B2B]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF6A00] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ASV</span>
            </div>
            <div>
              <h1 className="text-white font-semibold">ASV Marketing</h1>
              <p className="text-gray-400 text-xs">Gestão de Agência</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-100px)]">
          {navigationItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.children && toggleExpanded(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:bg-[#2B2B2B] hover:text-white transition-colors group"
              >
                <DynamicIcon name={item.icon} className="w-5 h-5" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-[#FF6A00] text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.children && (
                  expandedItems.includes(item.id) ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {/* Submenu */}
              {item.children && expandedItems.includes(item.id) && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-[#2B2B2B] hover:text-white transition-colors text-sm"
                    >
                      <DynamicIcon name={child.icon} className="w-4 h-4" />
                      <span>{child.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

// Componente de header
const Header = ({ onMenuToggle }: { onMenuToggle: () => void }) => {
  return (
    <header className="bg-[#1E1E1E] border-b border-[#2B2B2B] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-[#2B2B2B] transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-300" />
          </button>
          
          {/* Breadcrumbs */}
          <nav className="hidden sm:flex items-center gap-2 text-sm">
            <span className="text-gray-400">Dashboard</span>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-[#2B2B2B] rounded-lg px-3 py-2 min-w-[300px]">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar projetos, tarefas, clientes..."
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
            />
            <kbd className="text-xs text-gray-400 bg-[#1E1E1E] px-2 py-1 rounded">
              /
            </kbd>
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-[#2B2B2B] transition-colors">
            <Bell className="w-5 h-5 text-gray-300" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6A00] rounded-full"></span>
          </button>

          {/* User menu */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#FF6A00] rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">AS</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white text-sm font-medium">Ana Silva</p>
              <p className="text-gray-400 text-xs">Administrador</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

// Card de KPI
const KPICard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend, 
  color = "text-white" 
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: string;
  trend?: 'up' | 'down';
  color?: string;
}) => {
  return (
    <div className="bg-[#1E1E1E] border border-[#2B2B2B] rounded-xl p-6 hover:border-[#FF6A00]/20 transition-colors cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-[#FF6A00]/10 rounded-lg">
          <DynamicIcon name={icon} className="w-5 h-5 text-[#FF6A00]" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
            {trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          </div>
        )}
      </div>
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
        <p className={`text-2xl font-bold ${color} mb-1`}>{value}</p>
        {subtitle && <p className="text-gray-500 text-xs">{subtitle}</p>}
      </div>
    </div>
  );
};

// Componente de alerta
const AlertCard = ({ alert }: { alert: any }) => {
  const iconMap = {
    warning: AlertTriangle,
    error: X,
    info: CheckCircle
  };
  
  const colorMap = {
    warning: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    error: 'text-red-400 bg-red-400/10 border-red-400/20',
    info: 'text-blue-400 bg-blue-400/10 border-blue-400/20'
  };
  
  const Icon = iconMap[alert.tipo as keyof typeof iconMap];
  const colors = colorMap[alert.tipo as keyof typeof colorMap];
  
  return (
    <div className={`border rounded-lg p-4 ${colors}`}>
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium mb-1">{alert.titulo}</h4>
          <p className="text-sm opacity-80">{alert.descricao}</p>
        </div>
      </div>
    </div>
  );
};

// Dashboard principal
const Dashboard = () => {
  const kpis = demoDashboardKPIs;
  
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Bem-vindo à ASV Marketing — sua operação de agência, organizada e lucrativa.
        </h1>
        <p className="text-gray-400">
          Visão geral dos seus projetos, tarefas e performance da equipe.
        </p>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Tarefas Vencendo Hoje"
          value={kpis.tarefas_vencendo_hoje}
          subtitle="3 críticas"
          icon="Clock"
          trend="up"
          color="text-red-400"
        />
        <KPICard
          title="Taxa de Conclusão"
          value={`${kpis.percentual_concluidas}%`}
          subtitle="Meta: 80%"
          icon="CheckCircle"
          trend="up"
          color="text-green-400"
        />
        <KPICard
          title="MRR Estimado"
          value={formatCurrency(kpis.mrr_estimado)}
          subtitle="Crescimento de 12%"
          icon="TrendingUp"
          trend="up"
          color="text-[#FF6A00]"
        />
        <KPICard
          title="Rentabilidade Média"
          value={`${kpis.rentabilidade_media}%`}
          subtitle="Últimos 30 dias"
          icon="PieChart"
          trend="up"
          color="text-blue-400"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projetos Ativos */}
        <div className="lg:col-span-2 bg-[#1E1E1E] border border-[#2B2B2B] rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Projetos Ativos</h2>
            <button className="text-[#FF6A00] hover:text-[#FF6A00]/80 text-sm font-medium">
              Ver todos
            </button>
          </div>
          
          <div className="space-y-4">
            {demoProjects.slice(0, 3).map((project) => (
              <div key={project.id} className="border border-[#2B2B2B] rounded-lg p-4 hover:border-[#FF6A00]/20 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></span>
                    <h3 className="text-white font-medium">{project.nome}</h3>
                  </div>
                  <span className="text-gray-400 text-sm">{formatDate(project.fim)}</span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 text-sm">Progresso</span>
                  <span className="text-white text-sm font-medium">{project.progresso}%</span>
                </div>
                
                <div className="w-full bg-[#2B2B2B] rounded-full h-2">
                  <div 
                    className="bg-[#FF6A00] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${project.progresso}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alertas e Tarefas */}
        <div className="space-y-6">
          {/* Alertas */}
          <div className="bg-[#1E1E1E] border border-[#2B2B2B] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Alertas</h2>
            <div className="space-y-3">
              {kpis.alertas.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
            </div>
          </div>

          {/* Tarefas Críticas */}
          <div className="bg-[#1E1E1E] border border-[#2B2B2B] rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Tarefas Críticas</h2>
            <div className="space-y-3">
              {demoTasks.filter(task => task.prioridade === 'critica').map((task) => (
                <div key={task.id} className="flex items-center gap-3 p-3 border border-[#2B2B2B] rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{task.titulo}</p>
                    <p className="text-gray-400 text-xs">{formatDate(task.prazo)}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(task.status)} text-white`}>
                    {task.status.replace('_', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#1E1E1E] border border-[#2B2B2B] rounded-xl p-6">
        <h2 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 border border-[#2B2B2B] rounded-lg hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-colors">
            <Plus className="w-5 h-5 text-[#FF6A00]" />
            <span className="text-white font-medium">Nova Tarefa</span>
          </button>
          <button className="flex items-center gap-3 p-4 border border-[#2B2B2B] rounded-lg hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-colors">
            <FolderOpen className="w-5 h-5 text-[#FF6A00]" />
            <span className="text-white font-medium">Novo Projeto</span>
          </button>
          <button className="flex items-center gap-3 p-4 border border-[#2B2B2B] rounded-lg hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-colors">
            <UserPlus className="w-5 h-5 text-[#FF6A00]" />
            <span className="text-white font-medium">Novo Lead</span>
          </button>
          <button className="flex items-center gap-3 p-4 border border-[#2B2B2B] rounded-lg hover:border-[#FF6A00]/20 hover:bg-[#FF6A00]/5 transition-colors">
            <FileText className="w-5 h-5 text-[#FF6A00]" />
            <span className="text-white font-medium">Nova Proposta</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente principal
export default function ASVMarketing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
          <main className="min-h-[calc(100vh-80px)]">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
}