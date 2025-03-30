export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-xl text-gray-500">
        Desculpe, a página que você está procurando não existe.
      </p>
      <a
        href="/"
        className="mt-8 px-6 py-3 bg-[#F7AB0A] text-black rounded-lg font-semibold hover:bg-[#F7AB0A]/80 transition-all"
      >
        Voltar para Home
      </a>
    </div>
  )
} 