# Ejercicio Resistor Color Duo

### Descripción del código

- `ResistorValues:` Este es un enumerador que asigna un valor numérico a cada color utilizado en las bandas de las resistencias. Los colores estándar están mapeados a números del 0 al 9.
- `type Color = keyof typeof ResistorValues;:` Esto define un nuevo tipo llamado Color, que es la unión de las claves del enumerador ResistorValues.
- `decodedValue:` Esta función toma un array de dos colores (representados como claves del enumerador) y devuelve el valor de la resistencia basado en la codificación estándar. El valor se calcula concatenando los valores numéricos correspondientes a los colores de las bandas.