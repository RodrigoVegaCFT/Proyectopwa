export async function ObtenerCuento() {
  try {
    const response = await fetch("http://localhost:8080/api/story");

    if (response.ok) {
      const cuentoData = await response.text();
      return cuentoData;
    } else {
      console.error("Error al obtener el cuento:", response.status);
      throw new Error("Error al obtener el cuento");
    }
  } catch (error) {
    console.error("Error al obtener el cuento:", error);
    throw new Error("Error al obtener el cuento");
  }
}

