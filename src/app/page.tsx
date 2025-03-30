'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import RpgModal from '@/components/RpgModal';
import RpgChat from '@/components/RpgChat';

export default function Home() {
    const [showRpg, setShowRpg] = useState(false);

    return (
        <main className="min-h-screen bg-gradient-to-br from-[#1A0F0A] to-[#2C1810] text-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/rpg-bg.jpg')] opacity-10"></div>
                <div className="container mx-auto px-4 z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <motion.div 
                            className="flex-1 text-center md:text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[DnD] text-[#D4AF37]">
                                João Lucas
                            </h1>
                            <h2 className="text-3xl md:text-4xl mb-6 text-[#D4AF37]">
                                Desenvolvedor Full Stack
                            </h2>
                            <p className="text-xl mb-8 text-gray-300">
                                Transformando ideias em experiências digitais memoráveis
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <motion.a
                                    href="https://www.linkedin.com/in/jasao369/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaLinkedin className="text-xl" />
                                    LinkedIn
                                </motion.a>
                                <motion.a
                                    href="https://github.com/joaodd2z"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#333333] hover:bg-[#333333]/90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-xl" />
                                    GitHub
                                </motion.a>
                                <motion.button
                                    onClick={() => setShowRpg(true)}
                                    className="bg-[#D4AF37] hover:bg-[#B38F2E] text-[#1A0F0A] px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 font-bold"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaRocket className="text-xl" />
                                    Converse com o João Programado 🎮
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div 
                            className="flex-1 flex justify-center"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative w-64 h-64 md:w-96 md:h-96">
                                <motion.div
                                    className="absolute inset-0 bg-[#D4AF37] rounded-full opacity-20 blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.3, 0.2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <img
                                    src="/images/profile.jpg.png"
                                    alt="João Lucas"
                                    className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#D4AF37] shadow-2xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-[#1A0F0A]/50">
                <div className="container mx-auto px-4">
                    <motion.div 
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-8 text-[#D4AF37] font-[DnD]">Sobre Mim</h2>
                        <p className="text-xl mb-12 text-gray-300 leading-relaxed">
                            Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Minha jornada começou com Python, onde desenvolvi uma forte base em programação e lógica. Atualmente, estou focado em expandir meus conhecimentos em desenvolvimento web, trabalhando com React no frontend e Python com FastAPI no backend. Tenho experiência com bancos de dados SQL e estou sempre buscando aprender novas tecnologias e melhores práticas de desenvolvimento.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div 
                                className="bg-[#2C1810]/50 p-6 rounded-lg border border-[#D4AF37]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaCode className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">2+</h3>
                                <p className="text-gray-300">Anos de Experiência</p>
                            </motion.div>
                            <motion.div 
                                className="bg-[#2C1810]/50 p-6 rounded-lg border border-[#D4AF37]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaRocket className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">10+</h3>
                                <p className="text-gray-300">Projetos Concluídos</p>
                            </motion.div>
                            <motion.div 
                                className="bg-[#2C1810]/50 p-6 rounded-lg border border-[#D4AF37]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <FaBrain className="text-4xl text-[#D4AF37] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">100%</h3>
                                <p className="text-gray-300">Comprometimento</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-[#D4AF37] font-[DnD]">Projetos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Sistema do Jasão",
                                description: "Sistema pessoal de gestão de missões diárias e mensais focado em programação, cibersegurança, artigos técnicos, social media e gestão de tráfego. Uma ferramenta completa para acompanhamento de desenvolvimento pessoal e profissional.",
                                tech: ["Python", "FastAPI", "React", "PostgreSQL", "Tailwind"],
                                video: "/images/videos/Sistema do Jasao.mkv"
                            },
                            {
                                title: "Sistema Materno",
                                description: "Aplicativo desenvolvido para auxiliar mães de recém-nascidos no controle de alimentação, troca de fraldas e ciclos de sono. Sistema intuitivo que oferece logística precisa para cuidados maternos.",
                                tech: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
                                video: "/images/videos/Sistema Materno.mkv"
                            },
                            {
                                title: "Sistema de Serviços Infraestrutura",
                                description: "Desenvolvido para a Faculdade IBRA, este sistema permite ao Diretor de Infraestrutura acompanhar demandas, gerar relatórios automatizados e visualizar gráficos de distribuição de serviços, com suporte a múltiplas empresas.",
                                tech: ["React", "Python", "MySQL", "Docker", "Chart.js"],
                                video: "/images/videos/Sistema de Serviços Infraestrutura.mkv"
                            }
                        ].map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-[#2C1810]/50 rounded-lg overflow-hidden border border-[#D4AF37]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative h-48">
                                    <video
                                        src={project.video}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-[#1A0F0A] text-[#D4AF37] px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            className="col-span-1 md:col-span-3 text-center mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-[#D4AF37] text-lg italic">
                                Entre em contato para conhecer mais sobre meus diversos projetos! 🚀
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-[#1A0F0A]/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-[#D4AF37] font-[DnD]">Contato</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                className="bg-[#2C1810]/50 p-8 rounded-lg border border-[#D4AF37]"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Vamos conversar!</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-[#D4AF37]" />
                                        <span className="text-gray-300">(33) 99951-6555</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-[#D4AF37]" />
                                        <span className="text-gray-300">jl.lucas.oliveira@hotmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-[#D4AF37]" />
                                        <span className="text-gray-300">Caratinga, MG</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="bg-[#2C1810]/50 p-8 rounded-lg border border-[#D4AF37]"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-6 text-[#D4AF37]">Redes Sociais</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.a
                                        href="https://www.linkedin.com/in/jasao369/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white p-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaLinkedin className="text-xl" />
                                        LinkedIn
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/joaodd2z"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#333333] hover:bg-[#333333]/90 text-white p-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="text-xl" />
                                        GitHub
                                    </motion.a>
                                    <motion.a
                                        href="https://www.instagram.com/1joaoae/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#E4405F] hover:bg-[#E4405F]/90 text-white p-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaInstagram className="text-xl" />
                                        Instagram
                                    </motion.a>
                                    <motion.a
                                        href="https://wa.me/5533999516555?text=Como%20vai%20Jo%C3%A3o%3F%20Podemos%20falar%20sobre%3A"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] hover:bg-[#25D366]/90 text-white p-4 rounded-lg flex items-center gap-2 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaWhatsapp className="text-xl" />
                                        WhatsApp
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <RpgModal isOpen={showRpg} onClose={() => setShowRpg(false)}>
                <RpgChat />
            </RpgModal>
        </main>
    );
} 