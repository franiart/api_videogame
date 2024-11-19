// SUBCLASE HECHICERO OSCURO
import { Character } from "./character";
class darkWizard extends Character {
    magicPower: number;
    mana: number;

    constructor(name: string, health: number = 80, skills: string[]) {
        super(name, health, skills);
        this.magicPower = 30;
        this.mana = 100;
        this.skills = ['night vision', 'levitation', 'invocation'];
    }

    /**
     * HECHIZO PODEROSO SI POSEE SUFICIENTE MANÁ
     */
    castSpell(): void {
        if (this.mana >= 20) {
            this.mana -= 20;
            console.log(`${this.name} lanza un hechizo poderoso.`);
        } else {
            console.log(`${this.name} no tiene suficiente maná.`);
        }
    }
}

export {darkWizard}