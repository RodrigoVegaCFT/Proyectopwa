import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { cuento } from './crear';

function Cuento(props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/crear');
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
          <button className="boton" onClick={handleButtonClick}>Volver a selecciones</button>
        </section>
      </div>
    </>
  );
}

export default Cuento;
