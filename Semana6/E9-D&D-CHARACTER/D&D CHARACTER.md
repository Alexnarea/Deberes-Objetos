# D&D CHARACTER

## EJERCICIO D&D CHARACTER 
---

1. **Definición de la clase y atributos**
    `export class DnDCharacter {private abilities: { [key: string]: number };`
    - Se define una clase llamada `DnDCharacter`.
    - `abilities` es un objeto privado que almacena los valores de las habilidades del personaje.

2. **Constructor**:    
    `constructor() {this.abilities = this.generateAbilities(); }`
    - El constructor inicializa las habilidades del personaje llamando al método `generateAbilities`.
    
3. **Método estático `generateAbilityScore`**:
    `public static generateAbilityScore(): number {     
    `const diceCount: number = 4;     
    `const diceSides: number = 6;      
    `let total: number = 0;     
    `let minDiceValue: number = diceSides + 1;      
    `for (let j = 0; j < diceCount; j++) {         
    `const roll: number = Math.floor(Math.random() * diceSides) + 1;        
     `total += roll;        
       `if (roll < minDiceValue) {             
       `minDiceValue = roll;         }     }      
       `total -= minDiceValue;     return total; }`
    
    - Este método genera una puntuación de habilidad tirando cuatro dados de seis caras.
    - Suma los valores de los dados y descarta el valor más bajo.
    - Devuelve el total de los tres dados más altos.
    
4. **Método privado `generateAbilities`**:
    
    `private generateAbilities(): { [key: string]: number } {     
    `const abilities: { [key: string]: number } = {};     
    `const abilityNames: string[] = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];      
    `for (const ability of abilityNames) {         abilities[ability] = DnDCharacter.generateAbilityScore();     }      
    `return abilities; }`
    
    - Este método genera las puntuaciones de las seis habilidades del personaje (`strength`, `dexterity`, `constitution`, `intelligence`, `wisdom`, `charisma`).
    - Utiliza el método `generateAbilityScore` para asignar una puntuación a cada habilidad.
    - Devuelve un objeto con las habilidades y sus valores.
    
5. **Método estático `getModifierFor`**:
    
    `public static getModifierFor(abilityValue: number): number {     
    `return Math.floor((abilityValue - 10) / 2); }`
    
    - Este método calcula el modificador de una habilidad basada en su puntuación.
    - Aplica la fórmula estándar de D&D: `(abilityValue - 10) / 2`.

6. **Propiedad `hitpoints`**:
    
    `public get hitpoints(): number {     
    `return 10 + DnDCharacter.getModifierFor(this.abilities.constitution); }`
    
    - Calcula los puntos de golpe del personaje.
    - Suma 10 al modificador de la `constitution`.
    
7. **Getters para habilidades**:
    
    `public get strength(): number {     
    `return this.abilities.strength; }  
    `public get dexterity(): number {     
    `return this.abilities.dexterity; }  
    `public get constitution(): number {     
    `return this.abilities.constitution; }  
    `public get intelligence(): number {     
    `return this.abilities.intelligence; }  
    `public get wisdom(): number {     
    `return this.abilities.wisdom; }  
    `public get charisma(): number {     
    `return this.abilities.charisma; }`
    
    - Define métodos getter para cada una de las habilidades.
    - Estos métodos permiten acceder a las puntuaciones de las habilidades individuales del personaje.

https://youtu.be/NlLHHaFqe_o
