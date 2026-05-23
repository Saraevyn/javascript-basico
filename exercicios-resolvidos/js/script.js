// exercicios aula 3
let n1 = 8;
let n2 = 7;
let n3 = 9;
let mediaNotas = (n1 + n2 + n3) / 3;
console.log("média das notas:", mediaNotas);

let numero1 = 7; 
let resto = numero1 % 2;
let resultado = resto === 0;
console.log("é par?", resultado);

let maiorIdade = true; 
let temIngresso = true;
let podeEntrar = maiorIdade && temIngresso;
console.log("pode entrar?", podeEntrar);

let nome = "";
let usuario = nome || "visitante";
console.log("usuário:", usuario);

let temperatura = 30; 
let clima = temperatura > 25 ? "quente" : "frio";
console.log("clima:", clima);

let semParenteses = 5 + 3 * 2; 
let comParenteses = (5 + 3) * 2; 
console.log("sem parênteses:", semParenteses, "com parênteses:", comParenteses);

// calculadora simples
let a = 10;
let b = 5;
console.log("soma:", a + b);
console.log("subtração:", a - b);
console.log("multiplicação:", a * b);
console.log("divisão:", a / b);

// resto da divisao 
let numero2 = 7;
console.log("é par?", numero2 % 2 === 0);

// potencia
let n = 3;
console.log("quadrado:", n ** 2);
console.log("cubo:", n ** 3);

// conversao de temperatura
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(`${celsius}°c = ${fahrenheit}°f`);

// media aritmetica
let nota1 = 8, nota2 = 7.5, nota3 = 9;
let mediaAritmetica = (nota1 + nota2 + nota3) / 3;
console.log("média aritmética:", mediaAritmetica.toFixed(2));

// calculo de troco
let preco = 75;
let pago = 100;
console.log("troco:", pago - preco);
