import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Efecto de Ventana de Terminal */}
      <div className="w-full max-w-4xl bg-[#111111] border border-gray-800 rounded-lg shadow-2xl overflow-hidden mt-8 md:mt-16">
        
        {/* Cabecera de la Terminal  */}
        <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-xs font-mono text-gray-500">hector_perfil.sh</span>
        </div>

        {/* Contenido Principal */}
        <div className="p-6 md:p-12 font-mono">
          <p className="text-green-500 text-sm md:text-base mb-3">
            &gt; hector.getRol()
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-sans">
            Desarrollador <span className="text-green-500">Java Backend</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-sans mb-8 leading-relaxed">
            Ingeniero en Sistemas Computacionales. Combino <strong className="text-gray-200">13 años de experiencia en logística y Centros de Distribución</strong> con el poder de <strong className="text-green-500">Spring Boot</strong> para diseñar APIs robustas y software que resuelve problemas complejos de operación real.
          </p>

          {/* Etiquetas de tu Stack Tecnológico Rápido */}
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

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row gap-4 font-sans">
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
      </div>
    </div>
  );
}

export default Inicio;