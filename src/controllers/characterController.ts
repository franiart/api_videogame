import { Character } from "../models/character";
import { darkWizard } from "../models/darkWizard";
import { spectralWarrior } from "../models/spectralWarrior";

const characters: Character[] = [];

/**
 * CREACIÓN DE UN PERSONAJE DEL TIPO ESPECIFICADO
 * @param type TIPO DE PERSONAJE (spectralWarrior o darkWizard).
 * @param name NOMBRE DEL PERSONAJE
 * @param skills HABILIDADES DEL PERSONAJE
 * @returns EL PERSONAJE CREADO
 */
function createCharacter(type: string, name: string, skills: [], health: number): Character {
    let character: Character;

switch (type) {
    case "spectralWarrior":
        character = new spectralWarrior(name, health, skills);
        break;
    case "darkWizard":
        character = new darkWizard(name, health, skills);
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
