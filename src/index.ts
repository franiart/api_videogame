import { createCharacter, listCharacters } from "./controllers/characterController";
import { Mission, MissionType } from "./models/mission";
import { playRandomScenario } from "./controllers/gameLogic";

console.log("👾 ¡Bienvenido a Monstruópolis! 👾");

// Crear personajes
createCharacter("spectralWarrior", "Morrogallo", [], 100);
createCharacter("darkWizard", "Perrijime", [], 100);
createCharacter("blackHunterRabbit", "Dredgen", [], 100);
createCharacter("darkCatMonster", "Yami", [], 100);

// Listar personajes
console.log("🎭 Personajes creados:");
console.table(listCharacters());

// Crear misiones
const mission1 = new Mission("Derrotar al Guardián de las Ruinas", 5, 300, MissionType.Main);
const mission2 = new Mission("Explorar la Cueva de los Ecos", 3, 200, MissionType.Side);

// Jugar escenarios aleatorios
console.log("🎲 Simulando escenarios aleatorios...");
Promise.all([
    playRandomScenario("Morrogallo", mission1),
    playRandomScenario("Perrijime", mission2),
    ]).then(() => {
    console.log("🎮 ¡Escenarios completados!");
    console.table(listCharacters());
    }).catch(err => {
    console.error("⚠️ Error durante los escenarios:", err);
});

// Fin del juego
console.log("👾 ¡Gracias por jugar a Monstruópolis! 👾");
