export function twoFer(name?: string): string {
    const recipient = name || "you";
    const message = `One for ${recipient}, one for me.`;
    console.log(message);
    return message;
  }
  
twoFer() //one for
twoFer("Pepe") //you