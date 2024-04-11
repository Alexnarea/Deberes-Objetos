### Ejercicio Resistor Color


-  `color: string`: Toma un parámetro **color** que es de tipo cadena (`string`). Representa el color del que se desea obtener el código numérico.
- `switch(color)`: Evalúa el valor del parámetro **color**.
- `case "black"`: Se verifica si el valor **color** es igual a **"black"**
- `return 0`: Si el valor **color** es **"black"**, la función en la que se encuentra este **switch** devolverá inmediatamente el valor **0** y se detendrá su ejecución. 
- `default: throw new Error('color no valido')`: Si el color no coincide con ninguno de los casos definidos, se lanza un error indicado que el color no es valido.
- `export const COLORS: string[]`: Se define una matriz llamada **COLORS** 
- `["black","brown","red",orange",yellow","green","blue","violet","grey","white"];`: Cada elemento de la matriz es una cadena que representa un color. Los colores están en el mismo orden que los casos en la función **colorCode**.
- `console.log(colorCode("orange"))`: Se llama a la función **colorCode** con cualquier argumento.


Se puede comprender como la función **colorCode** asigna códigos numéricos a los colores y como la matriz **COLORS** proporciona una lista ordenada de colores