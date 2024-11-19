import { listCharacters } from "./characterController";
import { getRandomScenario } from "./scenarioController";
import { Mission } from "../models/mission";
import { triggerRandomEvent } from "../services/eventService";

/**
 * CREACIÓN DE UN ESCENARIO ALEATORIO CON UN PERSONAJE Y UNA MISIÓN
 * @param characterName NOMBRE DEL PERSONAJE
 * @param mission MISIÓN ASIGNADA
 */
async function playRandomScenario(characterName: string, mission: Mission): Promise<void> {
    const character = listCharacters().find(c => c.name === characterName);

    if (!character) {
        console.log("⚠️ Personaje no encontrado.");
        return;
    }

    const scenario = getRandomScenario();
    console.log(`🌍 ${character.name} entra al escenario: ${scenario.name}`);
    scenario.describe();
    console.log(`📜 Misión asignada: ${mission.description}`);

  // EVENTO ALEATORIO DENTRO DEL ESCENARIO
    await triggerRandomEvent(character);

  // RESULTADO FINAL
    if (character.level >= scenario.dangerLevel) {
        character.gainExperience(mission.reward);
        console.log(`🎉 ¡Misión completada! ${character.name} ganó ${mission.reward} de experiencia.`);
    } else {
        console.log(`☠️ ${character.name} no está preparado para ${scenario.name}.`);
    }
}

export { playRandomScenario };
