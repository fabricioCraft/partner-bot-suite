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
              <Bot className="h-8 w-8 text-business-blue" />
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
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4" />
              <span>Setup em 15 dias</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4" />
              <span>Integração CRM</span>
            </div>
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
              { icon: Shield, title: "Mensalidade", desc: "Suporte contínuo e melhorias" },
              { icon: Users, title: "Margem Parceiro", desc: "15% setup + 10% recorrente" },
              { icon: MessageSquare, title: "Valor Justificado", desc: "ROI comprovado para o cliente" }
            ].map((item, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-premium transition-all duration-300">
                <CardContent className="pt-6">
                  <item.icon className="h-12 w-12 text-business-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-business-gray">{item.desc}</p>
                </CardContent>
              </Card>
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
                  <Badge className="bg-business-green text-white px-3 py-1">CONTRATADO</Badge>
                </div>
                <p className="text-business-gray text-lg">Agente de Qualificação SDR</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bot className="h-5 w-5 text-business-blue" />
                    <span>Escopo Detalhado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Implantação e treinamento do agente SDR no WhatsApp",
                      "Integração multicanal: site, ads, redes sociais",
                      "Integração com RD CRM via API",
                      "Dashboard exclusivo com métricas completas",
                      "Documentação detalhada e treinamento da equipe"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-business-blue">
                      ⏱️ Prazo: Implantação em até 15 dias úteis após kickoff
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
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

                <Card className="shadow-card bg-gradient-success text-white">
                  <CardHeader>
                    <CardTitle className="text-center">Ganho do Parceiro</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Setup (15%)</span>
                      <span className="font-bold">R$ 1.470</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mensalidade (10%)</span>
                      <span className="font-bold">R$ 195/mês</span>
                    </div>
                    <div className="pt-2 border-t border-green-300">
                      <p className="text-center text-sm text-green-100">
                        Por 12 meses consecutivos
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="mt-8 shadow-card">
              <CardHeader>
                <CardTitle className="text-business-blue">Justificativa de Valor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-destructive">Custo Tradicional</h4>
                    <ul className="space-y-1 text-sm text-business-gray">
                      <li>• SDR CLT + encargos: R$ 4.000+/mês</li>
                      <li>• Risco de turnover constante</li>
                      <li>• Horário comercial limitado</li>
                      <li>• Perda de leads fora do expediente</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-business-green">Nossa Solução</h4>
                    <ul className="space-y-1 text-sm text-business-gray">
                      <li>• Atendimento 24/7 automatizado</li>
                      <li>• Zero risco de turnover</li>
                      <li>• Integração total com CRM</li>
                      <li>• ROI 4x-5x do investimento mensal</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <p className="text-business-gray text-lg">Combo: SDR + Simulação Financeira + Porto Seguro</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Agente 1: SDR", desc: "Qualificação personalizada", price: "R$ 7.900" },
                { title: "Agente 2: Simulação", desc: "API financiamento bancário", price: "R$ 6.800" },
                { title: "Agente 3: Porto Seguro", desc: "Integração direta API", price: "R$ 6.200" }
              ].map((agent, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{agent.title}</CardTitle>
                    <p className="text-sm text-business-gray">{agent.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-business-blue">{agent.price}</p>
                  </CardContent>
                </Card>
              ))}
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
                      <span>Desconto disponível (10%)</span>
                      <span>-R$ 2.340</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Setup</span>
                        <span>R$ 21.060</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-blue-100 text-sm">Mensalidade</p>
                    <p className="text-2xl font-bold">R$ 3.900<span className="text-lg">/mês</span></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-success text-white">
                <CardHeader>
                  <CardTitle className="text-center">Ganho do Parceiro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Setup (15%)</span>
                      <span className="font-bold">R$ 3.510</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mensalidade (10%)</span>
                      <span className="font-bold">R$ 390/mês</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-green-300 text-center">
                    <p className="text-lg font-bold">Total Ano 1</p>
                    <p className="text-2xl font-bold">R$ 8.190</p>
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
                <p className="text-business-gray text-lg">Combo: SDR + Follow-up + Nutrição de Conteúdo</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Agente 1: SDR", desc: "CRM CV + sistema Blip", price: "R$ 8.400" },
                { title: "Agente 2: Follow-up", desc: "Automação de recall", price: "R$ 5.000" },
                { title: "Agente 3: Nutrição", desc: "Conteúdo automatizado", price: "R$ 5.500" }
              ].map((agent, index) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{agent.title}</CardTitle>
                    <p className="text-sm text-business-gray">{agent.desc}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-business-blue">{agent.price}</p>
                  </CardContent>
                </Card>
              ))}
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
                      <span>R$ 21.400</span>
                    </div>
                    <div className="flex justify-between text-blue-200 text-sm">
                      <span>Desconto disponível (10%)</span>
                      <span>-R$ 2.140</span>
                    </div>
                    <div className="border-t border-blue-300 pt-2">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Setup</span>
                        <span>R$ 19.260</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-blue-100 text-sm">Mensalidade</p>
                    <p className="text-2xl font-bold">R$ 3.500<span className="text-lg">/mês</span></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-success text-white">
                <CardHeader>
                  <CardTitle className="text-center">Ganho do Parceiro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Setup (15%)</span>
                      <span className="font-bold">R$ 3.210</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mensalidade (10%)</span>
                      <span className="font-bold">R$ 350/mês</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-green-300 text-center">
                    <p className="text-lg font-bold">Total Ano 1</p>
                    <p className="text-2xl font-bold">R$ 7.410</p>
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
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-business-blue" />
                    <span>Dashboard Padrão</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Setup do Dashboard</span>
                    <span className="font-bold">R$ 2.500</span>
                  </div>
                  <div className="text-sm text-business-gray">
                    <p>• Métricas em tempo real</p>
                    <p>• Relatórios automatizados</p>
                    <p>• Integração com todos os agentes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-business-green" />
                    <span>Dashboard Avançado</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>+ R$ 500/mês por dashboard</span>
                    <span className="font-bold text-business-green">Premium</span>
                  </div>
                  <div className="text-sm text-business-gray">
                    <p>• Monitoramento proativo</p>
                    <p>• Alertas automáticos</p>
                    <p>• Analytics avançados</p>
                  </div>
                </CardContent>
              </Card>
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
            <Button size="lg" variant="outline" className="bg-white text-business-blue border-white hover:bg-blue-50">
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