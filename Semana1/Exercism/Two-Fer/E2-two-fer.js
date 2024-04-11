"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoFer = void 0;
function twoFer(name) {
    var recipient = name || "you";
    var message = "One for ".concat(recipient, ", one for me.");
    console.log(message); // Agregamos console.log para imprimir el mensaje
    return message;
}
exports.twoFer = twoFer;
// Ejemplo
twoFer("alex");
