"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Zap, LifeBuoy, ChevronRight, MessageSquareText, Loader2 } from "lucide-react";

interface ChatMessage {
  text: string;
  sender: "user" | "bot";
}

export default function KamtechChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showUnread, setShowUnread] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => "session-" + Math.random().toString(36).substring(7));
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Configuration
  const AUTO_MSG_DELAY = 60000; // 1 minute
  const N8N_WEBHOOK_URL = "https://n8n.kamtech.online/webhook/bf163cda-d1d0-4061-89f8-a046bfe63b5d/chat";

  useEffect(() => {
    audioRef.current = new Audio("/notification.mp3");

    const timer = setTimeout(() => {
      if (!isOpen && chatHistory.length === 0) {
        setIsBouncing(true);
        setShowUnread(true);
        audioRef.current?.play().catch(() => console.log("Audio bloqué par le navigateur"));
      }
    }, AUTO_MSG_DELAY);

    return () => clearTimeout(timer);
  }, [isOpen, chatHistory.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsBouncing(false);
    setShowUnread(false);
  };

  const sendMessage = async (msg: string) => {
    if (!msg.trim() || isLoading) return;

    const userMsg = msg.trim();
    setChatHistory(prev => [...prev, { text: userMsg, sender: "user" }]);
    setMessage("");
    setIsLoading(true);

    try {
      // The n8n Chat Trigger requires an ?action=sendMessage query param
      const url = new URL(N8N_WEBHOOK_URL);
      url.searchParams.append("action", "sendMessage");

      const response = await fetch(url.toString(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: userMsg,
          sessionId: sessionId
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur de connexion avec n8n");
      }

      const data = await response.json();

      // n8n Chat nodes typically return an array or a single object with the message
      let botResponse = "Désolé, je n'ai pas pu traiter votre demande.";
      if (Array.isArray(data)) {
        botResponse = data[0]?.output || data[0]?.text || botResponse;
      } else if (data.output || data.text) {
        botResponse = data.output || data.text;
      }

      setChatHistory(prev => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Erreur n8n chat:", error);
      setChatHistory(prev => [...prev, { text: "Une erreur est survenue lors de l'envoi du message.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (msg: string) => {
    sendMessage(msg);
  };

  const handleSend = () => {
    sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] font-sans">
      {/* --- FENÊTRE DE CHAT --- */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[550px] bg-white dark:bg-[#0A0A0F] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300">

          {/* Header avec dégradé Kamtech */}
          <div className="bg-gradient-to-b from-[#3D3FCC] to-[#2c29e0] p-6 relative rounded-t-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
              <span className="text-[#3D3FCC] font-bold text-sm tracking-wider">KAM</span>
            </div>
            <h2 className="text-white text-2xl font-semibold leading-tight">
              Bienvenue <br />
              <span className="text-white/90 text-lg font-normal">Comment pouvons-nous vous aider ?</span>
            </h2>
          </div>

          {/* Corps du chat */}
          <div
            ref={scrollRef}
            className="flex-1 p-5 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-4 overflow-y-auto"
          >
            {/* Message initial */}
            {chatHistory.length === 0 && (
              <div className="bg-white dark:bg-[#0A0A0F] p-4 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 animate-in fade-in slide-in-from-bottom-2">
                Notre équipe technique est en ligne. Sélectionnez une option ci-dessous ou écrivez-nous directement.
              </div>
            )}

            {/* Historique du chat */}
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-sm shadow-sm ${
                    chat.sender === "user"
                      ? "bg-[#3D3FCC] text-white rounded-2xl rounded-tr-none"
                      : "bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-700 rounded-2xl rounded-tl-none"
                  }`}
                >
                  {chat.text}
                </div>
              </div>
            ))}

            {/* Loader */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none border border-zinc-100 dark:border-zinc-700 shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-[#3D3FCC]" />
                </div>
              </div>
            )}

            {/* Boutons d'action rapides (seulement au début) */}
            {chatHistory.length === 0 && !isLoading && (
              <div className="flex flex-col gap-3 mt-2 animate-in fade-in slide-in-from-bottom-4 delay-200">
                <button
                  onClick={() => handleQuickReply("Je souhaite des informations sur vos services")}
                  className="group flex items-center justify-between bg-white dark:bg-[#0A0A0F] border border-zinc-200 dark:border-zinc-800 p-3 rounded-full hover:bg-[#3D3FCC] dark:hover:bg-[#6366F1] hover:text-white transition-all text-zinc-800 dark:text-zinc-200 text-sm font-medium"
                >
                  <div className="flex items-center gap-3 ml-2">
                    <Zap size={18} className="group-hover:text-white text-[#3D3FCC] dark:text-[#6366F1]" />
                    Découvrir vos services
                  </div>
                  <ChevronRight size={16} className="opacity-50 group-hover:opacity-100 mr-2" />
                </button>

                <button
                  onClick={() => handleQuickReply("J'ai besoin d'un support technique")}
                  className="group flex items-center justify-between bg-white dark:bg-[#0A0A0F] border border-zinc-200 dark:border-zinc-800 p-3 rounded-full hover:bg-[#3D3FCC] dark:hover:bg-[#6366F1] hover:text-white transition-all text-zinc-800 dark:text-zinc-200 text-sm font-medium"
                >
                  <div className="flex items-center gap-3 ml-2">
                    <LifeBuoy size={18} className="group-hover:text-white text-[#3D3FCC] dark:text-[#6366F1]" />
                    Support Technique
                  </div>
                  <ChevronRight size={16} className="opacity-50 group-hover:opacity-100 mr-2" />
                </button>
              </div>
            )}
          </div>

          {/* Input Chat */}
          <div className="p-4 bg-white dark:bg-[#0A0A0F] border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
              placeholder={isLoading ? "Envoi en cours..." : "Écrivez votre message..."}
              className="flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3D3FCC] dark:text-white disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !message.trim()}
              className="w-10 h-10 bg-[#3D3FCC] dark:bg-[#6366F1] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors shadow-md disabled:opacity-50"
            >
              {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} className="ml-1" />}
            </button>
          </div>
        </div>
      )}

      {/* --- BULLE FLOTTANTE (Ronde) --- */}
      <button
        onClick={handleOpenChat}
        className={`relative w-16 h-16 bg-[#3D3FCC] dark:bg-[#6366F1] rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
          isBouncing ? "animate-bounce" : ""
        }`}
      >
        {/* Pastille de notification rouge */}
        {showUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white dark:border-zinc-950 z-10"></span>
        )}

        {/* Icône Message Square Text Professionnelle */}
        <MessageSquareText size={32} className="text-white drop-shadow-sm" />
      </button>
    </div>
  );
}
