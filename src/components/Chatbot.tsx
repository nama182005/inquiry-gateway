
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Mock course data for recommendations
const coursesData = [
  { id: 1, name: "Web Development Fundamentals", provider: "Coursera", rating: 4.7 },
  { id: 2, name: "Advanced JavaScript", provider: "Udemy", rating: 4.8 },
  { id: 3, name: "React Masterclass", provider: "edX", rating: 4.6 },
  { id: 4, name: "Data Science Specialization", provider: "Coursera", rating: 4.9 },
  { id: 5, name: "UI/UX Design Foundations", provider: "Udemy", rating: 4.5 },
];

// Common user questions and prepared responses
const commonResponses: Record<string, string> = {
  "help": "I can help you with: \n• Finding new courses \n• Profile setup issues \n• Certificate management \n• Resume generation \n• Skills tracking",
  "profile": "To edit your profile, go to the Profile page and click on 'Edit Profile'. You can update your personal information, education details, and contact information.",
  "certificates": "To add a new certification, navigate to your Profile page and click on 'Add Certification'. You'll need to provide details like the name, issuer, date, and credential ID.",
  "resume": "You can download your resume from your Profile page. The system generates it automatically based on your skills and certifications.",
  "skills": "To add or update skills, go to your Profile page and select 'Skills'. You can add new skills, rate your proficiency, and link relevant courses."
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hi there! I'm the Aarush assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate processing time
    setTimeout(() => processUserMessage(message), 500);
  };

  const processUserMessage = (userText: string) => {
    const lowerCaseText = userText.toLowerCase();
    let botResponse = '';
    
    // Check for course recommendations
    if (lowerCaseText.includes('course') || lowerCaseText.includes('learn') || lowerCaseText.includes('study')) {
      const courseRecommendations = getRelevantCourses(lowerCaseText);
      botResponse = `Here are some recommended courses for you:\n\n${courseRecommendations}\n\nWould you like more specific recommendations?`;
    } 
    // Check for common questions
    else if (commonResponses[lowerCaseText]) {
      botResponse = commonResponses[lowerCaseText];
    }
    // Check for profile help
    else if (lowerCaseText.includes('profile') || lowerCaseText.includes('account')) {
      botResponse = "You can edit your profile by clicking on the 'Edit Profile' button on your profile page. Need help with something specific about your profile?";
    }
    // Check for certificate help
    else if (lowerCaseText.includes('certificate') || lowerCaseText.includes('certification')) {
      botResponse = "I can help you manage your certifications! You can add a new certification from your profile page. Would you like to know how to verify a certification?";
    }
    // Check for resume help
    else if (lowerCaseText.includes('resume') || lowerCaseText.includes('cv')) {
      botResponse = "Your resume can be downloaded from your profile page. It's automatically generated based on your skills and certifications. Would you like tips on improving your resume?";
    }
    // Fallback response
    else {
      botResponse = "I understand you're asking about \"" + userText + "\". Could you provide more details so I can assist you better? Type 'help' to see what I can help with.";
    }
    
    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  const getRelevantCourses = (text: string) => {
    // Simple keyword matching - in a real app, this would be more sophisticated
    let relevantCourses = [...coursesData];
    
    if (text.includes('web') || text.includes('development')) {
      relevantCourses = coursesData.filter(c => 
        c.name.toLowerCase().includes('web') || c.name.toLowerCase().includes('development')
      );
    } else if (text.includes('data') || text.includes('science')) {
      relevantCourses = coursesData.filter(c => 
        c.name.toLowerCase().includes('data') || c.name.toLowerCase().includes('science')
      );
    } else if (text.includes('design') || text.includes('ui') || text.includes('ux')) {
      relevantCourses = coursesData.filter(c => 
        c.name.toLowerCase().includes('design') || c.name.toLowerCase().includes('ui')
      );
    }
    
    if (relevantCourses.length === 0) relevantCourses = coursesData.slice(0, 3);
    
    return relevantCourses
      .map(course => `• ${course.name} (${course.provider}) - ⭐ ${course.rating}`)
      .join('\n');
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-preskilet-turquoise text-white shadow-lg hover:bg-opacity-90 transition-all z-40"
        aria-label="Chat with assistant"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 sm:w-96 h-[450px] bg-white rounded-xl shadow-2xl flex flex-col z-40 border border-gray-200">
          <div className="bg-gradient-to-r from-preskilet-turquoise to-preskilet-navy p-3 rounded-t-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-medium">Aarush Assistant</h3>
              <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            <div className="space-y-3">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-preskilet-turquoise text-white' 
                        : 'bg-white text-preskilet-charcoal border border-gray-200'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex items-center gap-2">
              <input 
                ref={inputRef}
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type your message..." 
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-preskilet-turquoise"
              />
              <button 
                type="submit" 
                className="p-2 bg-preskilet-turquoise text-white rounded-lg hover:bg-opacity-90"
                disabled={!message.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
