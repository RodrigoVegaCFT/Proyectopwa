import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cuento } from './crear';

function Cuento() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    navigate('/crear');
  };

  const handleClick = () => {
    const value = new SpeechSynthesisUtterance(cuento);
    window.speechSynthesis.speak(value);
    setIsPlaying(true);
  };

  useEffect(() => {
    document.body.classList.add('background-image');

    return () => {
      document.body.classList.remove('background-image');
      window.speechSynthesis.cancel(); // Detener la reproducción del cuento al salir del componente
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const speechSynthesis = window.speechSynthesis;

      speechSynthesis.addEventListener('end', handleSpeechEnd);
      speechSynthesis.addEventListener('error', handleSpeechEnd);
    }

    return () => {
      const speechSynthesis = window.speechSynthesis;

      speechSynthesis.removeEventListener('end', handleSpeechEnd);
      speechSynthesis.removeEventListener('error', handleSpeechEnd);
    };
  }, [isPlaying]);

  const handleSpeechEnd = () => {
    setIsPlaying(false);
  };

  // Obtener el cuento de las propiedades de ubicación (location)

  
  return (
    <>
      <div className='fondo-cuento'>
        <section className="center">
          <div className="center-section">
            <h1>¡Disfruta tu cuento!</h1>
          </div>
        </section>
        
        <section className="volver">
          <div className='btns'>
            <button className="boton-volver" onClick={handleClick} disabled={isPlaying}>
              {isPlaying ? 'Reproduciendo...' : 'Escuchar cuento'}
            </button>
          </div>
          <div className='btns'>
            <button className="boton-volver" onClick={handleButtonClick}>Volver a selecciones</button>
            </div>
        </section>
      </div>
    </>
  );
}

export default Cuento;
