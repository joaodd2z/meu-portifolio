'use client'

import { motion } from 'framer-motion'

type Skill = {
  name: string
  icon: string
  level: number
}

const skills: Skill[] = [
  { name: 'Python', icon: '🐍', level: 90 },
  { name: 'FastAPI', icon: '⚡', level: 85 },
  { name: 'SQL', icon: '📊', level: 80 },
  { name: 'React', icon: '⚛️', level: 75 },
  { name: 'TypeScript', icon: '📘', level: 70 },
  { name: 'Next.js', icon: '▲', level: 75 },
  { name: 'Git', icon: '📦', level: 85 },
  { name: 'Docker', icon: '🐳', level: 70 },
]

export function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Habilidades
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div key={skill.name} className="group relative flex cursor-pointer">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="rounded-lg border border-gray-500 p-5 filter group-hover:grayscale transition duration-300 ease-in-out w-24 h-24 xl:w-32 xl:h-32 flex items-center justify-center"
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">{skill.icon}</span>
                <p className="text-sm font-bold text-center">{skill.name}</p>
              </div>

              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-lg z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-black opacity-100">
                    {skill.level}%
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  )
} 