"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Zap, LifeBuoy, ChevronRight, MessageSquareText } from "lucide-react";

export default function KamtechChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showUnread, setShowUnread] = useState(false);
  const [message, setMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Configuration
  const AUTO_MSG_DELAY = 60000; // 1 minute
  const N8N_WEBHOOK_URL = "https://n8n.kamtech.online/webhook/bf163cda-d1d0-4061-89f8-a046bfe63b5d/chat";

  useEffect(() => {
    audioRef.current = new Audio("/notification.mp3");

    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsBouncing(true);
        setShowUnread(true);
        audioRef.current?.play().catch(() => console.log("Audio bloqué par le navigateur"));
      }
    }, AUTO_MSG_DELAY);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsBouncing(false);
    setShowUnread(false);
  };

  const sendMessage = async (msg: string) => {
    if (!msg.trim()) return;

    console.log("Envoi à n8n :", msg);
    try {
      // Use standard n8n chat node payload structure (chatInput/chatMessage)
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chatInput: msg, // Common field for n8n chat nodes
          message: msg,   // Fallback for custom webhooks
          timestamp: new Date().toISOString(),
          sessionId: "session-" + Math.random().toString(36).substring(7),
          source: "website_chat"
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setMessage("");
    } catch (error) {
      console.error("Erreur webhook:", error);
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
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] bg-white dark:bg-[#0A0A0F] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 transition-all duration-300">

          {/* Header avec dégradé Kamtech (Arrondi en haut) */}
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
          <div className="flex-1 p-5 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col gap-4 overflow-y-auto">

            {/* Message automatique (Arrondi) */}
            <div className="bg-white dark:bg-[#0A0A0F] p-4 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
              Notre équipe technique est en ligne. Sélectionnez une option ci-dessous ou écrivez-nous directement.
            </div>

            {/* Boutons d'action rapides (Arrondis) */}
            <div className="flex flex-col gap-3 mt-2">
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
          </div>

          {/* Input Chat (Arrondi) */}
          <div className="p-4 bg-white dark:bg-[#0A0A0F] border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Écrivez votre message..."
              className="flex-1 bg-zinc-100 dark:bg-zinc-900 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#3D3FCC] dark:text-white"
            />
            <button
              onClick={handleSend}
              className="w-10 h-10 bg-[#3D3FCC] dark:bg-[#6366F1] rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors shadow-md"
            >
              <Send size={16} className="ml-1" />
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
        {/* Pastille de notification rouge (Ronde) */}
        {showUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white dark:border-zinc-950 z-10"></span>
        )}

        {/* Icône Message Square Text Professionnelle */}
        <MessageSquareText size={32} className="text-white drop-shadow-sm" />
      </button>
    </div>
  );
}
