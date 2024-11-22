// SUBCLASE HECHICERO OSCURO
import { Character } from "./character";
class darkCatMonster extends Character {
    magicPower: number;
    mana: number;
    
    constructor(name: string, health: number = 80, skills: string[], weakness: string[]) {
        super(name, health, skills, weakness);
        this.magicPower = 30;
        this.mana = 100;
        this.skills = ['night vision', 'night silence', 'black magic']
        this.weakness = ['sea', 'loses effectiveness during daytime']
    }

    /**
    * SHADOW POUNCE: REALIZA UN SALTO VELOZ HACIA EL ENEMIGO CAUSANDO DAÑO CRÍTICO
    */
    shadowPounce(): void {
        console.log(`${this.name} realiza un salto de sombras causando daño crítico.`);
    }

    /**
    * Habilidad: Eclipse Veil.
    */
    eclipseVeil(): void {
        console.log(`${this.name} crea un escudo de sombras y reduce el daño recibido.`);
    }
}

export {darkCatMonster}