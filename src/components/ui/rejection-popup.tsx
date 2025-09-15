import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { XCircle, AlertTriangle, Clock, TrendingUp } from "lucide-react";

interface RejectionPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmRejection: () => void;
  proposalTitle: string;
  proposalPrice: string;
  proposalBenefits: string[];
}

export const RejectionPopup: React.FC<RejectionPopupProps> = ({
  isOpen,
  onClose,
  onConfirmRejection,
  proposalTitle,
  proposalPrice,
  proposalBenefits,
}) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-[96vw] sm:max-w-[85vw] md:max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden w-full mx-auto box-border fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center space-x-1 sm:space-x-2 text-sm sm:text-xl md:text-2xl text-red-600 max-w-full">
            <span className="break-words leading-tight">⚠️ Tem certeza que deseja recusar esta proposta?</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4">
            Você está prestes a recusar uma oportunidade única de transformar
            seu negócio.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 sm:space-y-6 py-3 sm:py-4 px-2 sm:px-4 w-full max-w-full overflow-hidden box-border">
          {/* Descrição da Proposta */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 rounded-lg border border-blue-200 max-w-full overflow-hidden">
            <h3 className="text-sm sm:text-xl font-bold text-business-purple mb-2 break-words leading-tight">
              {proposalTitle}
            </h3>
            <div className="flex items-center space-x-1 sm:space-x-2 mb-3 flex-wrap">
              <span className="text-lg sm:text-3xl font-bold text-green-600 leading-tight">
                {proposalPrice}
              </span>
              <div className="flex items-center text-red-500 text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="leading-tight">Oferta por tempo limitado</span>
              </div>
            </div>
          </div>

          {/* Benefícios que serão perdidos */}
          <div className="bg-red-50 p-3 sm:p-6 rounded-lg border border-red-200 max-w-full overflow-hidden">
            <h4 className="text-sm sm:text-lg font-semibold text-red-700 mb-3 sm:mb-4 flex items-center flex-wrap">
              <XCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 flex-shrink-0" />
              <span className="break-words leading-tight">Ao recusar, você perderá TODOS estes benefícios:</span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {proposalBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-1 sm:space-x-2 max-w-full">
                  <XCircle className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-base text-red-700 font-medium leading-tight sm:leading-relaxed break-words flex-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aviso sobre urgência */}
          <div className="bg-yellow-50 p-3 sm:p-6 rounded-lg border border-yellow-200 max-w-full overflow-hidden">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <Clock className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-600 mt-0.5 sm:mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-lg font-semibold text-yellow-800 mb-2 break-words leading-tight">
                  ⏰ Esta oferta é por tempo limitado!
                </h4>
                <p className="text-sm sm:text-base text-yellow-700 leading-relaxed break-words">
                  Nossos especialistas já analisaram seu perfil e criaram esta
                  proposta exclusiva. Se você recusar agora, pode não ter outra
                  oportunidade como esta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <AlertDialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-3 px-2 sm:px-0 max-w-full">
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 w-full sm:w-auto text-xs sm:text-base break-words leading-tight"
          >
            🚀 Voltar para a Proposta (Decisão Inteligente!)
          </Button>
          <Button
            variant="outline"
            onClick={onConfirmRejection}
            className="border-red-300 text-red-600 hover:bg-red-50 py-2 sm:py-3 px-3 sm:px-6 rounded-lg w-full sm:w-auto text-xs sm:text-base break-words leading-tight"
          >
            Confirmar Recusa
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

interface ReasonPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReason: (reason: string) => void;
  onAcceptProposal?: (clientName: string) => void;
  proposalData?: {
    title: string;
    price: string;
    benefits: string[];
  };
  clientData?: {
    name: string;
    email: string;
    phone: string;
  };
}

export const ReasonPopup: React.FC<ReasonPopupProps> = ({
  isOpen,
  onClose,
  onSubmitReason,
  onAcceptProposal,
  proposalData,
  clientData,
}) => {
  const [selectedReason, setSelectedReason] = React.useState("");
  const [customReason, setCustomReason] = React.useState("");

  // Reset states when popup opens to ensure independent interactions
  React.useEffect(() => {
    if (isOpen) {
      setSelectedReason("");
      setCustomReason("");
    }
  }, [isOpen]);

  // Função para enviar dados para o webhook do n8n
  const handleAcceptProposal = async () => {
    try {
      // Extrair valor numérico do preço
      const extractNumericValue = (priceString: string) => {
        const matches = priceString.match(/R\$\s*([\d.,]+)/g);
        if (matches && matches.length > 0) {
          // Pegar o primeiro valor encontrado e converter para número
          const numericString = matches[0].replace(/R\$\s*/, '').replace(/\./g, '').replace(',', '.');
          return parseFloat(numericString) || 0;
        }
        return 0;
      };

      // Formatar escopo detalhado como texto
      const formatScope = () => {
        const title = proposalData?.title || "Proposta não identificada";
        const benefits = proposalData?.benefits || [];
        return `${title}\n\nBenefícios inclusos:\n${benefits.map((benefit, index) => `${index + 1}. ${benefit}`).join('\n')}`;
      };

      // Extrair nome do cliente do título da proposta
      const clientName = proposalData?.title?.includes('Cliente 1') ? 'cliente 1' :
                        proposalData?.title?.includes('Cliente 2') ? 'cliente 2' :
                        proposalData?.title?.includes('Cliente 3') ? 'cliente 3' : 'cliente 1';

      const payload = {
        precoPropostaNumerica: extractNumericValue(proposalData?.price || "0"),
        escopoDetalhado: formatScope(),
        informacoesCliente: {
          nome: clientName,
          email: clientData?.email || "email@nao-informado.com",
          telefone: clientData?.phone || "+5521999999999"
        },
        timestamp: new Date().toISOString(),
        origem: "partner-bot-suite",
        precoOriginal: proposalData?.price || "Valor não informado"
      };

      console.log('Enviando payload para webhook n8n:', payload);

      const response = await fetch('https://webhooks.evolutta.com.br/webhook/api/v1/aceitar-proposta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Status da resposta:', response.status);
      
      if (response.ok) {
        const responseData = await response.text();
        console.log('✅ Proposta aceita enviada com sucesso para o n8n');
        console.log('Resposta do webhook:', responseData);
        
        // Extrair nome do cliente do título da proposta
        const clientName = proposalData?.title?.includes('Cliente 1') ? 'Cliente 1' :
                          proposalData?.title?.includes('Cliente 2') ? 'Cliente 2' :
                          proposalData?.title?.includes('Cliente 3') ? 'Cliente 3' : 'Cliente 1';
        
        // Atualizar estado de proposta aceita
        if (onAcceptProposal) {
          onAcceptProposal(clientName);
        }
        
        // Fechar o popup após envio bem-sucedido
        onClose();
      } else {
        const errorText = await response.text();
        console.error('❌ Erro ao enviar proposta aceita:', {
          status: response.status,
          statusText: response.statusText,
          errorBody: errorText
        });
        alert('Erro ao processar aceitação da proposta. Tente novamente.');
      }
    } catch (error) {
      console.error('❌ Erro na requisição para o webhook:', error);
      alert('Erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  const reasons = [
    "Preço muito alto para o orçamento atual",
    "Preciso de mais tempo para decidir",
    "Não vejo valor suficiente na proposta",
    "Já tenho uma solução similar",
    "Não é prioridade no momento",
    "Outro motivo (especificar)",
  ];

  const handleSubmit = async () => {
    const reason =
      selectedReason === "Outro motivo (especificar)"
        ? customReason
        : selectedReason;
    
    try {
      // Preparar dados para envio ao webhook
      const feedbackData = {
        tipo: "recusa",
        motivo: reason,
        timestamp: new Date().toISOString(),
        proposta: {
          titulo: proposalData?.title || "Proposta não especificada",
          preco: proposalData?.price || "Preço não especificado",
          beneficios: proposalData?.benefits || []
        },
        cliente: {
          nome: proposalData?.title?.includes('Cliente 1') ? 'cliente 1' :
                proposalData?.title?.includes('Cliente 2') ? 'cliente 2' :
                proposalData?.title?.includes('Cliente 3') ? 'cliente 3' : 'cliente 1',
          email: clientData?.email || "",
          telefone: clientData?.phone || ""
        }
      };

      console.log('📤 Enviando feedback para webhook:', feedbackData);

      const response = await fetch('https://webhooks.evolutta.com.br/webhook/api/v1/receber-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData)
      });

      if (response.ok) {
        console.log('✅ Feedback enviado com sucesso!');
        alert('Obrigado pelo seu feedback! Suas informações foram registradas.');
        onSubmitReason(reason);
      } else {
        const errorText = await response.text();
        console.error('❌ Erro ao enviar feedback:', {
          status: response.status,
          statusText: response.statusText,
          errorBody: errorText
        });
        alert('Erro ao enviar feedback. Suas informações foram registradas localmente.');
        onSubmitReason(reason);
      }
    } catch (error) {
      console.error('❌ Erro na requisição para o webhook de feedback:', error);
      alert('Erro de conexão. Suas informações foram registradas localmente.');
      onSubmitReason(reason);
    }
  };

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-[96vw] sm:max-w-[85vw] md:max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden w-full mx-auto box-border fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <AlertDialogHeader className="px-2 sm:px-4 w-full max-w-full overflow-hidden">
          <AlertDialogTitle className="text-sm sm:text-xl md:text-2xl font-bold text-business-purple flex items-center space-x-1 sm:space-x-2 max-w-full break-words">
            <span className="break-words leading-tight">💭 Nos ajude a entender sua decisão</span>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xs sm:text-base md:text-lg text-gray-600 mt-2 leading-tight sm:leading-relaxed break-words max-w-full">
            Sua opinião é valiosa para nós. Qual o principal motivo da recusa?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-4 sm:space-y-6 py-3 sm:py-4 px-2 sm:px-0 max-w-full overflow-hidden">
          <div className="space-y-2 sm:space-y-3">
            {reasons.map((reason, index) => (
              <label
                key={index}
                className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200 w-full max-w-full overflow-hidden box-border"
              >
                <input
                  type="radio"
                  name="reason"
                  value={reason}
                  checked={selectedReason === reason}
                  onChange={(e) => setSelectedReason(e.target.value)}
                  className="mt-0.5 sm:mt-1 h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <span className="text-xs sm:text-base font-medium text-gray-900 leading-tight sm:leading-relaxed break-words">
                    {reason}
                  </span>
                </div>
              </label>
            ))}
          </div>

          {selectedReason === "Outro motivo (especificar)" && (
            <div className="mt-2 sm:mt-4 w-full max-w-full overflow-hidden">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 break-words">
                Por favor, nos conte mais detalhes:
              </label>
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                placeholder="Descreva o motivo da sua recusa..."
                className="w-full max-w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-business-purple focus:border-transparent resize-none text-xs sm:text-base box-border"
                rows={3}
              />
            </div>
          )}

          {/* Mensagem persuasiva final */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 sm:p-6 rounded-lg border border-purple-200 mt-3 sm:mt-6 w-full max-w-full overflow-hidden">
            <div className="flex items-start space-x-2 sm:space-x-3">
              <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-purple-600 mt-0.5 sm:mt-1 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm sm:text-lg font-semibold text-purple-800 mb-1 sm:mb-2 break-words leading-tight">
                  💜 Ainda há tempo para uma decisão melhor!
                </h4>
                <p className="text-xs sm:text-base text-purple-700 leading-tight sm:leading-relaxed break-words">
                  Sabemos que mudanças podem ser assustadoras, mas nossos clientes
                  relatam em média <strong>300% de aumento na eficiência</strong>{" "}
                  após implementar nossos agentes de IA. Que tal darmos uma chance
                  para transformar seu negócio?
                </p>
              </div>
            </div>
          </div>

          {/* Botão Enviar Feedback */}
          <div className="w-full flex justify-center mt-3 sm:mt-6 border-t border-gray-200 pt-3 sm:pt-4">
            <Button
              variant="ghost"
              onClick={handleSubmit}
              disabled={
                !selectedReason ||
                (selectedReason === "Outro motivo (especificar)" &&
                  !customReason.trim())
              }
              className="text-gray-600 hover:text-gray-800 py-1 sm:py-2 px-4 sm:px-6 text-xs sm:text-sm break-words overflow-hidden text-center leading-tight max-w-xs"
            >
              📝 Enviar Feedback
            </Button>
          </div>
        </div>

        <AlertDialogFooter className="flex justify-center items-center pt-3 sm:pt-6 px-2 sm:px-6 w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 w-full max-w-lg">
            <Button
              onClick={handleAcceptProposal}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 px-2 sm:px-5 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 text-[10px] sm:text-sm w-[140px] sm:w-[180px] overflow-hidden text-center leading-tight whitespace-nowrap text-ellipsis"
            >
              🎯 Aceitar Proposta
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5521992271056?text=Ol%C3%A1,%20gostaria%20de%20conversar%20sobre%20uma%20proposta%20personalizada",
                  "_blank"
                )
              }
              variant="outline"
              className="border-2 border-business-purple text-business-purple hover:bg-business-purple hover:text-white font-semibold py-2 sm:py-3 px-2 sm:px-5 rounded-lg transition-all duration-200 text-[10px] sm:text-sm w-[140px] sm:w-[180px] overflow-hidden text-center leading-tight whitespace-nowrap text-ellipsis"
            >
              💬 Proposta Personalizada
            </Button>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
