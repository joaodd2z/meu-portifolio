'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Oops! Algo deu errado</h1>
      <p className="text-xl text-gray-500 mb-8">
        Desculpe, ocorreu um erro inesperado.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#F7AB0A] text-black rounded-lg font-semibold hover:bg-[#F7AB0A]/80 transition-all"
      >
        Tentar Novamente
      </button>
    </div>
  )
} 