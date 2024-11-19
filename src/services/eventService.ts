import { Character } from '../models/character'

/**
 * EVENTO ALEATORIO DEL JUEGO
 * @param character PERSONAJE AFECTADO
 */
async function triggerRandomEvent(character: Character): Promise<void> {
    const events = [
        "Encuentro sorpresa",
        "Recompensa oculta",
        "Ataque enemigo",
        "Ayuda inesperada",
        "Maleficio temporal"
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    console.log(`🎲 Evento aleatorio: ${randomEvent}`);

    switch (randomEvent) {
        case "Encuentro sorpresa":
            character.gainExperience(50);
            console.log(`${character.name} gana 50 de experiencia.`);
            break;

        case "Recompensa oculta":
            const rewardItem = "Elixir de Vida";
            character.inventory.push(rewardItem);
            console.log(`${character.name} encuentra un ${rewardItem}.`);
            break;

        case "Ataque enemigo":
            character.health -= 30;
            if (character.health > 0) {
                console.log(`${character.name} sobrevive con ${character.health} de vida.`);
            } else {
                console.log(`${character.name} ha sido derrotado.`);
            }
            break;

        case "Ayuda inesperada":
            character.health += 20;
            console.log(`${character.name} recibe ayuda y recupera 20 de vida.`);
            break;

        case "Maleficio temporal":
            character.health -= 10;
            console.log(`${character.name} sufre un maleficio y pierde 10 de vida.`);
            break;

        default:
            console.log("El evento no afectó al personaje.");
        }
}

export { triggerRandomEvent };
