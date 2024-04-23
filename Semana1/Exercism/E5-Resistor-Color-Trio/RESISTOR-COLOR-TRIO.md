# Ejercicio Resistor Color Trio

### Descripción del código

- `ResistorValues:` Este es un enumerador que asigna un valor numérico a cada color utilizado en las bandas de las resistencias. Cada color está representado como una clave y su valor correspondiente es un número del 0 al 9.
- `type Color = keyof typeof ResistorValues;:` Se define un nuevo tipo llamado Color, que es la unión de las claves del enumerador ResistorValues. Esto garantiza que los argumentos de la función decodedResistorValue sean válidos.
- `decodedResistorValue:` Esta función toma un array de tres colores como argumento y devuelve el valor de la resistencia en forma de cadena de texto. Los colores se representan como claves del enumerador ResistorValues.