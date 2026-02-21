import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Efecto de Ventana de Terminal */}
      <div className="w-full max-w-4xl bg-[#111111] border border-gray-800 rounded-lg shadow-2xl overflow-hidden mt-8 md:mt-16">
        
        {/* Cabecera de la Terminal */}
        <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs font-mono text-gray-500">hector_perfil.sh</span>
        </div>

        {/* Contenido Principal */}
        <div className="p-6 md:p-12 font-mono flex flex-col h-full">
          <div>
            <p className="text-green-500 text-sm md:text-base mb-3">
              &gt; hector.getRol()
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-sans">
              Desarrollador <span className="text-green-500">Java Backend</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-sans mb-8 leading-relaxed">
              Ingeniero en Sistemas Computacionales. Combino <strong className="text-gray-200">13 años de experiencia en logística y Centros de Distribución</strong> con el poder de <strong className="text-green-500">Spring Boot</strong> para diseñar APIs robustas y software que resuelve problemas complejos de operación real.
            </p>

            {/* Etiquetas del Stack */}
            <div className="flex flex-wrap gap-3 mb-10 font-sans">
              <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md text-sm border border-gray-700 shadow-sm">
                ☕ Java
              </span>
              <span className="px-4 py-2 bg-green-900/20 text-green-400 rounded-md text-sm border border-green-800/50 shadow-sm">
                🍃 Spring Boot
              </span>
              <span className="px-4 py-2 bg-blue-900/20 text-blue-400 rounded-md text-sm border border-blue-800/50 shadow-sm">
                🐬 MySQL
              </span>
              <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-md text-sm border border-gray-700 shadow-sm">
                ⚙️ Arquitectura REST
              </span>
            </div>

            {/* Botones de Navegación Interna */}
            <div className="flex flex-col sm:flex-row gap-4 font-sans mb-10">
              <Link 
                to="/proyectos" 
                className="px-8 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded shadow-lg shadow-green-900/20 transition-all text-center"
              >
                Ver mis Proyectos
              </Link>
              <Link 
                to="/experiencia" 
                className="px-8 py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-gray-300 font-bold rounded transition-all text-center"
              >
                Conocer mi Trayectoria
              </Link>
            </div>
          </div>

          {/* === NUEVA SECCIÓN DE CONTACTO FIJA AL FONDO === */}
          <div className="border-t border-gray-800 pt-6 mt-auto font-sans">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <span className="text-green-500 font-mono text-sm">
                &gt; ping contactos:
              </span>
              
              <div className="flex flex-wrap gap-6">
                {/* Botón GitHub */}
                <a href="https://github.com/kakzumooto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span className="font-bold">GitHub</span>
                </a>

                {/* Botón LinkedIn */}
                <a href="https://www.linkedin.com/in/hector-zacapala-538162259/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-[#0A66C2] transition-colors group">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <span className="font-bold">LinkedIn</span>
                </a>

                {/* Botón Correo */}
                <a href="mailto:hectorzacapala22@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="font-bold">Email</span>
                </a>
                {/* Botón WhatsApp */}
                <a href="https://wa.me/525564512668" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors group">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                  <span className="font-bold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inicio;