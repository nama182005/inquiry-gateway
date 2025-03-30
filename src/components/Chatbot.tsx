
import React, { useState, useRef, useEffect } from "react";
import { 
  MessageCircle, X, Send, ChevronDown, 
  CornerDownLeft, Search, User, HelpCircle 
} from "lucide-react";
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Message interface
interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// Course suggestion interface
interface Course {
  id: string;
  title: string;
  provider: string;
  category: string;
  rating: number;
  description: string;
}

// Sample course data
const courseSuggestions: Course[] = [
  {
    id: "1",
    title: "Advanced Web Development",
    provider: "Tech University",
    category: "Programming",
    rating: 4.8,
    description: "Master modern web development techniques with React, Node.js, and more."
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    provider: "Data Academy",
    category: "Data Science",
    rating: 4.7,
    description: "Learn statistical analysis, Python, and machine learning basics."
  },
  {
    id: "3",
    title: "UX/UI Design Principles",
    provider: "Design School",
    category: "Design",
    rating: 4.9,
    description: "Understand user experience design and create intuitive interfaces."
  },
  {
    id: "4",
    title: "Cloud Computing Certification",
    provider: "Cloud Tech",
    category: "Cloud",
    rating: 4.6,
    description: "Prepare for cloud certifications with hands-on projects."
  },
  {
    id: "5",
    title: "Cybersecurity Essentials",
    provider: "Security Institute",
    category: "Security",
    rating: 4.8,
    description: "Learn to protect systems and data from cyber threats."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! I'm Aarush Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [suggestedCourses, setSuggestedCourses] = useState<Course[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Process the message and generate a response
    setTimeout(() => {
      processMessage(input);
      setIsTyping(false);
    }, 1000);
  };

  const processMessage = (message: string) => {
    const lowerMessage = message.toLowerCase();
    let botResponse = "";
    
    // Course-related queries
    if (lowerMessage.includes("course") || lowerMessage.includes("learn") || lowerMessage.includes("study")) {
      botResponse = "I can help you find courses! Here are some recommendations based on your interest:";
      
      // Filter courses based on keywords in the message
      const filteredCourses = courseSuggestions.filter(course => {
        const keywords = [course.title, course.category, course.provider, course.description].join(" ").toLowerCase();
        return lowerMessage.split(" ").some(word => word.length > 3 && keywords.includes(word));
      });
      
      setSuggestedCourses(filteredCourses.length > 0 ? filteredCourses : courseSuggestions);
    } 
    // Profile-related queries
    else if (lowerMessage.includes("profile") || lowerMessage.includes("account") || lowerMessage.includes("settings")) {
      botResponse = "For profile-related questions: You can manage your profile by going to the Profile page. There you can update your information, add skills, and manage your certifications.";
    } 
    // Login issues
    else if (lowerMessage.includes("login") || lowerMessage.includes("sign in") || lowerMessage.includes("password")) {
      botResponse = "If you're having trouble logging in:\n1. Make sure your email and password are correct\n2. Try the 'Forgot Password' option\n3. Clear your browser cookies\n4. If issues persist, contact support@aarush.com";
    } 
    // General help
    else if (lowerMessage.includes("help") || lowerMessage.includes("support") || lowerMessage.includes("assistance")) {
      botResponse = "I'm here to help! You can ask me about:\n• Finding courses\n• Profile management\n• Login issues\n• Skills tracking\n• Certification questions\n\nWhat specific assistance do you need?";
    }
    // Default response
    else {
      botResponse = "I'm not sure I understand. Could you try rephrasing or ask me about courses, profile management, or using the platform?";
    }
    
    // Add bot response
    const botMessage: Message = {
      id: Date.now().toString(),
      content: botResponse,
      sender: "bot",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    "Help me find programming courses",
    "How do I update my profile?",
    "I forgot my password",
    "How to add certifications?"
  ];

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-aarush-primary hover:bg-aarush-primary/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Chat drawer */}
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="h-[85vh] max-h-[85vh] rounded-t-xl">
          <DrawerHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 bg-aarush-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-aarush-primary" />
                </div>
                <div>
                  <DrawerTitle>Aarush Assistant</DrawerTitle>
                  <DrawerDescription>Ask me about courses or get help</DrawerDescription>
                </div>
              </div>
              <DrawerClose>
                <Button variant="ghost" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </DrawerClose>
            </div>
          </DrawerHeader>

          <Tabs defaultValue="chat" className="flex flex-col h-full">
            <TabsList className="grid grid-cols-2 w-full rounded-none border-b">
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span>Course Finder</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col overflow-hidden p-0 m-0">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-aarush-primary text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {suggestedCourses.length > 0 && (
                <div className="px-4 py-2 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium">Course Suggestions</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSuggestedCourses([])}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="flex overflow-x-auto gap-2 pb-2">
                    {suggestedCourses.map(course => (
                      <div key={course.id} className="min-w-[200px] border rounded-lg p-2 text-xs">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium">{course.title}</h4>
                          <Badge variant="outline" className="text-[10px]">{course.category}</Badge>
                        </div>
                        <p className="text-gray-500 text-[10px] mt-1">{course.provider}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-[10px] ml-1">{course.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested questions */}
              {messages.length < 3 && (
                <div className="px-4 py-3 border-t">
                  <h3 className="text-sm font-medium mb-2">Suggested questions</h3>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-gray-100 transition-colors py-1.5"
                        onClick={() => {
                          setInput(question);
                          inputRef.current?.focus();
                        }}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Textarea
                    ref={inputRef}
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="resize-none min-h-[60px]"
                    rows={1}
                  />
                  <Button onClick={handleSend} disabled={!input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    Press Enter to send, Shift+Enter for new line
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="flex-1 flex flex-col overflow-hidden p-0 m-0">
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Course Finder</h3>
                  <p className="text-gray-600 text-sm">
                    Discover courses based on your interests and career goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {courseSuggestions.map(course => (
                    <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-aarush-charcoal">{course.title}</h4>
                        <Badge>{course.category}</Badge>
                      </div>
                      <p className="text-aarush-gray text-sm mt-1">{course.provider}</p>
                      <div className="flex items-center mt-2">
                        <div className="text-yellow-500 flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>{i < Math.floor(course.rating) ? "★" : "☆"}</span>
                          ))}
                        </div>
                        <span className="text-sm ml-2">{course.rating}</span>
                      </div>
                      <p className="text-sm mt-2 text-gray-600">{course.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => {
                          toast.success(`Course "${course.title}" details opened`);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Chatbot;
