import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import conejo from '../img/001-conejo-de-pascua.png';
import mono from '../img/002-mono.png';
import perro from '../img/003-mascota.png';
import dino from '../img/004-estegosaurio.png';
import gato from '../img/005-gato.png';
import elefante from '../img/006-elefantes.png';
import desierto from '../img/007-desierto.png';
import bosque from '../img/008-bosque.png';
import montana from '../img/009-montanas.png';
import espacio from '../img/010-lanzamiento.png';
import ciudad from '../img/011-ciudad.png';
import lago from '../img/014-lago.png';
import pista from '../img/015-pista.png';
import amistad from '../img/016-amistad.png';
import hada from '../img/017-hada.png';
import carrera from '../img/018-bandera-de-carreras.png';
import juegos from '../img/019-juego-de-mesa.png';
import peleas from '../img/020-pelear.png';
import { ObtenerCuento } from '../compo/api/generate';
let cuento = '';

function Crear() {
  const [personajes, setPersonajes] = useState([]);
  const [lugares, setLugares] = useState([]);
  const [temas, setTemas] = useState([]);
  const [errore, setErrore] = useState('');
  const navigate = useNavigate();

  const handlePersonajesChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setPersonajes((prevPersonajes) => [...prevPersonajes, value]);
    } else {
      setPersonajes((prevPersonajes) =>
        prevPersonajes.filter((personaje) => personaje !== value)
      );
    }
  };

  const handleLugaresChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setLugares((prevLugares) => [...prevLugares, value]);
    } else {
      setLugares((prevLugares) => prevLugares.filter((lugar) => lugar !== value));
    }
  };

  const handleTemasChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setTemas((prevTemas) => [...prevTemas, value]);
    } else {
      setTemas((prevTemas) => prevTemas.filter((tema) => tema !== value));
    }
  };

  const handleButtonClick = async () => {
    if (personajes.length === 0 || lugares.length === 0 || temas.length === 0) {
      alert('Debes seleccionar al menos un personaje, lugar y tema para poder continuar.');
      return;
    }
  
    try {
        cuento = await ObtenerCuento();
      console.log(cuento)
      navigate('/cuento');
    } catch (error) {
      console.error('Error al generar el cuento:', error);
      setErrore('Error al generar el cuento');
      console.log(errore);
    }
  };
  return (
    <><section className="crear">
          <h1>¿Qué personajes quieres en tu cuento?</h1>
          <div className="contenedor-opciones">
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="conejo" id="conejo1" />
                  <label htmlFor="conejo1">
                      <img src={conejo} alt="conejo" />
                      <p>Conejo</p>
                  </label>
              </div>
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="mono" id="mono1" />
                  <label htmlFor="mono1">
                      <img src={mono} alt="mono" />
                      <p>Mono</p>
                  </label>
              </div>
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="perro" id="perro1" />
                  <label htmlFor="perro1">
                      <img src={perro} alt="perro" />
                      <p>Perro</p>
                  </label>
              </div>
          </div>

          <div className="contenedor-opciones">
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="dino" id="dino1" />
                  <label htmlFor="dino1">
                      <img src={dino} alt="dinosaurio" />
                      <p>Dinosaurio</p>
                  </label>
              </div>
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="gato" id="gato1" />
                  <label htmlFor="gato1">
                      <img src={gato} alt="gato" />
                      <p>Gato</p>
                  </label>
              </div>
              <div className="cont">
                  <input type="checkbox" className="checkbox" onChange={handlePersonajesChange}name="elefante" id="elefante1" />
                  <label htmlFor="elefante1">
                      <img src={elefante} alt="elefante" />
                      <p>Elefante</p>
                  </label>
              </div>
          </div>
      </section><section className="crear">
              <h1>¿Dónde será tu cuento?</h1>
              <div className="contenedor-opciones">
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="montana" id="montana1" />
                      <label htmlFor="montana1">
                          <img src={montana} alt="montana" />
                          <p>Montañas</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="desierto" id="desierto1" />
                      <label htmlFor="desierto1">
                          <img src={desierto} alt="desierto" />
                          <p>Desierto</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="bosque" id="bosque1" />
                      <label htmlFor="bosque1">
                          <img src={bosque} alt="bosque" />
                          <p>Bosques</p>
                      </label>
                  </div>
              </div>

              <div className="contenedor-opciones">
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="espacio" id="espacio1" />
                      <label htmlFor="espacio1">
                          <img src={espacio} alt="espacio" />
                          <p>Espacio</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="ciudad" id="ciudad1" />
                      <label htmlFor="ciudad1">
                          <img src={ciudad} alt="cuidad" />
                          <p>Ciudad</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleLugaresChange}name="lago" id="lago1" />
                      <label htmlFor="lago1">
                          <img src={lago} alt="lago" />
                          <p>Lago</p>
                      </label>
                  </div>
              </div>
          </section>
          <section className="crear">
              <h1>¿Sobre qué será tu cuento?</h1>
              <div className="contenedor-opciones">
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="misterio" id="misterio1" />
                      <label htmlFor="misterio1">
                          <img src={pista} alt="misterio" />
                          <p>Misterio</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="amistad" id="amistad1" />
                      <label htmlFor="amistad1">
                          <img src={amistad} alt="amistad" />
                          <p>Amistad</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="fantasía" id="fantasía1" />
                      <label htmlFor="fantasía1">
                          <img src={hada} alt="fantasía" />
                          <p>Fantasía</p>
                      </label>
                  </div>
              </div>
              <div className="contenedor-opciones">
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="carreras" id="carreras1" />
                      <label htmlFor="carreras1">
                          <img src={carrera} alt="carreras" />
                          <p>Carreras</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="juegos" id="juegos1" />
                      <label htmlFor="juegos1">
                          <img src={juegos} alt="juegos" />
                          <p>Juegos</p>
                      </label>
                  </div>
                  <div className="cont">
                      <input type="checkbox" className="checkbox" onChange={handleTemasChange}name="peleas" id="peleas1" />
                      <label htmlFor="peleas1">
                          <img src={peleas} alt="peleas" />
                          <p>Peleas</p>
                      </label>
                  </div>
              </div>
          </section><section className="confirmar">
              <button className="boton" onClick={handleButtonClick}>Confirmar Elecciones</button>
          </section>
          
      
          
          </>

          
  );
}


export default Crear;
export { cuento };

