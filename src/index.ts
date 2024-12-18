import { createCharacter, listCharacters } from "./controllers/characterController";
import { Mission, MissionType } from "./models/mission";
import { playScenario } from "./controllers/gameLogic";

console.log("👾 ¡Bienvenido a Monstruópolis! 👾");

// Crear personajes
createCharacter("spectralWarrior", "Morrogallo", 100);
createCharacter("darkWizard", "Perrijime", 90);
createCharacter("blackHunterRabbit", "Dredgen", 50);
createCharacter("darkCatMonster", "Yami", 80);

// Crear misión
const mission1 = new Mission("Derrotar al Guardián de las Ruinas", 5, 300, MissionType.Main);
const mission2 = new Mission("Explorar la Cueva de los Ecos", 3, 200, MissionType.Side);

// Ejecutar escenario
console.log("🎲 Simulando escenarios aleatorios...");
Promise.all([
    playScenario(listCharacters()[0], mission1),
    playScenario(listCharacters()[1], mission2),
    playScenario(listCharacters()[2], mission1),
    playScenario(listCharacters()[3], mission2),
    ]).then(() => {
    console.log("🎮 ¡Escenarios completados!");
    console.table(listCharacters());
    }).catch(err => {
    console.error("⚠️ Error durante los escenarios:", err);
});

// Fin del juego
console.log("👾 ¡Gracias por jugar a Monstruópolis! 👾");

