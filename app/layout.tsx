import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import KamtechChat from "@/components/KamtechChat"
import ElevenLabsWidget from "@/components/ElevenLabsWidget"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'KAMTECH IA — Chatbot WhatsApp & Automatisation IA pour PME',
  description: 'Automatisez vos ventes, votre support client et vos processus avec KAMTECH IA. Chatbots WhatsApp sur mesure, automatisation n8n, déploiement en 7 jours. Audit gratuit.',
  keywords: 'chatbot WhatsApp PME, automatisation IA entreprise, agence automatisation WhatsApp, chatbot IA sur mesure, automatisation processus PME',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <KamtechChat />
          <ElevenLabsWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
