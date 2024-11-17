<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
import { createCharacter, listCharacters } from "./controllers/characterController";
import { Mission, MissionType } from "./models/mission";
import { triggerRandomEvent } from "./services/eventService";

// Bienvenida al juego
console.log("👾 ¡Bienvenido a Monstruópolis! 👾");

// Crear personajes
<<<<<<< Updated upstream
const warrior = createCharacter("spectralWarrior", "Tharok", [], 50);
const mage = createCharacter("darkWizard", "Lyra", [], 50);

// Crear misiones
const mission1 = new Mission("Explorar el Bosque Olvidado", 1, 100, MissionType.Side);
const mission2 = new Mission("Defender la Torre de Cristal", 2, 200, MissionType.Main);
=======
const spectralWarrior = createCharacter("spectralWarrior", "Morrogallo", [], 50);
const darkWizard = createCharacter("darkWizard", "Perrijime", [], 50);

// Crear misiones
const mission1 = new Mission("Explorar el Bosque de los Recuerdos", 1, 100, MissionType.Side);
const mission2 = new Mission("Explorar el Cementerio de Almas", 2, 200, MissionType.Main);
>>>>>>> Stashed changes

// Mostrar personajes actuales
console.log("🎭 Personajes creados:");
console.table(listCharacters());

// Asignar misiones
<<<<<<< Updated upstream
console.log(`📜 Asignando misión "${mission1.description}" a ${warrior.name}...`);
warrior.inventory.push(mission1.description);

console.log(`📜 Asignando misión "${mission2.description}" a ${mage.name}...`);
mage.inventory.push(mission2.description);
=======
console.log(`📜 Asignando misión "${mission1.description}" a ${spectralWarrior.name}...`);
spectralWarrior.inventory.push(mission1.description);

console.log(`📜 Asignando misión "${mission2.description}" a ${darkWizard.name}...`);
darkWizard.inventory.push(mission2.description);
>>>>>>> Stashed changes

// Simulación de eventos aleatorios
console.log("🎲 Simulando eventos aleatorios...");
Promise.all([
<<<<<<< Updated upstream
    triggerRandomEvent(warrior),
    triggerRandomEvent(mage),
=======
    triggerRandomEvent(spectralWarrior),
    triggerRandomEvent(darkWizard),
>>>>>>> Stashed changes
]).then(() => {
    console.log("🎮 Eventos finalizados.");

    // Mostrar resultados finales
    console.log("📦 Estado final de los personajes:");
    console.table(listCharacters());
    }).catch(err => {
    console.error("⚠️ Error durante los eventos:", err);
    });

// Fin del juego
<<<<<<< Updated upstream
console.log("👾 ¡Gracias por jugar a Monstruópolis! 👾");
=======
console.log("👾 ¡Gracias por jugar a Monstruópolis! 👾");
>>>>>>> Stashed changes
>>>>>>> Stashed changes
