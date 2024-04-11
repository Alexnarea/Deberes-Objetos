---

---
---
# Ejercicio Two Fer 
---
## Descripción del código
---

- `name?: string`: Es un parámetro opcional de la función que indica el nombre de la persona a compartir. Es de tipo cadena (`string`).

- `const nameRandom = name || "you";`: Esta línea asigna el valor de `name` a la variable `nameRandom`. Si `name` es falso (por ejemplo, `null`, `undefined` o una cadena vacía), se asignará el valor predeterminado "you" a `nameRandom`. 

- ``const message = `One for ${nameRandom}, one for me.`;``:Se construye el mensaje que será devuelto por la función. 

- `console.log(message);`:Imprime el mensaje en la consola.

- `return message;`: Finalmente, la función devuelve el mensaje construido.
    
El código genera un mensaje que incluye el nombre proporcionado (o "you" si no se proporciona ningún nombre) y luego imprime este mensaje en la consola.