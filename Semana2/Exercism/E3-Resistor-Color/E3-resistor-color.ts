export const colorCode = (color: string): number => {
    switch (color){
      case "black":
        return 0;
       case "browm":
        return 1;
       case "red":
        return 2;
       case "orange":
        return 3;
       case "yellow":
        return 4;
       case "green":
        return 5;
       case "blue":
        return 6;
       case "violet":
        return 7;
       case "grey":
        return 8;
       case "white":
        return 9;
      default:
        throw new Error('color no valido')
    }
  };
  
  export const COLORS: string[]=[
    "black",
    "brown",
    "red",
    "rojo",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white" 
  ];
  console.log(colorCode("orange"))