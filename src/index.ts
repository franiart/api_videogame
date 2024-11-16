import { createCharacter, listCharacters } from "./controllers/characterController";
import { Mission, MissionType } from "./models/mission";
import { triggerRandomEvent } from "./services/eventService";

// Bienvenida al juego
console.log("👾 ¡Bienvenido a Monstruópolis! 👾");

// Crear personajes
const warrior = createCharacter("spectralWarrior", "Tharok", [], 50);
const mage = createCharacter("darkWizard", "Lyra", [], 50);

// Crear misiones
const mission1 = new Mission("Explorar el Bosque Olvidado", 1, 100, MissionType.Side);
const mission2 = new Mission("Defender la Torre de Cristal", 2, 200, MissionType.Main);

// Mostrar personajes actuales
console.log("🎭 Personajes creados:");
console.table(listCharacters());

// Asignar misiones
console.log(`📜 Asignando misión "${mission1.description}" a ${warrior.name}...`);
warrior.inventory.push(mission1.description);

console.log(`📜 Asignando misión "${mission2.description}" a ${mage.name}...`);
mage.inventory.push(mission2.description);

// Simulación de eventos aleatorios
console.log("🎲 Simulando eventos aleatorios...");
Promise.all([
    triggerRandomEvent(warrior),
    triggerRandomEvent(mage),
]).then(() => {
    console.log("🎮 Eventos finalizados.");

    // Mostrar resultados finales
    console.log("📦 Estado final de los personajes:");
    console.table(listCharacters());
    }).catch(err => {
    console.error("⚠️ Error durante los eventos:", err);
    });

// Fin del juego
console.log("👾 ¡Gracias por jugar a Monstruópolis! 👾");