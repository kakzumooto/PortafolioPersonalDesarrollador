function Proyectos() {
  const proyectos = [
    {
      id: 1,
      titulo: "Sistema de Gestión - Cafetería Aroma Borealis",
      descripcion: "Aplicación web completa para la gestión operativa. Incluye control de inventario, procesamiento de órdenes, carrito de compras y panel de administración seguro.",
      arquitectura: "API REST estructurada con MVC, seguridad basada en roles (Admin/User) y conexión fluida con base de datos relacional.",
      stack: ["☕ Java", "🍃 Spring Boot", "🐬 MySQL", "⚛️ React", "⚡ Vite", "🎨 Tailwind CSS"],
      github: "https://github.com/kakzumooto/cafeteria-frontend",
      demo: "https://cafeteria-frontend-ochre.vercel.app/" 
    },
    {
      id: 2,
      titulo: "Catálogo de Autopartes",
      descripcion: "Plataforma para la gestión y exhibición de inventario automotriz. Participación integral: desde el levantamiento de requerimientos con el cliente hasta el desarrollo fullstack y despliegue inicial.",
      arquitectura: "Arquitectura cliente-servidor consumiendo endpoints RESTful protegidos. *Nota: Proyecto actualmente offline por finalización de contrato comercial.*",
      stack: ["☕ Java", "🍃 Spring Boot", "🐬 MySQL", "⚛️ React", "🎨 CSS"],
      github: "https://github.com/kakzumooto/CatalogoAutoPartes",
      demo: "https://performanceday.com.mx/" 
    },
    {
      id: 3,
      titulo: "⌨️ Speedword - Coding Typing Game",
      descripcion: "Juego interactivo que mide la velocidad y precisión al escribir código. Incluye registro de usuarios y cálculo de tiempos en un Leaderboard global.",
      arquitectura: "Desarrollo Fullstack: Lógica de validación en tiempo real en el frontend y una API REST robusta en el backend para la persistencia de puntajes en base de datos.",
      stack: ["☕ Java", "🍃 Spring Boot", "🗄️ Base de Datos", "💛 JavaScript", "🏆 Lógica de Programación"],
      github: "https://github.com/kakzumooto/speedword",
      demo: "https://speedword.onrender.com/"
    },
    {
     id: 4,
      titulo: "🌐 Portafolio Web Académico",
      descripcion: "Maquetación web enfocada en el diseño responsivo y la presentación visual de la información para un requerimiento universitario.",
      arquitectura: "Estructura semántica fluida, optimizando los estilos y la presentación estática mediante tecnologías web nativas.",
      stack: ["🟠 HTML5", "🔵 CSS3"],
      github: "https://github.com/kakzumooto/PortafolioMissSARAHI",
      demo: "https://portafolio-miss-sarahi.vercel.app/"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      
      {/* Título de la Sección */}
      <div className="mb-12 border-b border-gray-700 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
          <span className="text-green-400">/</span> Mis Proyectos
        </h1>
        <p className="text-gray-300 text-xl font-medium">
          Desde el levantamiento de requerimientos hasta el código en producción.
        </p>
      </div>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors duration-300 shadow-xl flex flex-col h-full">
            
            {/* === PARTE SUPERIOR (Flexible) === */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-3 hover:text-green-400 transition-colors">
                {proyecto.titulo}
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {proyecto.descripcion}
              </p>

              <div className="mb-5 bg-[#1e1e1e] p-3 rounded border border-gray-700">
                <span className="text-xs font-mono font-bold text-green-400 block mb-1">&gt; Enfoque Técnico:</span>
                <p className="text-sm text-gray-200 font-mono">
                  {proyecto.arquitectura}
                </p>
              </div>
            </div>

            <div className="mt-auto">
              
              {/* Etiquetas del Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proyecto.stack.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-900 text-gray-300 text-xs rounded border border-gray-700">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botones de Links */}
              <div className="flex gap-4 border-t border-gray-800 pt-4">
                <a 
                  href={proyecto.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-gray-100 hover:text-white bg-gray-800 hover:bg-gray-600 px-4 py-2 rounded transition-colors border border-gray-600"
                >
                  <span>💻</span> Repositorio
                </a>
                
                {proyecto.demo !== "#" && (
                  <a 
                    href={proyecto.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-[#111111] hover:text-black bg-green-500 hover:bg-green-400 px-4 py-2 rounded transition-colors"
                  >
                    <span>🚀</span> Ver Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Proyectos;