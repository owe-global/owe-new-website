import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

type ChatStage = 'initial' | 'asking_name' | 'asking_email' | 'asking_phone' | 'completed';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<ChatStage>('initial');
  const [inputValue, setInputValue] = useState('');
  
  // Stored lead data
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: "Hi there! I'm Sarah from Open World Education. How can I help you today?"
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString() + '-bot', sender: 'bot', text }]);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    
    // Add user message to UI
    setMessages(prev => [...prev, { id: Date.now().toString() + '-user', sender: 'user', text: userText }]);
    setInputValue('');

    // State machine logic
    setTimeout(() => {
      switch (stage) {
        case 'initial':
          addBotMessage("I can definitely help with that! To get started, could I please have your name?");
          setStage('asking_name');
          break;
        case 'asking_name':
          setLeadData(prev => ({ ...prev, name: userText }));
          addBotMessage(`Thanks ${userText}! And what is your email address?`);
          setStage('asking_email');
          break;
        case 'asking_email':
          setLeadData(prev => ({ ...prev, email: userText }));
          addBotMessage("Perfect. Finally, what's the best phone number to reach you at?");
          setStage('asking_phone');
          break;
        case 'asking_phone':
          const finalLead = { ...leadData, phone: userText };
          setLeadData(finalLead);
          addBotMessage("Thank you for responding, we will be contacting you soon!");
          setStage('completed');
          
          // Send to Google Sheet
          const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;
          if (scriptURL) {
            const payload = {
              fullName: finalLead.name,
              emailAddress: finalLead.email,
              mobileNumber: finalLead.phone,
              preferredCountry: 'Not Specified (Chatbot)',
              consultationMode: 'Chatbot Lead',
              selectDate: new Date().toISOString().split('T')[0],
              preferredTimeSlot: 'ASAP',
              academicBackground: 'Lead generated via Chatbot'
            };
            
            fetch(scriptURL, {
              method: 'POST',
              mode: 'no-cors',
              body: JSON.stringify(payload),
              headers: {
                'Content-Type': 'text/plain;charset=utf-8', 
              }
            }).catch(err => console.error("Error saving chatbot lead:", err));
          }
          break;
        case 'completed':
          addBotMessage("We have received your details! One of our counselors will be in touch shortly.");
          break;
      }
    }, 800); // Simulate typing delay
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      
      {/* Chat Window */}
      <div 
        className={`bg-white w-[320px] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-0 opacity-0 absolute bottom-0 right-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white px-5 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Sarah - Admissions</h3>
              <p className="text-[10px] text-blue-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-blue-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[350px] bg-slate-50 p-4 overflow-y-auto flex flex-col gap-3">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-bl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={stage === 'completed' ? "Chat finished..." : "Type your message..."}
            disabled={stage === 'completed'}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/50 focus:border-blue-600 transition-all disabled:opacity-50"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || stage === 'completed'}
            className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors shadow-md shrink-0"
          >
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ml-auto ${
          isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

    </div>
  );
}
