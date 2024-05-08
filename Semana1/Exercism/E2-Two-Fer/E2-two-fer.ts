export function twoFer(name?: string): string {
    const recipient = name || "you";
    const message = `One for ${recipient}, one for me.`;
    console.log(message); // Agregamos console.log para imprimir el mensaje
    return message;
  }
  
  // Ejemplo
  twoFer();
  