import { blackHunterRabbit } from "../models/blackHunterRabbit";
import { Character } from "../models/character";
import { darkCatMonster } from "../models/darkCatMonster";
import { darkWizard } from "../models/darkWizard";
import { spectralWarrior } from "../models/spectralWarrior";

const characters: Character[] = [];

/**
 * CREACIÓN DE UN PERSONAJE DEL TIPO ESPECIFICADO
 * @param type TIPO DE PERSONAJE (spectralWarrior o darkWizard).
 * @param name NOMBRE DEL PERSONAJE
 * @param skills HABILIDADES DEL PERSONAJE
 * @param weakness DEBILIDADES DEL PERSONAJE
 * @returns EL PERSONAJE CREADO
 */
function createCharacter(type: string, name: string, health: number): Character {
    let character: Character;

switch (type) {
    case "spectralWarrior":
        character = new spectralWarrior(name, health);
        break;
    case "darkWizard":
        character = new darkWizard(name, health);
        break;
    case "darkCatMonster":
        character = new darkCatMonster(name, health);
        break;
    case "blackHunterRabbit":
        character = new blackHunterRabbit(name, health);
        break;
    default:
        throw new Error("Tipo de personaje no válido.");
}

    characters.push(character);
    console.log(`${name} ha sido creado como un ${type}.`);
    return character;
}

/**
 * LISTA DE TODOS LOS PERSONAJES EXISTENTES
 */
function listCharacters(): Character[] {
    return characters;
}

export { createCharacter, listCharacters };