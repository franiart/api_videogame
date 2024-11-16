import { Character } from "./character";
// SUBCLASE GUERRERO ESPECTRAL
class spectralWarrior extends Character {
    attack: number;
    defense: number;

    constructor(name: string, health: number = 150, skills: string[]) {
        super(name, health, skills);
        this.attack = 20;
        this.defense = 15;
        this.skills = ['spectral impact', 'magic shield']
    }

    /**
     * ATAQUE ESPECIAL
     */
    specialAttack(): void {
        console.log(`${this.name} realiza un ataque devastador!`);
    }
}

export {spectralWarrior}