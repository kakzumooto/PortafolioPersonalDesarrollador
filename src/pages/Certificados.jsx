function Certificados() {
  const certificaciones = [
    {
      id: 1,
      titulo: "Oracle Next Education (ONE) G4 - Backend",
      emisor: "Oracle & Alura Latam",
      descripcion: "Programa intensivo y selectivo de formación en desarrollo de software, especialización en Backend. Completado con éxito en la Generación 4.",
      link: "https://app.aluracursos.com/program/certificate/832abcce-fdca-4099-b06a-3c74af2ea6d9", 
      icono: "🏅"
    },
    {
      id: 2,
      titulo: "Spring Boot 3: desarrollar una API Rest en Java",
      emisor: "Alura Latam",
      descripcion: "Creación de APIs RESTful escalables. Implementación de controladores, persistencia de datos con JPA/Hibernate, migraciones de base de datos y buenas prácticas de arquitectura.",
      link: "https://app.aluracursos.com/user/kakzumooto22/course/spring-boot-3-desarrollar-api-rest-java/certificate",
      icono: "🍃" // La hoja clásica de Spring Boot
    },
    {
      id: 3,
      titulo: "Certificado en Fundamentos de Scrum (SFC)",
      emisor: "SCRUMstudy",
      descripcion: "Conocimiento sólido en metodologías ágiles, gestión de sprints, ceremonias de Scrum y entrega continua de valor en equipos de desarrollo.",
      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=979520",
      icono: "🔄" // El ciclo ágil
    },
    {
      id: 4,
      titulo: "Git y GitHub: controle y comparta su código",
      emisor: "Alura Latam", 
      descripcion: "Dominio del control de versiones distribuido. Gestión de repositorios, resolución de conflictos, manejo de ramas (branches) y colaboración efectiva en equipos.",
      link: "https://app.aluracursos.com/certificate/0bc78728-7503-43dd-bb2c-43297e77cac9", 
      icono: "🌿" // Representación de las ramas (branches) de Git
    },
    {
      id: 5,
      titulo: "Markdown: Documentación Técnica",
      emisor: "EDteam", 
      descripcion: "Estructuración y maquetación de documentación técnica profesional. Creación de archivos README para repositorios y toma de notas estandarizadas.",
      link: "https://ed.team/u/hectorzacapala/curso/markdown", 
      icono: "📝" // Icono de documentación
    }  
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      
      {/* Título de la Sección */}
      <div className="mb-12 border-b border-gray-700 pb-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
          <span className="text-green-400">/</span> Certificaciones
        </h1>
        <p className="text-gray-300 text-xl font-medium">
          Validación continua de habilidades técnicas y metodologías de trabajo.
        </p>
      </div>

      {/* Grid de Insignias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {certificaciones.map((cert) => (
          <div key={cert.id} className="bg-[#111111] border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300 shadow-xl flex flex-col h-full">
            
            {/* Parte superior (Flexible) */}
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-4">
                <span className="text-3xl">{cert.icono}</span>
                <div>
                  <h2 className="text-xl font-bold text-white leading-tight mb-1">
                    {cert.titulo}
                  </h2>
                  <span className="text-sm font-mono text-blue-400">
                    {cert.emisor}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {cert.descripcion}
              </p>
            </div>

            {/* Parte inferior (Fija al fondo gracias a mt-auto) */}
            <div className="mt-auto">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center text-sm font-bold text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 hover:bg-gray-800 py-2 rounded transition-colors"
              >
                Ver Credencial 🔗
              </a>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Certificados;