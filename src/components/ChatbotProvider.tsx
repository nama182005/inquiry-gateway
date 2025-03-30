
import React from 'react';
import Chatbot from './Chatbot';

interface ChatbotProviderProps {
  children: React.ReactNode;
}

const ChatbotProvider: React.FC<ChatbotProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
};

export default ChatbotProvider;
