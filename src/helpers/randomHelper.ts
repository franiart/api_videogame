/**
 * FUNCIÓN PARA DEVOLVER UN ELEMENTO DE LA LISTA
 * @param list LISTA DE LOS ELEMENTOS
 */
export function getRandomElement<element>(list: element[]): element {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}
