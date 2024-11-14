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


}