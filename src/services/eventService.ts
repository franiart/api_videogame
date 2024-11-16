import { Character } from "../models/character";

/**
 * EVENTO ALEATORIO DEL JUEGO
 * @param character PERSONAJE AFECTADO
 */
async function triggerRandomEvent(character: Character): Promise<void> {
    const events = ["Encuentro sorpresa", "Recompensa oculta", "Ataque enemigo"];
    const randomEvent = events[Math.floor(Math.random() * events.length)];

    console.log(`Evento: ${randomEvent}`);

    switch (randomEvent) {
        case "Encuentro sorpresa":
        character.gainExperience(50);
        break;
        
        case "Recompensa oculta":
        character.inventory.push("Objeto especial");
        break;
        
        case "Ataque enemigo":
        character.health -= 20;
        
        if (character.health <= 0) {
            console.log(`${character.name} ha caído.`);
        }
        break;
    }
}

export { triggerRandomEvent };