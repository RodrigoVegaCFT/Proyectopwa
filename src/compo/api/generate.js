import { Configuration, OpenAIApi} from "openai";
import { useState } from "react";


const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function crearCuento(personajes, lugares, temas) {
  const prompt = generatePrompt(personajes, lugares, temas);
  console.log ('chao', process.env.REACT_APP_OPENAI_API_KEY);
  const [cuento , setCuento] = useState([])
  try {
    fetch('https://openai.com/api')
    .then(response => response.json())
    .then(json => setCuento(json))

    return cuento;
    
  } catch (error) {
    console.error('Error al generar el cuento:', error);
    throw new Error('Error al generar el cuento');
  }
}

function generatePrompt(personajes, lugares, temas) {
  let prompt = `Crea un cuento con `;

  if (personajes.length > 0) {
    prompt += `${personajes.join(' y ')} `;
  }

  if (lugares.length > 0) {
    prompt += `,en ${lugares.join(' y ')} `;
  }

  if (temas.length > 0) {
    prompt += `,sobre ${temas.join(' y ')} `;
  }

  prompt += `.\n\nÉrase una vez, `; // Comienzo del cuento

  return prompt;
}
