export enum ResistorValues {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9
  }
  
  type Color = keyof typeof ResistorValues;
  
  export function decodedResistorValue([firstColor, secondColor, thirdColor]: Color[]): string {
    const value = (ResistorValues[firstColor] * 10 + ResistorValues[secondColor]) * Math.pow(10, ResistorValues[thirdColor]);
  
    if (value >= 1e9) {
      return `${value / 1e9} gigaohms`;
    } else if (value >= 1e6) {
      return `${value / 1e6} megaohms`;
    } else if (value >= 1e3) {
      return `${value / 1e3} kiloohms`;
    } else {
      return `${value} ohms`;
    }
  }
  