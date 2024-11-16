// CLASE PARA MODELAR LOS ESCENARIOS
class Scenario {
    name: string;
    dangerLevel: number;

    constructor(name: string, dangerLevel: number) {
        this.name = name;
        this.dangerLevel = dangerLevel;
    }
}

export { Scenario };
