"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Send, Zap, LifeBuoy, ChevronRight } from "lucide-react";

export default function KamtechChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [showUnread, setShowUnread] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Configuration
  const AUTO_MSG_DELAY = 60000; // 1 minute (en millisecondes)
  const N8N_WEBHOOK_URL = "https://n8n.kamtech.online/webhook/bf163cda-d1d0-4061-89f8-a046bfe63b5d/chat";

  useEffect(() => {
    // Initialiser le son (le fichier doit être dans le dossier /public)
    audioRef.current = new Audio("/notification.mp3");

    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsBouncing(true);
        setShowUnread(true);
        // Jouer le son (certains navigateurs bloquent l'audio si l'utilisateur n'a pas interagi)
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

  const handleQuickReply = (message: string) => {
    // Logique pour envoyer le message au webhook n8n
    console.log("Envoi à n8n :", message);
    // fetch(N8N_WEBHOOK_URL, { method: "POST", body: JSON.stringify({ message }) });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] font-sans">
      {/* --- FENÊTRE DE CHAT --- */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 transition-all duration-300">

          {/* Header avec dégradé */}
          <div className="bg-gradient-to-b from-[#2c29e0] to-[#5a58e6] p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-inner">
              <span className="text-[#2c29e0] font-bold text-sm tracking-wider">KAM</span>
            </div>
            <h2 className="text-white text-2xl font-semibold leading-tight">
              Bienvenue <br />
              <span className="text-white/90 text-lg font-normal">Comment pouvons-nous vous aider ?</span>
            </h2>
          </div>

          {/* Corps du chat : 1 Section, 2 Messages rapides */}
          <div className="flex-1 p-5 bg-gray-50 flex flex-col gap-4 overflow-y-auto">

            {/* Message automatique */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-sm text-gray-700">
              Notre équipe technique est en ligne. Sélectionnez une option ci-dessous ou écrivez-nous directement.
            </div>

            {/* Boutons d'action rapides */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => handleQuickReply("Je souhaite des informations sur vos services")}
                className="group flex items-center justify-between bg-white border border-[#2c29e0]/20 p-3 rounded-xl hover:bg-[#2c29e0] hover:text-white hover:shadow-md transition-all text-[#2c29e0] text-sm font-medium"
              >
                <div className="flex items-center gap-3">
                  <Zap size={18} className="group-hover:text-white text-[#2c29e0]" />
                  Découvrir vos services
                </div>
                <ChevronRight size={16} className="opacity-50 group-hover:opacity-100" />
              </button>

              <button
                onClick={() => handleQuickReply("J'ai besoin d'un support technique")}
                className="group flex items-center justify-between bg-white border border-[#2c29e0]/20 p-3 rounded-xl hover:bg-[#2c29e0] hover:text-white hover:shadow-md transition-all text-[#2c29e0] text-sm font-medium"
              >
                <div className="flex items-center gap-3">
                  <LifeBuoy size={18} className="group-hover:text-white text-[#2c29e0]" />
                  Support Technique
                </div>
                <ChevronRight size={16} className="opacity-50 group-hover:opacity-100" />
              </button>
            </div>
          </div>

          {/* Input Chat */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Écrivez votre message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c29e0]/50"
            />
            <button className="w-10 h-10 bg-[#2c29e0] rounded-full flex items-center justify-center text-white hover:bg-[#1a18b8] transition-colors shadow-md">
              <Send size={16} className="ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* --- BULLE FLOTTANTE --- */}
      <button
        onClick={handleOpenChat}
        className={`relative w-16 h-16 bg-[#52b1ff] rounded-2xl shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${
          isBouncing ? "animate-bounce" : ""
        }`}
      >
        {/* Pastille de notification rouge */}
        {showUnread && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10"></span>
        )}

        {/* Icône personnalisée SVG (Reproduction de l'icône avec les yeux) */}
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
          <path
            d="M85,45 C85,65 65,80 45,80 C35,80 28,77 22,72 L12,85 L18,65 C12,58 10,50 10,40 C10,20 30,10 50,10 C75,10 85,25 85,45 Z"
            fill="white"
            stroke="black"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Oeil Gauche */}
          <ellipse cx="40" cy="35" rx="5" ry="8" fill="black" transform="rotate(15 40 35)" />
          <circle cx="42" cy="32" r="2" fill="white" />
          {/* Oeil Droit */}
          <ellipse cx="60" cy="38" rx="5" ry="8" fill="black" transform="rotate(15 60 38)" />
          <circle cx="62" cy="35" r="2" fill="white" />
        </svg>
      </button>
    </div>
  );
}
