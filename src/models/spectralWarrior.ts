import { Character } from "./character";
// SUBCLASE GUERRERO ESPECTRAL
class spectralWarrior extends Character {
    attack: number;
    defense: number;

    constructor(name: string, health: number = 150) {
        super(name, health);
        this.attack = 20;
        this.defense = 15;
        this.skills = ['spectral impact', 'magic shield']
        this.weakness = ['slow']
    }

    /**
     * ATAQUE ESPECIAL
     */
    specialAttack(): void {
        console.log(`${this.name} realiza un ataque devastador!`);
    }
}

export {spectralWarrior}