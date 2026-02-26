function Experiencia() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      
      {/* Título de la Sección */}
      <div className="mb-12 border-b border-gray-700 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
          <span className="text-green-400">/</span> Trayectoria Profesional
        </h1>
        <p className="text-gray-300 text-xl font-medium">
          La ventaja de entender el negocio operativo antes de escribir la primera línea de código.
        </p>
      </div>

      <div className="relative border-l-2 border-gray-700 ml-3 md:ml-6 space-y-12">
        
        {/* --- SECCIÓN IT / SISTEMAS --- */}
        <div className="relative pl-8 md:pl-12">
          {/* Punto en la línea */}
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-green-500 rounded-full border-4 border-[#1e1e1e]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h2 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
              Ingeniero en Sistemas Computacionales
            </h2>
            <span className="text-green-300 font-bold font-mono text-sm bg-green-900/40 px-3 py-1 rounded mt-2 sm:mt-0 w-max border border-green-800">
              Egresado
            </span>
          </div>
          <h3 className="text-xl text-green-400 mb-4 font-mono font-bold">&gt; Desarrollador Java Backend</h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Especialización en el ecosistema <strong className="text-white font-bold bg-gray-800 px-1 rounded">Spring (Spring Boot, Data JPA, Security)</strong> para el diseño de APIs RESTful robustas y gestión de bases de datos relacionales (MySQL). 
          </p>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Adicionalmente, cuento con bases sólidas en el desarrollo de interfaces dinámicas con <strong className="text-white font-bold bg-gray-800 px-1 rounded">React y Vite</strong>. Mi enfoque principal es traducir requerimientos complejos del negocio en soluciones de software eficientes, escalables y orientadas a la resolución de problemas.
          </p>
        </div>

        {/* --- SECCIÓN LOGÍSTICA --- */}
        <div className="relative pl-8 md:pl-12">
          <div className="absolute -left-[11px] top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-[#1e1e1e]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h2 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
              Operaciones Logísticas y CEDIS
            </h2>
            <span className="text-blue-300 font-bold font-mono text-sm bg-blue-900/40 px-3 py-1 rounded mt-2 sm:mt-0 w-max border border-blue-800">
              Experiencia Sólida
            </span>
          </div>
          <h3 className="text-xl text-blue-400 mb-4 font-mono font-bold">&gt; Coordinación, Administración y Auditoría</h3>
          <p className="text-gray-200 text-lg leading-relaxed mb-4">
            Profundo conocimiento de la cadena de suministro, control de inventarios y flujo de materiales. Experiencia clave en:
          </p>
          <ul className="list-disc list-inside text-gray-200 text-lg space-y-2 marker:text-blue-500 ml-2">
            <li>Auditorías de procesos para asegurar la calidad y eficiencia operativa.</li>
            <li>Funciones administrativas y supervisión directa en piso dentro de Centros de Distribución.</li>
            <li>Identificación de cuellos de botella y optimización de flujos de trabajo.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Experiencia;