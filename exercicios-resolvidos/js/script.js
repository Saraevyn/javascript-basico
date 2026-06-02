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

// compare dois valores usando == e ===//
let numero = 5;
let texto = "5";

console.log("eles tem o mesmo valor?");
console.log(numero == texto); 

console.log("eles são idênticos no valor e no tipo");
console.log(numero === texto);

// maior e menor//
let num1 = 15;
let num2 = 7;

if (num1 > num2) {
    console.log("m maior número é: " + num1);
} 

if (num2 < num1) {
    console.log("confirmando: " + num2 + " é menor que " + num1);
}

// nota do aluno// 
let nota = 8.5; 

console.log(nota >= 7 ? "aluno aprovado" : "aluno reprovado");

//preço//
let precoProduto = 45; 

if (precoProduto >= 10 && precoProduto <= 100) {
    console.log("o produto está na faixa de preço permitida (entre R$ 10 e R$ 100).");
} else {
    console.log("o produto está fora da faixa de preço.");
}

// acesso login e usuario//
let usuarioDigitado = "adaa"; 

if (usuarioDigitado === "admin" || usuarioDigitado === "root") {
    console.log("login aceito!");
} else {
    console.log("scesso negado: usuário inválido.");
}

// operador !//
let logado = false;

if (!logado) {
    console.log("você precisa fazer login para continuar.");
}

// cadastro idade usuario//
let idadeUsuario = 20;
let emailUsuario = "contato@email.com";

if (idadeUsuario > 18 && emailUsuario !== "") {
    console.log("cadastro válido com sucesso");
} else {
    console.log("erro  verifique a idade e emaol ");
}

let ehAssinante = false;
let totalCompra = 250;

if (ehAssinante || totalCompra > 200) {
    console.log("parabéns, você ganhou um desconto especial");
} else {
    console.log("desconto não aplicado.");
}

// imc //
let peso = 70; 
let altura = 1.75; 

let imc = peso / (altura * altura);
console.log("Seu IMC é:", imc.toFixed(2)); 

if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Classificação: Normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Classificação: Sobrepeso");
} else {
    console.log("Classificação: Obesidade");
}

// adivinhar numero 
let numeroSecreto = 42;
let palpiteDoUsuario = 30; 

if (palpiteDoUsuario === numeroSecreto) {
    console.log("vc acertou o número secreto! 🎉");
} else if (palpiteDoUsuario > numeroSecreto) {
    console.log("seu palpite é maior do que o número secreto.");
} else {
    console.log("seu palpite é menor do que o número secreto.");
}