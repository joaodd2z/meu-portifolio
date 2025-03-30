'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useState, FormEvent } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de envio do formulário
    console.log(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Vamos conversar.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Entre em contato!</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">(11) 99999-9999</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">seu.email@exemplo.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">São Paulo, SP</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              placeholder="Nome"
              className="contact-input w-full"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              placeholder="Email"
              className="contact-input w-full"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <input
            placeholder="Assunto"
            className="contact-input"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />

          <textarea
            placeholder="Mensagem"
            className="contact-input"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]/80 transition-all"
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  )
} 