import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const baseLink = "block md:inline-block px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300";
  const inactiveLink = "text-gray-400 hover:text-green-400 hover:bg-gray-800";
  const activeLink = "text-green-400 bg-green-500/10 font-bold border-l-2 md:border-l-0 md:border-b-2 border-green-500";

  return (
    <nav className="sticky top-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="text-xl font-bold font-mono text-gray-100 tracking-tighter">
            <span className="text-green-500">&lt;</span>
            HéctorDev
            <span className="text-green-500">/&gt;</span>
          </div>

          {/* BOTÓN MÓVIL */}
          <button 
            className="md:hidden text-gray-300 hover:text-green-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* MENÚ */}
          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#1e1e1e] md:bg-transparent shadow-lg md:shadow-none p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-2`}>
            
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : `${baseLink} ${inactiveLink}`}>
              _inicio
            </NavLink>

            <NavLink to="/experiencia" onClick={closeMenu} className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : `${baseLink} ${inactiveLink}`}>
              _experiencia
            </NavLink>

            <NavLink to="/proyectos" onClick={closeMenu} className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : `${baseLink} ${inactiveLink}`}>
              _proyectos
            </NavLink>

            <NavLink to="/certificados" onClick={closeMenu} className={({ isActive }) => isActive ? `${baseLink} ${activeLink}` : `${baseLink} ${inactiveLink}`}>
              _certificados
            </NavLink>
            <a 
              href="/CV java backend Héctor Zacapala Garnica.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block md:inline-block px-4 py-2 text-sm font-mono font-bold text-[#1e1e1e] bg-green-500 rounded hover:bg-green-400 transition-colors text-center mt-4 md:mt-0 md:ml-4"
            >
              📄 Descargar CV
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;