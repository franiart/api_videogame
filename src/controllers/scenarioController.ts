import { Scenario, scenarios } from "../models/scenario";

/**
 * LISTADO DE TODOS LOS ESCENARIOS
 */
function listScenarios(): Scenario[] {
    return scenarios;
}

/**
 * SELECCIÓN DE ESCENARIO ALEATORIO
 */
function getRandomScenario(): Scenario {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
}

export { listScenarios, getRandomScenario };
