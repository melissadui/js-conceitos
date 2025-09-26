// A ideia aqui é a gente tentar entender a diferença entre Let, Const e Var diretamente no código.
// Quando uma variável não é usada, ela fica com a cor apagada.
// var x = 20; elemento global, pode ser acessad me qualquer lugar, indepentende do contexto em que ele está inserido.

if (true) {
    var x = 20;
    let y = 30;
    const z = 40;

    console.log("Dentro do if:");
    console.log("x (var):", x);
    console.log("y (let):", y);
    console.log("z (const):", z);

}

console.log("-----------");
console.log("Fora do if:");

console.log("Dentro do if:");
console.log("x (var):", x);
console.log("y (let):", y);
console.log("z (const):", z);