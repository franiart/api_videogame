class Character {
    name: string;
    level: number;
    health: number;
    experience: number;
    skills: string[];
    inventory: string[];
    
    constructor(name: string, level: number, health: number, experience: number, skills: string[], inventory: string[]) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience;
        this.skills = skills;
        this.inventory = inventory;
    }

    
}