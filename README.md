# API para un Videojuego
Desafío integrador del módulo 4. Este proyecto tiene como objetivo integrar
todos los conocimientos adquiridos hasta ahora en un solo trabajo práctico, creando una API para
gestionar personajes y misiones en un videojuego.

## Tecnologías
- TypeScript.
- Programación Orientada a Objetos (POO).
- Programación asíncrona.
- Versionado de código con Git y GitHub para desarrollar
una base sólida en el backend.

## Objetivos del proyecto
- Configurar y versionar proyectos con Git y GitHub.
- Aplicar POO en TypeScript.
- Crear y gestionar personajes y misiones en un juego.
- Usar programación asíncrona para simular eventos de juego.

---------------------------------------------------------------------------------------------------

# **Monstruópolis: La Aventura de las Almas Perdidas**

## **Descripción**
**Monstruópolis**, es un emocionante juego backend desarrollado en **Node.js** y **TypeScript**, donde lideras personajes únicos a través de escenarios llenos de desafíos, eventos aleatorios y misiones peligrosas. 

Tu objetivo es desarrollar tus personajes, completar misiones y sobrevivir a los eventos inesperados mientras exploras un mundo místico lleno de peligros y recompensas.

---

## **Características Principales**

1. **Personajes**: 
   - Cada personaje tiene habilidades, debilidades y aspectos especiales.
2. **Escenarios Aleatorios**:
   - Los personajes enfrentan desafíos en ambientes con efectos únicos.
3. **Eventos Dinámicos**:
   - Encuentros sorpresa, maleficios, ayudas inesperadas, entre otros.
4. **Progresión del Juego**:
   - Completa misiones para ganar experiencia, mejorar habilidades y subir de nivel.
5. **Mecánicas de Estrategia**:
   - Selecciona cuidadosamente a tus personajes para enfrentar escenarios y eventos.

---

## **Requisitos Previos**

1. **Node.js** y **npm** instalados.
2. Conocimientos básicos de TypeScript y Git.

---

## **Instalación**
1. Clona el repositorio:
   git clone https://github.com/franiart/api_videogame.git
   
   cd api_videogame

2. Instala las dependencias:
   
   npm install

3. Compila y ejecuta el proyecto:
   
   npm start

---

## **Cómo Jugar**

### *Crear Personajes:*
Usa createCharacter para generar personajes, como spectralWarrior, darkWizard, blackHunterRabbit y darkCatMonster.

### *Asignar Misiones:*
Genera misiones con diferentes niveles de dificultad y recompensas.

### *Explorar Escenarios:*
Los escenarios se seleccionan aleatoriamente, y cada uno tiene efectos especiales que afectan el desempeño de los personajes.

### *Superar Eventos Aleatorios:*
Durante las misiones, pueden ocurrir eventos inesperados que impactarán a tus personajes.

---

## Personajes Disponibles
1. spectralWarrior (Morrogallo)
   
**Habilidades:**
- Ataque Especial: Realiza un golpe poderoso.

**Debilidades:**
- Lento contra enemigos ágiles.

1. darkWizard (Perrijime)
   
**Habilidades:**
- Lanza Hechizos: Usa maná para infligir daño mágico.
  
**Debilidades:**
- Poca defensa física.

1. darkCatMonster (Yami)

**Habilidades:**
- Shadow Pounce: Salta hacia el enemigo causando daño crítico.
- Eclipse Veil: Reduce el daño recibido durante 2 turnos.

**Debilidades:**
- Vulnerable a ataques de luz y al océano.

1. BlackHunterRabbit (Dredgen)

**Habilidades:**
- Piercing Shot: Dispara un proyectil que ignora armadura.
- Quick Escape: Aumenta evasión y recupera salud.

**Debilidades:**
- Reducción de agilidad en terrenos húmedos.

---

## Escenarios
1. El Bosque de los Recuerdos
- Nivel de Peligro: 3
- Efecto: Reducción de precisión en ataques mágicos.
2. Montaña de Cristal
- Nivel de Peligro: 5
- Efecto: Incremento del daño físico.
3. Ruinas del Tiempo
- Nivel de Peligro: 4
- Efecto: Mejora los hechizos de curación.
4. Cementerio de las Almas
- Nivel de Peligro: 6
- Efecto: Pérdida gradual de salud para personajes de bajo nivel.

---

## Eventos Aleatorios

### Encuentro Sorpresa:
Gana experiencia extra.

### Recompensa Oculta:
Encuentra un objeto valioso.

### Ataque Enemigo:
Pierdes salud significativa.

### Ayuda Inesperada:
Recuperas salud.

### Maleficio Temporal:
Pierdes salud durante varios turnos.

### Lluvia de Bendiciones:
Aumenta todas las estadísticas temporalmente.

---

## Código de ejemplo
```
import { createCharacter, listCharacters } from "./controllers/characterController";
import { Mission, MissionType } from "./models/Mission";
import { playScenario } from "./controllers/gameLogic";

// Crear personajes
createCharacter("spectralWarrior", "Morrogallo");

// Crear misión
const mission = new Mission("Derrotar al Guardián de las Ruinas", 5, 300, MissionType.Main);

// Ejecutar escenario
playScenario(listCharacters()[0], mission);
```