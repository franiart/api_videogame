class Character {
    name: string;
    level: number;
    health: number;
    experience: number;
    skills: string[];
    inventory: string[];
    
    constructor(name: string, level: number, health: number, skills: string[]) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = 0;
        this.skills = skills;
        this.inventory = [];
    }

    getExperience(): number {
        return this.experience;
    }

    getInventory():String[] {
        return this.inventory;
    }

    setExperience(exp: number): void {
        this.experience = exp;
    }

    setInventory(inv: []): void {
        this.inventory = inv;
    }

}