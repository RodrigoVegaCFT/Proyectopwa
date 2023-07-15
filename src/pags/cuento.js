import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cuento } from './crear';

function Cuento() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/crear');
  };
  const handleClick = () => {
    const value = new SpeechSynthesisUtterance(cuento);
    window.speechSynthesis.speak(value)
  };

  useEffect(() => {
    document.body.classList.add('background-image');

    return () => {
      document.body.classList.remove('background-image');
    };
  }, []);

  // Obtener el cuento de las propiedades de ubicación (location)

  console.log(cuento);
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
            <button className="boton-volver" onClick={handleClick}>Escuchar cuento</button>
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
