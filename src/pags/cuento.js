import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Cuento() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/crear');
  }

  useEffect(() => {
    document.body.classList.add('background-image');

    return () => {
      document.body.classList.remove('background-image');
    };
  });

  

  return (
    <>
    <body className='fondo-cuento'>
    <section className="center">
          <div className="center-section">
              <h1>¡Disfruta tu cuento!</h1>
          </div>
      </section><section className="volver">
      <button className="boton" onClick={handleButtonClick}>Volver a selecciones</button>
          </section>
          </body>
          </>
  )
}

export default Cuento
