'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-center"
      >
        <div className="w-32 h-32 rounded-full border border-[#333333] flex items-center justify-center">
          {/* Adicione sua foto de perfil aqui */}
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>
        
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-4">
          Desenvolvedor Full Stack
        </h2>
        
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 mt-4">
          <span className="mr-3">Olá, eu sou</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            João Lucas
          </span>
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero-button">Sobre</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projetos</button>
          </Link>
          <Link href="#contact">
            <button className="hero-button">Contato</button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 