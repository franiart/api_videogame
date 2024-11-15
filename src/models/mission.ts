enum MissionType {
    Main,
    Side,
    Event,
}

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