// SUBCLASE CONEJO NEGRO CAZADOR
import { Character } from "./character";
class blackHunterRabbit extends Character {
    agility: number;

    constructor(name: string, health: number = 120) {
        super(name, health);
        this.agility = 25;
        this.skills = ['speed', 'stealth'];
        this.weakness = ['reduced agility in wet terrain'];
    }

    /**
    * PIERCING SHOT: DISPARA UN PROYECTIL QUE IGNORA LA ARMADURA ENEMIGA
    */
    piercingShot(): void {
        console.log(`${this.name} dispara un proyectil que ignora la armadura del enemigo.`);
    }

    /**
    * QUICK ESCAPE: AUMENTA SU EVASIÓN DURANTE 1 TURNO Y RECUPERA UN POCO DE SALUD
    */
    quickEscape(): void {
        console.log(`${this.name} evade un ataque y recupera salud.`);
    }
}

export {blackHunterRabbit}