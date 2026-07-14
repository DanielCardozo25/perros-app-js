// Definición del estado inicial
const estado = {
    raza: '',
    fotos: []
};

/**
 * Función para actualizar la raza y limpiar las fotos
 * @param {string} nuevaRaza 
 */
function setRaza(nuevaRaza) {
    estado.raza = nuevaRaza;
    estado.fotos = []; // Reiniciamos el array al buscar una nueva raza
    console.log(`Estado actualizado: Buscando raza -> ${estado.raza}`);
}

/**
 * Función para agregar nuevas fotos al estado
 * @param {Array} nuevasFotos 
 */
function setFotos(nuevasFotos) {
    estado.fotos = [...nuevasFotos];
    console.log(`Estado actualizado: Se cargaron ${estado.fotos.length} fotos.`);
}

// Ejemplo de uso:
// setRaza('Labrador');
// setFotos(['foto1.jpg', 'foto2.jpg']);
// console.log(estado);