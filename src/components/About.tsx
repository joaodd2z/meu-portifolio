'use client'

import { motion } from 'framer-motion'

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Sobre
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-10 px-0 md:px-10 max-w-6xl"
      >
        <h4 className="text-4xl font-semibold">
          Um pouco sobre minha{" "}
          <span className="underline decoration-[#F7AB0A]/50">jornada</span>
        </h4>
        
        <p className="text-lg text-justify">
          Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. 
          Minha jornada começou com Python, onde desenvolvi uma forte base em programação 
          e lógica. Atualmente, estou focado em expandir meus conhecimentos em desenvolvimento 
          web, trabalhando com React no frontend e Python com FastAPI no backend. 
          Tenho experiência com bancos de dados SQL e estou sempre buscando aprender 
          novas tecnologias e melhores práticas de desenvolvimento.
        </p>

        <div className="flex space-x-5 justify-center md:justify-start">
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-[#F7AB0A]">2+</h5>
            <p className="text-gray-400 text-sm">Anos de Experiência</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-[#F7AB0A]">10+</h5>
            <p className="text-gray-400 text-sm">Projetos Concluídos</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-2xl font-bold text-[#F7AB0A]">100%</h5>
            <p className="text-gray-400 text-sm">Comprometimento</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
} 