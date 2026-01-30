
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Hola! Soy el asistente de Dental MS Lab. ¿En qué puedo ayudarte? Soy especialista en prótesis dentales para odontólogos.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Eres el asistente virtual de Dental MS Lab, un laboratorio dental profesional en San Justo, Buenos Aires. 
          INSTRUCCIONES CLAVE:
          1. Somos PROVEEDORES DE ODONTÓLOGOS. No atendemos pacientes directamente.
          2. Ofrecemos: removibles acrílicos, prótesis flexibles, cromo cobalto, coronas provisorias, placas de bruxismo y tecnología 3D Cromoflex.
          3. Ubicación: San Justo, Buenos Aires.
          4. Contacto: WhatsApp 116572-9989. Instagram: @dentalmslab.
          5. Sé profesional, amable y conciso. Si alguien pregunta por aranceles, decile que nos contacte por WhatsApp para enviarle la lista actualizada.
          6. No des consejos médicos, remite siempre a la consulta profesional.`
        }
      });

      const botText = response.text || 'Lo siento, no pude procesar tu mensaje. Por favor contactanos por WhatsApp al 116572-9989.';
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Hubo un error de conexión. Por favor contactanos por WhatsApp.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 z-50 w-[90vw] sm:w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-6 text-white">
            <h3 className="font-bold text-lg font-outfit">Asistente Dental MS</h3>
            <p className="text-xs opacity-80">En línea ahora</p>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-slate-700 shadow-sm rounded-tl-none border border-slate-100'}`}>
                  <div className="flex items-center space-x-2 mb-1 opacity-60 text-[10px] uppercase font-bold">
                    {m.role === 'user' ? <User size={10} /> : <Bot size={10} />}
                    <span>{m.role === 'user' ? 'Vos' : 'Dental MS'}</span>
                  </div>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
                  <Loader2 className="animate-spin text-blue-500" size={16} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Escribí tu consulta..."
              className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              onClick={handleSend}
              disabled={isTyping}
              className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
