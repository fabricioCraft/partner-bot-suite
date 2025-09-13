import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Bot, TrendingUp, Users, BarChart3, MessageSquare, Zap, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-business-purple" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Solutions
              </span>
            </div>
            <Button variant="default" className="bg-gradient-primary shadow-premium">
              Contato
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Agentes de IA para WhatsApp
            <span className="block text-blue-100">Que Revolucionam Vendas</span>
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Soluções completas de automação com agentes SDR, integrações CRM e dashboards exclusivos. 
            Propostas comerciais premium para agências e parceiros estratégicos.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-business-purple flex items-center justify-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Dashboard Integrado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-business-purple">Visualização Completa</h4>
                    <ul className="space-y-2 text-xs text-business-gray text-center">
                      <li className="flex justify-center items-center space-x-2">
                        <TrendingUp className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Quantidade de leads em cada etapa</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <MessageSquare className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Engajamento das campanhas de nutrição</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <Users className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Taxa de reengajamento de leads</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <BarChart3 className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Resultado por canal</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-semibold text-sm text-business-purple mt-4">Relatórios Avançados</h4>
                    <ul className="space-y-2 text-xs text-business-gray text-center">
                      <li className="flex justify-center items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Produtividade dos agentes</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Taxa de respostas</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Evolução dos KPIs mês a mês</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-business-purple flex items-center justify-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Onboarding & Suporte</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-business-purple">Treinamento Multiprofissional</h4>
                    <ul className="space-y-2 text-xs text-business-gray text-center">
                      <li className="flex justify-center items-center space-x-2">
                        <Users className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Capacitação para marketing</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <Bot className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Treinamento para SDR</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <TrendingUp className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Capacitação para vendas</span>
                      </li>
                    </ul>
                    
                    <h4 className="font-semibold text-sm text-business-purple mt-4">Documentação & Suporte</h4>
                    <ul className="space-y-2 text-xs text-business-gray text-center">
                      <li className="flex justify-center items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Documentação didática para autonomia</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <MessageSquare className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Canal de suporte para ajustes</span>
                      </li>
                      <li className="flex justify-center items-center space-x-2">
                        <Zap className="h-3 w-3 text-business-accent flex-shrink-0" />
                        <span>Manutenção e upgrade dos fluxos</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Estrutura da Proposta */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Estrutura Premium para Parceiros</h2>
            <p className="text-business-gray max-w-2xl mx-auto">
              Nossa metodologia comprovada garante alta margem para parceiros e valor excepcional para clientes finais
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: BarChart3, title: "Diagnóstico & Escopo", desc: "Análise detalhada das necessidades" },
              { icon: Zap, title: "Setup + Integrações", desc: "Implementação completa em 15 dias" },
              { icon: TrendingUp, title: "Dashboard Incluso", desc: "Métricas e KPIs em tempo real" },
              { icon: Shield, title: "Gestão de Projeto", desc: "Suporte contínuo e melhorias" },
              { icon: Users, title: "Margem Parceiro", desc: "15% setup + 10% recorrente" },
              { icon: MessageSquare, title: "Valor Justificado", desc: "ROI comprovado para o cliente" }
            ].map((item, index) => (
              <div key={index} className="text-center shadow-card hover:shadow-premium transition-all duration-300 rounded-lg border bg-card text-card-foreground shadow-sm p-6 pt-6">
                <item.icon className="h-12 w-12 text-business-purple mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-business-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cliente 1 - Contratado */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-3xl font-bold">Cliente 1</h2>
                  <Badge className="bg-business-accent text-white px-3 py-1">CONTRATADO</Badge>
                </div>
                <p className="text-business-gray text-lg">Agente SDR de Qualificação Multicanal</p>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-business-purple" />
                    <span>Escopo Detalhado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-business-purple">Implantação de Agente SDR de Qualificação Multicanal</h4>
                    {[
                      "Toda lead recebida via site, campanhas pagas (Google, Facebook/Instagram Ads) ou directs (Instagram, LinkedIn, Facebook) é enviada automaticamente para o WhatsApp",
                      "O agente IA inicia conversa automatizada, faz as perguntas de qualificação (perfil, interesse, urgência, potencial de venda)",
                      "Transfere leads qualificados para o estágio correto do Funil 'Captação Online' criado no RD CRM, via integração API",
                      "O agente registra no CRM (RD Station): nome, telefone, e-mail, respostas e o resumo da interação",
                      "Fluxo 100% documentado (arquitetura N8N, mapas, prompts, instruções operacionais para o time)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                    

                  </div>
                </CardContent>
              </Card>

            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-center">Proposta Comercial</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="mb-4">
                      <p className="text-blue-100 text-sm">Setup único</p>
                      <p className="text-3xl font-bold">R$ 9.800</p>
                      <p className="text-blue-200 text-xs">Tudo incluso</p>
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Mensalidade</p>
                      <p className="text-2xl font-bold">R$ 1.950<span className="text-lg">/mês</span></p>
                      <p className="text-blue-200 text-xs">Suporte completo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-business-purple">Justificativa de Valor</CardTitle>
                </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-business-purple">Benefícios Diretos</h4>
                    <ul className="space-y-2 text-sm text-business-gray">
                      <li className="flex items-start space-x-2">
                        <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Acelera o processo de qualificação</strong> em múltiplos canais, sem necessidade de SDR humano inicial: Lead respondido em segundos = menos perdas + redução de "esfriamento" por demora</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Aumento de conversão:</strong> Sem perdas por demora ou falha humana → taxas até 30% mais altas de captação</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <Shield className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Centralização e controle:</strong> CRM sempre atualizado e dashboards de gestão para melhorias contínuas no processo</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-business-purple">Economia e Eficiência</h4>
                    <ul className="space-y-2 text-sm text-business-gray">
                      <li className="flex items-start space-x-2">
                        <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Economia direta com mão de obra:</strong> Só o salário de um SDR/plano básico é de R$ 3k/mês. Com esse agente, processo gira 24/7 sem custo extra e sem riscos trabalhistas</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Menos retrabalho para vendedores:</strong> Só o lead potencial chega para venda! Reduz desgaste, aumenta foco e produtividade</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <MessageSquare className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span><strong>Time ganha agilidade</strong> e capacidade de atendimento simultâneo que seria impossível manualmente</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cliente 2 - Em Negociação */}
      <section className="py-16 bg-business-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-3xl font-bold">Cliente 2</h2>
                  <Badge variant="outline" className="border-amber-500 text-amber-600 px-3 py-1">EM NEGOCIAÇÃO</Badge>
                </div>
                <p className="text-business-gray text-lg">Sistema Completo: SDR + Simulador Financeiro + Integração Porto Seguro</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-business-purple" />
                    <span>Agente 1: SDR 2.0</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Processo idêntico ao Cliente 1, porém com prompt treinado no tom/linguagem da marca",
                      "Base de conhecimento específica do Cliente 2",
                      "Integra 100% com RD CRM (criação de lead, envio de respostas, monitoramento)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 7.900</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-business-purple" />
                    <span>Agente 2: Simulador</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Conversa automatizada para captar dados de financiamento",
                      "Integração com APIs do Banco Central/fintechs para taxas em tempo real",
                      "Calcula e apresenta melhor proposta no WhatsApp",
                      "Convence com argumentos treinados customizáveis"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 6.800</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-business-purple" />
                    <span>Agente 3: Porto Seguro</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Push automático para API da Porto Seguro quando lead aceita produto",
                      "Dispara processo de emissão/conversão automática",
                      "Feedback instantâneo sobre estágio da proposta",
                      "Registro completo no CRM"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 6.200</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-center">Proposta Combo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>3 Agentes + Dashboard</span>
                      <span>R$ 23.400</span>
                    </div>
                    <div className="flex justify-between text-blue-200 text-sm">
                      <span>Desconto disponível (20%)</span>
                      <span>-R$ 4.680</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Setup</span>
                        <span>R$ 18.720</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-blue-100 text-sm">Mensalidade</p>
                    <p className="text-2xl font-bold">R$ 3.900<span className="text-lg">/mês</span></p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-business-purple">Justificativa de Valor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Complexidade e automação de ponta</p>
                        <p className="text-xs text-business-gray">Processo de simulação que hoje é manual, sujeito a erros, passa a ser INSTANTÂNEO — aumenta credibilidade e velocidade (quem chega antes, geralmente fecha)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Redução do custo operacional</p>
                        <p className="text-xs text-business-gray">Seriam necessários vários SDRs e assistentes, além de analista/consultor de financiamento, para fazer o que os 3 agentes fazem de forma integrada</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Diferencial competitivo TOTAL</p>
                        <p className="text-xs text-business-gray">Nenhum concorrente local vai operar com nível de automação semelhante — é argumento de venda para captar mais leads</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cliente 3 - Em Negociação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-3xl font-bold">Cliente 3</h2>
                  <Badge variant="outline" className="border-amber-500 text-amber-600 px-3 py-1">EM NEGOCIAÇÃO</Badge>
                </div>
                <p className="text-business-gray text-lg">Sistema Avançado: SDR + Follow-up Automático</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-business-purple" />
                    <span>Agente 1: SDR com Integração CRM CV + Blip</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Recebe leads automáticos de múltiplos canais no WhatsApp",
                      "Qualifica via agente IA treinado no tom da empresa",
                      "Integração com CRM CV: abertura de oportunidade, envio de dados, criação de histórico",
                      "Fluxo multicanal: WhatsApp e sistema Blip de conversação",
                      "Documentação e padrão operacional prontinho para escala"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 8.400</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-business-purple" />
                    <span>Agente 2: Follow-up Automático</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Detecta negociação em aberto ou ausência de resposta",
                      "Dispara mensageria personalizada (timing, histórico e lógica de priorização)",
                      "Lógica 'resuscita' leads frios ou esquecidos",
                      "Educa, faz prospecção passiva até trazer resposta",
                      "Reativa interesse sem ação manual do SDR/vendedor",
                      "Envia alertas ao time para leads que demonstram interesse ou voltam a responder"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 5.000</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-business-purple" />
                    <span>Agente 3: Nutrição de Conteúdo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {[
                      "Gatilhos programados para envio de conteúdos personalizados por etapa da jornada",
                      "Vídeos, artigos, dicas, depoimentos — agente dispara no timing certo",
                      "Matura o lead até a hora da venda sem trabalho do operacional",
                      "Histórico de disparos disponível para acompanhamento do time"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">R$ 4.200</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle className="text-center">Proposta Combo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>3 Agentes + Dashboard</span>
                      <span>R$ 20.100</span>
                    </div>
                    <div className="flex justify-between text-blue-200 text-sm">
                      <span>Desconto disponível (20%)</span>
                      <span>-R$ 3.015</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Setup</span>
                        <span>R$ 17.085</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-blue-100 text-sm">Mensalidade</p>
                    <p className="text-2xl font-bold">R$ 3.200<span className="text-lg">/mês</span></p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-business-purple">Justificativa de Valor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Processo de vendas full digital e escalável</p>
                        <p className="text-xs text-business-gray">Agentes eliminam a dependência de SDRs em tarefas repetitivas. Processos executados simultaneamente, 24/7, multiplicando a capacidade do funil sem aumentar time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Menos perdas, mais conversão</p>
                        <p className="text-xs text-business-gray">Ninguém esquece um follow-up, não se perde lead frio e não deixa cliente maturando sem acompanhamento</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Nutrição = vendas de ciclo longo</p>
                        <p className="text-xs text-business-gray">Educação automatizada aumenta assertividade, reduz objeção e melhora conversão de leads de consideração demorada (clássico em B2B, serviços educacionais e consultorias)</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <BarChart3 className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Gestão centralizada, melhoria contínua</p>
                        <p className="text-xs text-business-gray">Dashboard mostra tudo: gargalos, ganhos, campanhas assertivas — facilita correção de rota, tomada de decisão, priorização de actions pelo time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Shield className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Economia e ROI imediato</p>
                        <p className="text-xs text-business-gray">Setup equivale a um ou dois salários de profissional pleno. Sistema nunca "cansa", "esquece" ou pede demissão. Mensalidade menor que um estagiário — mas faz trabalho de vários</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Dashboards */}
      <section className="py-16 bg-business-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Dashboards Personalizados</h2>
            <p className="text-business-gray text-lg mb-8">
              Cada projeto inclui dashboard exclusivo com métricas específicas do negócio
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Revolucionar Suas Vendas?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Junte-se aos nossos parceiros e ofereça soluções de IA que realmente transformam negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-business-purple border-white hover:bg-blue-50">
              Ver Demonstração
            </Button>
            <Button size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-6 w-6" />
                <span className="text-xl font-bold">AI Solutions</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Especialistas em automação de vendas com agentes de IA para WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Agentes SDR</li>
                <li>Integração CRM</li>
                <li>Dashboards</li>
                <li>Automação WhatsApp</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-sm text-muted-foreground">
                Entre em contato para discutir sua proposta comercial personalizada.
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AI Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;