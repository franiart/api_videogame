import { Scenario, scenarios } from "../models/scenario";

/**
 * Lista todos los escenarios disponibles.
 */
function listScenarios(): Scenario[] {
    return scenarios;
}

/**
 * Selecciona un escenario aleatorio.
 */
function getRandomScenario(): Scenario {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    return scenarios[randomIndex];
}

export { listScenarios, getRandomScenario };
