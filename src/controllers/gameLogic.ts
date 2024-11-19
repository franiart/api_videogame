import { getRandomElement } from "../helpers/randomHelper";
import { EVENTS } from "../config/constants";
import { Character } from "../models/character";
import { Mission } from "../models/mission";
import { triggerRandomEvent } from "../services/eventService";
import { SCENARIOS } from "../config/constants";

/**
 * CREACIÓN DE UN ESCENARIO ALEATORIO CON UN PERSONAJE Y UNA MISIÓN
 * @param characterName NOMBRE DEL PERSONAJE
 * @param mission MISIÓN ASIGNADA
 */
async function playScenario(character: Character, mission: Mission): Promise<void> {
  // SELECCIÓN DE ESCENARIO ALEATORIO
  const scenario = getRandomElement(SCENARIOS);
  console.log(`🌍 ${character.name} entra a ${scenario.name}`);
  console.log(`📜 Efecto del escenario: ${scenario.effect}`);

  // EVENTO ALEATORIO DENTRO DEL ESCENARIO
  await triggerRandomEvent(character);

  // RESULTADO FINAL
  if (character.level >= scenario.dangerLevel) {
    character.gainExperience(mission.reward);
    console.log(`🎉 Misión completada! ${character.name} ganó ${mission.reward} de experiencia.`);
  } else {
    console.log(`☠️ ${character.name} no estaba preparado para este desafío.`);
  }
}

export { playScenario };