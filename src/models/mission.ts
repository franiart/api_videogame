// ENUM PARA TIPOS DE MISIONES
enum MissionType {
    Main,
    Side,
    Event,
}

// CLASE PARA MODELAR MISIONES
class Mission {
    description: string;
    difficulty: number;
    reward: number;
    type: MissionType;

    constructor(description: string, difficulty: number, reward: number, type: MissionType) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.type = type;
    }
}

export {Mission, MissionType};