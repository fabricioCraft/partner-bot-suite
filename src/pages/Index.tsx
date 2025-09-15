import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Bot,
  TrendingUp,
  Users,
  BarChart3,
  MessageSquare,
  Zap,
  Shield,
} from "lucide-react";
import { RejectionPopup, ReasonPopup } from "@/components/ui/rejection-popup";
import { useState, useEffect } from "react";

const Index = () => {
  const [rejectionPopup, setRejectionPopup] = useState({
    isOpen: false,
    proposalData: null,
  });
  const [reasonPopup, setReasonPopup] = useState(false);
  const [currentProposalData, setCurrentProposalData] = useState(null);
  const [acceptedProposals, setAcceptedProposals] = useState({
    "Cliente 1": false,
    "Cliente 2": false,
    "Cliente 3": false,
  });
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  // Controlar scroll e overlay quando popups estão ativos
  const isAnyPopupOpen = rejectionPopup.isOpen || reasonPopup;

  useEffect(() => {
    const isInsidePopup = (element: Element | null): boolean => {
      if (!element || !(element instanceof Element)) return false;

      // Verificar se o elemento está dentro de um popup
      const popupSelectors = [
        '[role="dialog"]',
        "[data-radix-dialog-content]",
        ".AlertDialogContent",
        '[data-state="open"]',
      ];

      for (const selector of popupSelectors) {
        if (element.closest(selector)) {
          return true;
        }
      }

      return false;
    };

    const preventScroll = (e: Event) => {
      const target = e.target as Element;
      if (!isInsidePopup(target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventWheel = (e: WheelEvent) => {
      const target = e.target as Element;
      if (!isInsidePopup(target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventTouchMove = (e: TouchEvent) => {
      const target = e.target as Element;
      if (!isInsidePopup(target)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      const target = e.target as Element;
      
      // Permitir digitação normal em campos de input e textarea
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return true;
      }
      
      const scrollKeys = [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ];
      if (scrollKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    if (isAnyPopupOpen) {
      // Salvar posição atual do scroll apenas se ainda não foi salva
      if (savedScrollPosition === 0) {
        setSavedScrollPosition(window.scrollY);
      }

      // Bloquear scroll do body e html
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${savedScrollPosition || window.scrollY}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";

      // Adicionar event listeners para bloquear todos os tipos de scroll
      document.addEventListener("scroll", preventScroll, { passive: false });
      document.addEventListener("wheel", preventWheel, { passive: false });
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
      document.addEventListener("keydown", preventKeyScroll, {
        passive: false,
      });
      window.addEventListener("scroll", preventScroll, { passive: false });

      // Bloquear scroll em elementos específicos
      document.body.addEventListener("scroll", preventScroll, {
        passive: false,
      });
      document.documentElement.addEventListener("scroll", preventScroll, {
        passive: false,
      });
    } else {
      // Restaurar scroll do body e html
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";

      // Restaurar posição do scroll usando a posição salva
      if (savedScrollPosition > 0) {
        window.scrollTo(0, savedScrollPosition);
        setSavedScrollPosition(0); // Reset da posição salva
      }

      // Remover event listeners
      document.removeEventListener("scroll", preventScroll);
      document.removeEventListener("wheel", preventWheel);
      document.removeEventListener("touchmove", preventTouchMove);
      document.removeEventListener("keydown", preventKeyScroll);
      window.removeEventListener("scroll", preventScroll);
      document.body.removeEventListener("scroll", preventScroll);
      document.documentElement.removeEventListener("scroll", preventScroll);
    }

    // Cleanup: restaurar scroll quando componente for desmontado
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";

      document.removeEventListener("scroll", preventScroll);
      document.removeEventListener("wheel", preventWheel);
      document.removeEventListener("touchmove", preventTouchMove);
      document.removeEventListener("keydown", preventKeyScroll);
      window.removeEventListener("scroll", preventScroll);
      document.body.removeEventListener("scroll", preventScroll);
      document.documentElement.removeEventListener("scroll", preventScroll);
    };
  }, [isAnyPopupOpen]);

  const handleRejectClick = (proposalData: any) => {
    setCurrentProposalData(proposalData);
    setRejectionPopup({ isOpen: true, proposalData });
  };

  const handleConfirmRejection = () => {
    setRejectionPopup({ isOpen: false, proposalData: null });
    setReasonPopup(true);
  };

  const handleCloseRejection = () => {
    setRejectionPopup({ isOpen: false, proposalData: null });
  };

  const handleSubmitReason = (reason: string) => {
    console.log("Motivo da recusa:", reason);
    setReasonPopup(false);
    // Aqui você pode implementar o envio do feedback para um serviço
  };

  const handleCloseReason = () => {
    setReasonPopup(false);
  };

  const handleAcceptProposal = async (
    proposalData: any,
    clientName: string = "Cliente 1"
  ) => {
    try {
      // Extrair valor numérico do preço
      const extractNumericValue = (priceString: string) => {
        const matches = priceString.match(/R\$\s*([\d.,]+)/g);
        if (matches && matches.length > 0) {
          const numericString = matches[0]
            .replace(/R\$\s*/, "")
            .replace(/\./g, "")
            .replace(",", ".");
          return parseFloat(numericString) || 0;
        }
        return 0;
      };

      // Formatar escopo detalhado
      const formatScope = () => {
        const title = proposalData?.title || "Proposta Comercial - Cliente 1";
        const benefits = proposalData?.benefits || [
          "Acelera o processo de qualificação em múltiplos canais",
          "Aumento de conversão: taxas até 30% mais altas",
          "Centralização e controle: CRM sempre atualizado",
          "Economia direta com mão de obra",
        ];
        return `${title}\n\nBenefícios inclusos:\n${benefits
          .map((benefit, index) => `${index + 1}. ${benefit}`)
          .join("\n")}`;
      };

      // Converter clientName para o formato correto
      const formattedClientName =
        clientName === "Cliente 1"
          ? "cliente 1"
          : clientName === "Cliente 2"
          ? "cliente 2"
          : clientName === "Cliente 3"
          ? "cliente 3"
          : "cliente 1";

      const payload = {
        precoPropostaNumerica: extractNumericValue(
          proposalData?.price || "R$ 1.950"
        ),
        escopoDetalhado: formatScope(),
        informacoesCliente: {
          nome: formattedClientName,
          email: "cliente@exemplo.com",
          telefone: "+5521999999999",
        },
        timestamp: new Date().toISOString(),
        origem: "partner-bot-suite",
        precoOriginal: proposalData?.price || "R$ 1.950/mês",
      };

      console.log("Enviando payload para webhook n8n:", payload);

      const response = await fetch(
        "https://webhooks.evolutta.com.br/webhook/api/v1/aceitar-proposta",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      console.log("Status da resposta:", response.status);

      if (response.ok) {
        const responseData = await response.text();
        console.log("✅ Proposta aceita enviada com sucesso para o n8n");
        console.log("Resposta do webhook:", responseData);

        // Atualizar o estado para mostrar que a proposta foi aceita
        setAcceptedProposals((prev) => ({
          ...prev,
          [clientName]: true,
        }));

        alert("Proposta aceita com sucesso! Entraremos em contato em breve.");
      } else {
        const errorText = await response.text();
        console.error("❌ Erro ao enviar proposta aceita:", {
          status: response.status,
          statusText: response.statusText,
          errorBody: errorText,
        });
        alert("Erro ao processar aceitação da proposta. Tente novamente.");
      }
    } catch (error) {
      console.error("❌ Erro na requisição para o webhook:", error);
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="/evolutta-logo.svg"
                alt="Evolutta IA"
                className="h-12"
              />
            </div>
            <Button
              variant="default"
              className="bg-gradient-primary shadow-premium"
              onClick={() =>
                window.open(
                  "https://wa.me/5521992271056?text=Ol%C3%A1,%20gostaria%20de%20conversar%20mais%20sobre%20a%20proposta",
                  "_blank"
                )
              }
            >
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
            Soluções completas de automação com agentes SDR, integrações CRM e
            dashboards exclusivos. Propostas comerciais premium para empresas
            estratégicas.
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
                  <h4 className="font-semibold text-sm text-business-purple">
                    Visualização Completa
                  </h4>
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

                  <h4 className="font-semibold text-sm text-business-purple mt-4">
                    Relatórios Avançados
                  </h4>
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
                  <h4 className="font-semibold text-sm text-business-purple">
                    Treinamento Multiprofissional
                  </h4>
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

                  <h4 className="font-semibold text-sm text-business-purple mt-4">
                    Documentação & Suporte
                  </h4>
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
            <h2 className="text-3xl font-bold mb-4">Estrutura Premium</h2>
            <p className="text-business-gray max-w-2xl mx-auto">
              Nossa metodologia comprovada garante valor excepcional para
              clientes
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 min-h-[50vh]">
            {[
              {
                icon: BarChart3,
                title: "Diagnóstico & Escopo",
                desc: "Análise detalhada das necessidades",
              },
              {
                icon: Zap,
                title: "Setup + Integrações",
                desc: "Implementação completa em 15 dias",
              },
              {
                icon: TrendingUp,
                title: "Dashboard Incluso",
                desc: "Métricas e KPIs em tempo real",
              },
              {
                icon: Shield,
                title: "Gestão de Projeto",
                desc: "Suporte contínuo e melhorias",
              },
              {
                icon: MessageSquare,
                title: "Valor Justificado",
                desc: "ROI comprovado para o cliente",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center shadow-card hover:shadow-premium transition-all duration-300 rounded-lg border bg-card text-card-foreground shadow-sm p-6 pt-6 w-full sm:w-64 md:w-72 lg:w-80 min-h-[200px] flex flex-col justify-between"
              >
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
                  <Badge className="bg-business-accent text-white px-3 py-1">
                    CONTRATADO
                  </Badge>
                </div>
                <p className="text-business-gray text-lg">
                  Agente SDR de Qualificação Multicanal
                </p>
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
                    <h4 className="font-semibold text-business-purple">
                      Implantação de Agente SDR de Qualificação Multicanal
                    </h4>
                    {[
                      "Toda lead recebida via site, campanhas pagas (Google, Facebook/Instagram Ads) ou directs (Instagram, LinkedIn, Facebook) é enviada automaticamente para o WhatsApp",
                      "O agente IA inicia conversa automatizada, faz as perguntas de qualificação (perfil, interesse, urgência, potencial de venda)",
                      "Transfere leads qualificados para o estágio correto do Funil 'Captação Online' criado no RD CRM, via integração API",
                      "O agente registra no CRM (RD Station): nome, telefone, e-mail, respostas e o resumo da interação",
                      "Fluxo 100% documentado (arquitetura N8N, mapas, prompts, instruções operacionais para o time)",
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
              <Card className="shadow-card order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="text-business-purple">
                    Justificativa de Valor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-business-purple">
                        Benefícios Diretos
                      </h4>
                      <ul className="space-y-2 text-sm text-business-gray">
                        <li className="flex items-start space-x-2">
                          <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Acelera o processo de qualificação</strong>{" "}
                            em múltiplos canais, sem necessidade de SDR humano
                            inicial: Lead respondido em segundos = menos perdas
                            + redução de "esfriamento" por demora
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Aumento de conversão:</strong> Sem perdas
                            por demora ou falha humana → taxas até 30% mais
                            altas de captação
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Shield className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Centralização e controle:</strong> CRM
                            sempre atualizado e dashboards de gestão para
                            melhorias contínuas no processo
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-business-purple">
                        Economia e Eficiência
                      </h4>
                      <ul className="space-y-2 text-sm text-business-gray">
                        <li className="flex items-start space-x-2">
                          <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Economia direta com mão de obra:</strong> Só
                            o salário de um SDR/plano básico é de R$ 3k/mês. Com
                            esse agente, processo gira 24/7 sem custo extra e
                            sem riscos trabalhistas
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Menos retrabalho para vendedores:</strong>{" "}
                            Só o lead potencial chega para venda! Reduz
                            desgaste, aumenta foco e produtividade
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <MessageSquare className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Time ganha agilidade</strong> e capacidade
                            de atendimento simultâneo que seria impossível
                            manualmente
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-primary text-white order-1 lg:order-2">
                <CardHeader>
                  <CardTitle className="text-center">
                    Proposta Comercial
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="mb-4">
                      <p className="text-blue-100 text-sm">Setup único</p>
                      <p className="text-3xl font-bold">R$ 9.800</p>
                      <p className="text-blue-200 text-xs">Tudo incluso</p>
                    </div>
                    <div className="mb-6">
                      <p className="text-blue-100 text-sm">Gestão</p>
                      <p className="text-2xl font-bold">
                        R$ 1.950<span className="text-lg">/mês</span>
                      </p>
                      <p className="text-blue-200 text-xs">Suporte completo</p>
                    </div>
                    <div className="flex flex-col space-y-3">
                      {acceptedProposals["Cliente 1"] ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                          <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-600" />
                          <p className="font-semibold">Proposta Aceita!</p>
                          <p className="text-sm">
                            Entraremos em contato em breve.
                          </p>
                        </div>
                      ) : (
                        <>
                          <Button
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                            onClick={() =>
                              handleAcceptProposal(
                                {
                                  title: "Proposta Comercial - Cliente 1",
                                  price:
                                    "Setup: R$ 9.800 | Gestão: R$ 1.950/mês",
                                  benefits: [
                                    "Acelera o processo de qualificação em múltiplos canais, sem necessidade de SDR humano inicial",
                                    "Aumento de conversão: taxas até 30% mais altas que métodos tradicionais",
                                    "Centralização e controle: CRM sempre atualizado com leads qualificados",
                                    "Economia direta com mão de obra: redução de custos operacionais",
                                  ],
                                },
                                "Cliente 1"
                              )
                            }
                          >
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Aceitar Agora
                          </Button>
                          <Button
                            variant="outline"
                            className="border-blue-300 text-blue-100 hover:bg-blue-50 hover:text-blue-600 py-2 px-6 rounded-lg"
                            onClick={() =>
                              handleRejectClick({
                                title: "Proposta Comercial - Cliente 1",
                                price: "Setup: R$ 9.800 | Gestão: R$ 1.950/mês",
                                benefits: [
                                  "Acelera o processo de qualificação em múltiplos canais, sem necessidade de SDR humano inicial",
                                  "Aumento de conversão: taxas até 30% mais altas de captação sem perdas por demora",
                                  "Centralização e controle: CRM sempre atualizado e dashboards de gestão",
                                  "Economia direta com mão de obra: substitui salário de SDR (R$ 3k/mês) funcionando 24/7",
                                  "Menos retrabalho para vendedores: só leads potenciais chegam para venda",
                                  "Time ganha agilidade e capacidade de atendimento simultâneo impossível manualmente",
                                ],
                              })
                            }
                          >
                            Recusar
                          </Button>
                        </>
                      )}
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
                  <Badge
                    variant="outline"
                    className="border-amber-500 text-amber-600 px-3 py-1"
                  >
                    EM NEGOCIAÇÃO
                  </Badge>
                </div>
                <p className="text-business-gray text-lg">
                  Sistema Completo: SDR + Simulador Financeiro + Integração
                  Porto Seguro
                </p>
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
                      "Integra 100% com RD CRM (criação de lead, envio de respostas, monitoramento)",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 7.900
                  </p>
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
                      "Convence com argumentos treinados customizáveis",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 6.800
                  </p>
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
                      "Registro completo no CRM",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 6.200
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="text-business-purple">
                    Justificativa de Valor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Complexidade e automação de ponta
                        </p>
                        <p className="text-xs text-business-gray">
                          Processo de simulação que hoje é manual, sujeito a
                          erros, passa a ser INSTANTÂNEO — aumenta credibilidade
                          e velocidade (quem chega antes, geralmente fecha)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Redução do custo operacional
                        </p>
                        <p className="text-xs text-business-gray">
                          Seriam necessários vários SDRs e assistentes, além de
                          analista/consultor de financiamento, para fazer o que
                          os 3 agentes fazem de forma integrada
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Diferencial competitivo TOTAL
                        </p>
                        <p className="text-xs text-business-gray">
                          Nenhum concorrente local vai operar com nível de
                          automação semelhante — é argumento de venda para
                          captar mais leads
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-primary text-white order-1 lg:order-2">
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
                  <div className="text-center pt-4 mb-6">
                    <p className="text-blue-100 text-sm">Gestão</p>
                    <p className="text-2xl font-bold">
                      R$ 3.900<span className="text-lg">/mês</span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {acceptedProposals["Cliente 2"] ? (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                        <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-600" />
                        <p className="font-semibold">Proposta Aceita!</p>
                        <p className="text-sm">
                          Entraremos em contato em breve.
                        </p>
                      </div>
                    ) : (
                      <>
                        <Button
                          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                          onClick={() =>
                            handleAcceptProposal(
                              {
                                title: "Proposta Combo - Cliente 2",
                                price:
                                  "Setup: R$ 18.720 | Gestão: R$ 3.900/mês",
                                benefits: [
                                  "Sistema completo com 3 agentes de IA especializados (SDR 2.0, Simulador Financeiro, Porto Seguro)",
                                  "Processo de simulação instantâneo que aumenta credibilidade e velocidade de fechamento",
                                  "Integração com APIs do Banco Central/fintechs para taxas em tempo real",
                                  "Push automático para API da Porto Seguro com processo de emissão automática",
                                  "Redução do custo operacional: substitui vários SDRs, assistentes e analistas de financiamento",
                                  "Diferencial competitivo total: nível de automação que nenhum concorrente local possui",
                                ],
                              },
                              "Cliente 2"
                            )
                          }
                        >
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Aceitar Agora
                        </Button>
                        <Button
                          variant="outline"
                          className="border-blue-300 text-blue-100 hover:bg-blue-50 hover:text-blue-600 py-2 px-6 rounded-lg"
                          onClick={() =>
                            handleRejectClick({
                              title: "Proposta Combo - Cliente 2",
                              price: "Setup: R$ 18.720 | Gestão: R$ 3.900/mês",
                              benefits: [
                                "Sistema completo com 3 agentes de IA especializados (SDR 2.0, Simulador Financeiro, Porto Seguro)",
                                "Processo de simulação instantâneo que aumenta credibilidade e velocidade de fechamento",
                                "Integração com APIs do Banco Central/fintechs para taxas em tempo real",
                                "Push automático para API da Porto Seguro com processo de emissão automática",
                                "Redução do custo operacional: substitui vários SDRs, assistentes e analistas de financiamento",
                                "Diferencial competitivo total: nível de automação que nenhum concorrente local possui",
                              ],
                            })
                          }
                        >
                          Recusar
                        </Button>
                      </>
                    )}
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
                  <Badge
                    variant="outline"
                    className="border-amber-500 text-amber-600 px-3 py-1"
                  >
                    EM NEGOCIAÇÃO
                  </Badge>
                </div>
                <p className="text-business-gray text-lg">
                  Sistema Avançado: SDR + Follow-up Automático
                </p>
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
                      "Documentação e padrão operacional prontinho para escala",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 8.400
                  </p>
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
                      "Envia alertas ao time para leads que demonstram interesse ou voltam a responder",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 5.000
                  </p>
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
                      "Histórico de disparos disponível para acompanhamento do time",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-business-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-business-purple">
                    R$ 4.200
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-card order-2 lg:order-1">
                <CardHeader>
                  <CardTitle className="text-business-purple">
                    Justificativa de Valor
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Processo de vendas full digital e escalável
                        </p>
                        <p className="text-xs text-business-gray">
                          Agentes eliminam a dependência de SDRs em tarefas
                          repetitivas. Processos executados simultaneamente,
                          24/7, multiplicando a capacidade do funil sem aumentar
                          time
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Menos perdas, mais conversão
                        </p>
                        <p className="text-xs text-business-gray">
                          Ninguém esquece um follow-up, não se perde lead frio e
                          não deixa cliente maturando sem acompanhamento
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <TrendingUp className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Nutrição = vendas de ciclo longo
                        </p>
                        <p className="text-xs text-business-gray">
                          Educação automatizada aumenta assertividade, reduz
                          objeção e melhora conversão de leads de consideração
                          demorada (clássico em B2B, serviços educacionais e
                          consultorias)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <BarChart3 className="h-4 w-4 text-business-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">
                          Gestão centralizada, melhoria contínua
                        </p>
                        <p className="text-xs text-business-gray">
                          Dashboard mostra tudo: gargalos, ganhos, campanhas
                          assertivas — facilita correção de rota, tomada de
                          decisão, priorização de actions pelo time
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-primary text-white order-1 lg:order-2">
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
                  <div className="text-center pt-4 mb-6">
                    <p className="text-blue-100 text-sm">Gestão</p>
                    <p className="text-2xl font-bold">
                      R$ 3.200<span className="text-lg">/mês</span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    {acceptedProposals["Cliente 3"] ? (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                        <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-600" />
                        <p className="font-semibold">Proposta Aceita!</p>
                        <p className="text-sm">
                          Entraremos em contato em breve.
                        </p>
                      </div>
                    ) : (
                      <>
                        <Button
                          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                          onClick={() =>
                            handleAcceptProposal(
                              {
                                title: "Proposta Combo - Cliente 3",
                                price:
                                  "Setup: R$ 17.085 | Gestão: R$ 3.200/mês",
                                benefits: [
                                  "Sistema avançado com SDR + Follow-up automático + Nutrição de conteúdo",
                                  "Integração dupla: CRM CV + Blip para fluxo multicanal completo",
                                  "Agente de follow-up que reativa leads frios sem ação manual",
                                  "Nutrição automatizada que educa leads até a hora da venda",
                                  "Processo de vendas full digital e escalável funcionando 24/7",
                                  "Gestão centralizada com dashboard para melhoria contínua do processo",
                                ],
                              },
                              "Cliente 3"
                            )
                          }
                        >
                          <CheckCircle className="h-5 w-5 mr-2" />
                          Aceitar Agora
                        </Button>
                        <Button
                          variant="outline"
                          className="border-blue-300 text-blue-100 hover:bg-blue-50 hover:text-blue-600 py-2 px-6 rounded-lg"
                          onClick={() =>
                            handleRejectClick({
                              title: "Proposta Combo - Cliente 3",
                              price: "Setup: R$ 17.085 | Gestão: R$ 3.200/mês",
                              benefits: [
                                "Sistema avançado com SDR + Follow-up automático + Nutrição de conteúdo",
                                "Integração dupla: CRM CV + Blip para fluxo multicanal completo",
                                "Agente de follow-up que reativa leads frios sem ação manual",
                                "Nutrição automatizada que educa leads até a hora da venda",
                                "Processo de vendas full digital e escalável funcionando 24/7",
                                "Gestão centralizada com dashboard para melhoria contínua do processo",
                              ],
                            })
                          }
                        >
                          Recusar
                        </Button>
                      </>
                    )}
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
            <h2 className="text-3xl font-bold mb-6">
              Dashboards Personalizados
            </h2>
            <p className="text-business-gray text-lg mb-8">
              Cada projeto inclui dashboard exclusivo com métricas específicas
              do negócio
            </p>

            <div className="grid md:grid-cols-2 gap-8"></div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Revolucionar Suas Vendas?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Descubra soluções de IA que realmente transformam negócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              onClick={() =>
                window.open(
                  "https://wa.me/5521992271056?text=Ol%C3%A1,%20gostaria%20de%20conversar%20mais%20sobre%20a%20proposta",
                  "_blank"
                )
              }
            >
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
                <img
                  src="/evolutta-logo.svg"
                  alt="Evolutta IA"
                  className="h-8"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Especialistas em automação de vendas com agentes de IA para
                WhatsApp.
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
              <p className="text-sm text-muted-foreground mb-4">
                Entre em contato para discutir sua proposta comercial
                personalizada.
              </p>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  window.open(
                    "https://wa.me/5521992271056?text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20uma%20proposta%20personalizada",
                    "_blank"
                  )
                }
              >
                💬 Falar no WhatsApp
              </Button>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Evolutta IA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Overlay escuro quando popup está ativo */}
      {isAnyPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          style={{ backdropFilter: "blur(2px)" }}
        />
      )}

      {/* Popups de Recusa */}
      {rejectionPopup.proposalData && (
        <RejectionPopup
          isOpen={rejectionPopup.isOpen}
          onClose={handleCloseRejection}
          onConfirmRejection={handleConfirmRejection}
          proposalTitle={rejectionPopup.proposalData.title}
          proposalPrice={rejectionPopup.proposalData.price}
          proposalBenefits={rejectionPopup.proposalData.benefits}
        />
      )}

      <ReasonPopup
        isOpen={reasonPopup}
        onClose={handleCloseReason}
        onSubmitReason={handleSubmitReason}
        onAcceptProposal={(clientName) => {
          setAcceptedProposals((prev) => ({
            ...prev,
            [clientName]: true,
          }));
        }}
        proposalData={currentProposalData}
        clientData={{
          name: "Cliente Potencial",
          email: "cliente@exemplo.com",
          phone: "+5521999999999",
        }}
      />
    </div>
  );
};

export default Index;
