'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

interface Dialogue {
    text: string;
    options: { text: string; next: string }[];
    image: string;
    links?: Array<{
        icon: React.ReactNode;
        text: string;
        url: string;
        color: string;
    }>;
}

const dialogues: Record<string, Dialogue> = {
    greeting: {
        text: "Olá! Eu sou o João Lucas, um desenvolvedor Full Stack apaixonado por criar experiências incríveis! Como posso te ajudar hoje?",
        options: [
            { text: "Me conte sobre sua jornada!", next: "journey" },
            { text: "Quais são suas habilidades?", next: "skills" },
            { text: "Mostre seus projetos!", next: "projects" },
            { text: "Como posso te contatar?", next: "contact" }
        ],
        image: "/images/magick.jpg.png"
    },
    journey: {
        text: "Minha jornada começou com uma paixão por tecnologia e uma vontade de criar algo único. Hoje, sou um desenvolvedor Full Stack especializado em criar soluções inovadoras e experiências memoráveis.",
        options: [
            { text: "Como você construiu este RPG?", next: "rpg_explanation" },
            { text: "Quais são suas habilidades?", next: "skills" },
            { text: "Voltar ao início", next: "greeting" }
        ],
        image: "/images/medieval.jpg.png"
    },
    rpg_explanation: {
        text: "Este RPG foi construído com Next.js, React e TypeScript! É uma forma divertida e interativa de mostrar minhas habilidades. Cada interação é programada para criar uma experiência única e memorável.",
        options: [
            { text: "Quais são suas habilidades?", next: "skills" },
            { text: "Mostre seus projetos!", next: "projects" },
            { text: "Voltar ao início", next: "greeting" }
        ],
        image: "/images/magick.jpg.png"
    },
    skills: {
        text: "Como desenvolvedor Full Stack, domino várias tecnologias:\n\nFrontend: React, Next.js, TypeScript\nBackend: Python, Flask, Node.js\nBanco de Dados: SQL, MongoDB\nDevOps: Docker, Git, CI/CD\n\nE estou sempre aprendendo mais!",
        options: [
            { text: "Mostre seus projetos!", next: "projects" },
            { text: "Como posso te contatar?", next: "contact" },
            { text: "Voltar ao início", next: "greeting" }
        ],
        image: "/images/medieval2.jpg.png"
    },
    projects: {
        text: "Alguns dos meus projetos mais interessantes:\n\n1. Sistema de Gestão Empresarial\n2. Plataforma de E-commerce\n3. Aplicativo de Delivery\n4. Dashboard Analytics\n\nCada projeto foi uma oportunidade de aprender e crescer!",
        options: [
            { text: "Como posso te contatar?", next: "contact" },
            { text: "Quais são suas habilidades?", next: "skills" },
            { text: "Voltar ao início", next: "greeting" }
        ],
        image: "/images/medieval.jpg.png"
    },
    contact: {
        text: "Vamos conversar! Você pode me encontrar em:",
        options: [
            { text: "Voltar ao início", next: "greeting" }
        ],
        image: "/images/profile.jpg.png",
        links: [
            {
                icon: <FaLinkedin className="w-6 h-6" />,
                text: "LinkedIn",
                url: "https://www.linkedin.com/in/jasao369/",
                color: "from-[#0A66C2] to-[#0A66C2]"
            },
            {
                icon: <FaGithub className="w-6 h-6" />,
                text: "GitHub",
                url: "https://github.com/joaodd2z",
                color: "from-[#333333] to-[#333333]"
            },
            {
                icon: <FaInstagram className="w-6 h-6" />,
                text: "Instagram",
                url: "https://www.instagram.com/1joaoae/",
                color: "from-[#E4405F] to-[#E4405F]"
            },
            {
                icon: <FaWhatsapp className="w-6 h-6" />,
                text: "WhatsApp",
                url: "https://wa.me/5533999516555?text=Como%20vai%20Jo%C3%A3o%3F%20Podemos%20falar%20sobre%3A",
                color: "from-[#25D366] to-[#25D366]"
            }
        ]
    }
};

export default function RpgChat() {
    const [currentDialogue, setCurrentDialogue] = useState("greeting");
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [currentImage, setCurrentImage] = useState("/images/magick.jpg.png");

    const typeText = useCallback(async (text: string) => {
        setIsTyping(true);
        setDisplayedText("");
        setShowOptions(false);
        
        let currentText = "";
        for (let i = 0; i < text.length; i++) {
            currentText += text[i];
            setDisplayedText(currentText);
            await new Promise(resolve => setTimeout(resolve, 30));
        }
        
        setIsTyping(false);
        setShowOptions(true);
    }, []);

    useEffect(() => {
        typeText(dialogues[currentDialogue].text);
        setCurrentImage(dialogues[currentDialogue].image);
    }, [currentDialogue, typeText]);

    const handleOptionClick = useCallback((next: string) => {
        if (dialogues[next]) {
            setCurrentDialogue(next);
        }
    }, []);

    return (
        <div className="relative w-full h-[90vh] bg-gradient-to-br from-[#2C1810] to-[#1A0F0A] rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/rpg-bg.jpg')] opacity-20"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
                <motion.div 
                    className="w-48 h-48 rounded-full overflow-hidden shadow-2xl mb-8 hover:scale-105 transition-transform duration-300 border-4 border-[#D4AF37]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img 
                            key={currentImage}
                            src={currentImage}
                            alt="João Lucas" 
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="bg-[#1A0F0A]/90 p-6 rounded-lg shadow-xl max-w-2xl w-full text-white border-2 border-[#D4AF37]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="whitespace-pre-line mb-6 text-lg font-[DnD]">
                        {displayedText}
                    </div>

                    {currentDialogue === "contact" && dialogues[currentDialogue].links && (
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {dialogues[currentDialogue].links.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r ${link.color} text-white hover:opacity-90 transition-opacity duration-200 border border-[#D4AF37]`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {link.icon}
                                    <span>{link.text}</span>
                                </motion.a>
                            ))}
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {showOptions && (
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {dialogues[currentDialogue].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        className="bg-[#2C1810] hover:bg-[#3C2820] text-white p-4 rounded-lg transition-colors duration-200 border border-[#D4AF37] font-[DnD]"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleOptionClick(option.next)}
                                    >
                                        {option.text}
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
} 