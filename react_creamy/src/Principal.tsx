import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/navbar_prueba"; // Asegúrate de que el path sea correcto
import { useState } from 'react';
import App from './App';

export default function Principal_model(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar fijo */}
      <Navbar toggleMenu={toggleMenu} />
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-pt-4">
        {/* Sidebar o menú */}
        

        {/* Contenido principal con suficiente padding-top */}
        <div className="tw-page-holder tw-w-full tw-p-2 "> {/* Ajuste de padding-top */}
          <div className="tw-container-fluid tw-px-lg-4 tw-px-xl-5 tw-border-spacing-4 tw-border-gray-300 tw-rounded-lg tw-shadow-md">
            {/* Definición de rutas */}
            <Routes>
              <Route path="/Principal" element={<P/>} />
            </Routes>
            <footer className="footer tw-bg-white tw-shadow tw-align-self-end tw-py-3 tw-px-xl-2 tw-w-full">
              <div className="tw-container-fluid">
                <div className="tw-row">
                  <div className="tw-col-md-6 tw-text-center tw-text-md-start tw-fw-bold">
                    <p className="tw-mb-2 tw-mb-md-0 tw-fw-bold">
                      Creamy Soft &copy; 2024
                    </p>
                  </div>
                  <div className="tw-col-md-6 tw-text-center tw-text-md-end tw-text-gray-400">
                    <p className="tw-mb-0">Version 1.3.2</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Toaster position="top-right" reverseOrder={false} />
//     </Router>
//   );
// };


