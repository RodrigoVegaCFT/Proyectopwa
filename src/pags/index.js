import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function IndexPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('background-image');

    const handleClick = () => {
      navigate('/crear');
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.body.classList.remove('background-image');
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
    <>
      <div className="indx">
        <section className="center">
          <div className="center-section">
            <h1>¡Bienvenido a PekeCuentos!</h1>
          </div>
        </section>
        <div>
          <p id="parpadeo">PRESIONA EN CUALQUIER LUGAR PARA CONTINUAR.</p>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
