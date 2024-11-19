// SUBCLASE CONEJO NEGRO CAZADOR
import { Character } from "./character";
class blackHunterRabbit extends Character {
    agility: number;

    constructor(name: string, health: number = 120, skills: string[], weakness: string[]) {
        super(name, health, skills);
        this.agility = 25;
        this.skills = [];
        this.weakness = [];
    }

    /**
     * ATAQUE CON BONUS DE AGILIDAD
     */
    quickAttack(): void {
        console.log(`${this.name} realiza un ataque rápido con bonus de ${this.agility}!`);
    }
}

export {blackHunterRabbit}