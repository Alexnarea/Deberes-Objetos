export class DnDCharacter {
    private abilities: { [key: string]: number };
  
    constructor() {
      this.abilities = this.generateAbilities();
    }
  
    public static generateAbilityScore(): number {
      const diceCount: number = 4;
      const diceSides: number = 6;
  
      let total: number = 0;
      let minDiceValue: number = diceSides + 1;
  
      for (let j = 0; j < diceCount; j++) {
        const roll: number = Math.floor(Math.random() * diceSides) + 1;
        total += roll;
  
        if (roll < minDiceValue) {
          minDiceValue = roll;
        }
      }
  
      total -= minDiceValue;
      return total;
    }
  
    private generateAbilities(): { [key: string]: number } {
      const abilities: { [key: string]: number } = {};
      const abilityNames: string[] = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
  
      for (const ability of abilityNames) {
        abilities[ability] = DnDCharacter.generateAbilityScore();
      }
  
      return abilities;
    }
  
    public static getModifierFor(abilityValue: number): number {
      return Math.floor((abilityValue - 10) / 2);
    }
  
    public get hitpoints(): number {
      return 10 + DnDCharacter.getModifierFor(this.abilities.constitution);
    }
  
    public get strength(): number {
      return this.abilities.strength;
    }
  
    public get dexterity(): number {
      return this.abilities.dexterity;
    }
  
    public get constitution(): number {
      return this.abilities.constitution;
    }
  
    public get intelligence(): number {
      return this.abilities.intelligence;
    }
  
    public get wisdom(): number {
      return this.abilities.wisdom;
    }
  
    public get charisma(): number {
      return this.abilities.charisma;
    }
  }
  