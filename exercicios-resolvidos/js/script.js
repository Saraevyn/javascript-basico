// 1 //
let numero1 = parseFloat(prompt("Digite o primeiro número: "));
let numero2 = parseFloat(prompt("Digite o segundo número: "));


if (numero1 > numero2) {
    console.log(`O maior número é: ${numero1}`);
} else if (numero2 > numero1) {
    console.log(`O maior número é: ${numero2}`);
} else {
    console.log("Os dois números são iguais!");
}

// 2//

let valor = parseFloat(prompt("Digite um número: "));

if (valor > 0) {
    console.log("O valor é POSITIVO.");
} else if (valor < 0) {
    console.log("O valor é NEGATIVO.");
} else {
    console.log("O valor é ZERO (neutro).");
}


