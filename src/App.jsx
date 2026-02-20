import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Experiencia from './pages/Experiencia';
import Proyectos from './pages/Proyectos';
import Certificados from './pages/Certificados';

function App() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen text-gray-200 font-sans selection:bg-green-500 selection:text-white">
      
      <Navbar />

      <div className="container mx-auto p-4 md:p-8">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/certificados" element={<Certificados />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;