# Ejercicio Leap

### Descripción del código

- `isLeap:` Esta función toma un número entero **year** que representa el año que se quiere verificar y devuelve un valor booleano que indica si ese año es bisiesto **(true)** o no **(false)**.
- La condición `(year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)` verifica si el año es divisible por 4 y no es divisible por 100, o si es divisible por 400. Si se cumple alguna de estas condiciones, el año se considera bisiesto y la función devuelve true. De lo contrario, devuelve **false**

https://youtu.be/ckb7C6BwD5E
