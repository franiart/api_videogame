// CLASE PARA MODELAR LOS ESCENARIOS
class Scenario {
    name: string;
    dangerLevel: number;
    effect: string;

    constructor(name: string, dangerLevel: number, effect: string) {
        this.name = name;
        this.dangerLevel = dangerLevel;
        this.effect = effect;
    }

    /**
     * DESCRIPCIÓN DEL ESCENARIO
     */
    describe(): void {
        console.log(`${this.name} tiene un nivel de peligro ${this.dangerLevel} y efecto: ${this.effect}.`);
    }
}

const scenarios = [
    new Scenario("El Bosque de los Recuerdos", 3, "Reducción de visibilidad, los ataques mágicos tienen menor precisión."),
    new Scenario("Montaña de Cristal", 5, "Incremento de daño físico por la altitud."),
    new Scenario("Ruinas del Tiempo", 4, "Los hechizos de curación son más efectivos."),
    new Scenario("Cementerio de las Almas", 6, "Los personajes con nivel bajo pierden salud progresivamente."),
];

export { Scenario, scenarios };

