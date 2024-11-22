// CLASE BASE PARA TODOS LOS PERSONAJES
class Character {
    name: string;
    level: number;
    health: number;
    experience: number;
    skills: string[];
    inventory: string[];
    weakness: string[];
    
    constructor(name: string, health: number, skills: string[], weakness: string[]) {
        this.name = name;
        this.level = 1;
        this.health = health;
        this.experience = 0;
        this.skills = skills;
        this.inventory = [];
        this.weakness = weakness
    }

    /**
     * EL PERSONAJE GANA EXPERIENCIA Y CUANDO ALCANZA EL NIVEL MÁXIMO, SUBE DE LVL AUTOMÁTICAMENTE
     * @param amount CANTIDAD DE EXPERIENCIA GANADA
     */

    gainExperience(amount: number): void {
        this.experience += amount;
        while (this.experience >= this.getNextLevelThreshold()) {
            this.levelUp();
        }
    }

    /**
     * SUBIR DE LVL INCREMENTA ATRIBUTOS Y AJUSTA LA EXPERIENCIA
     */
    private levelUp(): void {
        this.level += 1;
        this.health += 20;
        console.log(`${this.name} ha subido al nivel ${this.level}!`);
    }
    
    /**
     * 
     * @returns CÁLCULO DEL MÁXIMO NECESARIO PARA PASAR AL SIGUIENTE LVL
     */
    private getNextLevelThreshold(): number {
        return this.level * 100;
    }
}

export {Character}