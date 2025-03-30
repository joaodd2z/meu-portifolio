'use client'

import { motion } from 'framer-motion'

type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    title: "Sistema de Gerenciamento de Tarefas",
    description: "Aplicação full-stack desenvolvida com Python (FastAPI) no backend e React no frontend. Implementa autenticação JWT, banco de dados PostgreSQL e interface moderna com Tailwind CSS.",
    image: "/project1.jpg",
    tags: ["Python", "FastAPI", "React", "PostgreSQL", "Tailwind"],
    link: "https://github.com/seu-usuario/projeto1"
  },
  {
    title: "API de Análise de Dados",
    description: "API RESTful construída com Python para análise de dados em tempo real. Utiliza pandas para processamento de dados e implementa cache com Redis para otimização de performance.",
    image: "/project2.jpg",
    tags: ["Python", "Pandas", "Redis", "Docker", "FastAPI"],
    link: "https://github.com/seu-usuario/projeto2"
  },
  {
    title: "Dashboard Interativo",
    description: "Dashboard interativo para visualização de dados empresariais. Desenvolvido com React e TypeScript, utilizando bibliotecas modernas de visualização de dados.",
    image: "/project3.jpg",
    tags: ["React", "TypeScript", "D3.js", "Material-UI"],
    link: "https://github.com/seu-usuario/projeto3"
  }
]

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              alt={project.title}
              className="w-[500px] h-[300px] object-cover rounded-lg shadow-lg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Projeto {i + 1} de {projects.length}:
                </span>{" "}
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-800 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>

              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#F7AB0A] text-black px-6 py-2 rounded-lg font-bold text-lg hover:bg-[#F7AB0A]/80 transition-all"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
} 