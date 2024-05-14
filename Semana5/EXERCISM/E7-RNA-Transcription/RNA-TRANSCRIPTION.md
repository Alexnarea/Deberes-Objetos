# Ejercicio RNA Transcription

### Descripción del código

- `toRna:` Esta función toma una cadena de ADN **(cadenaADN)** como entrada y devuelve su equivalente en ARN.
- Se inicializa una variable **complementoARN** que almacenará la cadena de ARN resultante.
- Se itera sobre cada nucleótido en la cadena de ADN utilizando un bucle **for...of**.
- Dentro del bucle, se utiliza una instrucción **switch** para determinar el complemento de cada nucleótido:
- Si el nucleótido es 'G', se agrega 'C' al complemento de ARN.
- Si el nucleótido es 'C', se agrega 'G' al complemento de ARN.
- Si el nucleótido es 'T', se agrega 'A' al complemento de ARN.
- Si el nucleótido es 'A', se agrega 'U' al complemento de ARN.
- En caso de que se encuentre un nucleótido diferente a los mencionados, se lanza un error indicando que la entrada de ADN es inválida.
- Finalmente, se devuelve la cadena de ARN resultante.

https://youtu.be/DRfvpBdQHPI