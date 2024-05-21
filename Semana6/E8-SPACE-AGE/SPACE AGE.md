# SPACE AGE

## EJERCICIO SPACE AGE
---
**export function age(planet: unknown, seconds: unknown): unknown **
1. Define una función llamada `age` que recibe dos parámetros `planet` y `seconds` de tipo `unknown`. La función es exportada para que pueda ser utilizada en otros módulos.
**if (typeof planet !== 'string' || typeof seconds !== 'number')**
2. Comprueba si `planet` es una cadena y `seconds` es un número. Si no lo son, ejecuta el bloque de código dentro de la condición.
**throw new Error('Los argumentos deben ser una cadena para el planeta y un número para los segundos.')**
3. Lanza un error si los tipos de los argumentos no son correctos.
**const tiempoTierraSegundos: number = 31557600;**
4. Declara una constante `tiempoTierraSegundos` que almacena el número de segundos en un año terrestre (31,557,600 segundos).
**switch ((planet as string).toLowerCase())**
5. Convierte `planet` a minúsculas para evitar problemas de mayúsculas/minúsculas y ejecuta una declaración `switch` para determinar el cálculo de la edad dependiendo del planeta proporcionado.
**case 'mercury':**
        **return roundToTwo((seconds as number) / (0.2408467 * tiempoTierraSegundos));**
6. Si el planeta es "mercury", calcula la edad dividiendo los segundos por el tiempo correspondiente a un año en Mercurio (0.2408467 años terrestres) y redondea el resultado a dos decimales utilizando la función `roundToTwo`.
**case 'earth':
        return roundToTwo((seconds as number) / tiempoTierraSegundos);**
7. Si el planeta es "mars", calcula la edad dividiendo los segundos por el tiempo correspondiente a un año en Marte (1.8808158 años terrestres) y redondea el resultado a dos decimales utilizando la función.
**function roundToTwo(num: number): number {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}**
8. Define una función `roundToTwo` que redondea un número a dos decimales. Añade `Number.EPSILON` para evitar problemas de precisión con números flotantes antes de redondear el resultado.

https://youtu.be/QPCzDAMgzN8




