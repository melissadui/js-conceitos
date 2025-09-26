// Conhecendo a estrutura condicional switch(troca)
// Bem similar ao if/else. É utilizada para testar multiplos valores de uma mesma variavel ou expressão

/* 
 sintaxe básica do switch
 break - serve para parar a execução do código
 default - Só será executado caso nenhuma condição seja atendida

 switch(expressão/condição){
  case valor1:
    // código se a expressão === valor1
    break;
  case valor2:
    // código se a expressão === valor2
    break;

  default:
    // código que vai ser executado caso nenhuma das condições acima seja atendida
 }
*/

// exemplo de switch com dias da semana

// altere o valor da variavel dia e veja o switch em ação
let dia = 4;

switch (dia) {
  case 1:
    console.log("domingo");
    break;

  case 2:
    console.log("segunda-feira");
    break;

  case 3:
    console.log("terça-feira");
    break;

  case 4:
    console.log("quarta-feira");
    break;

  default:
    console.log("Dia inválido");
}

// exemplo de switch com operações matemáticas
// Para ver o switch em ação, experimente alterar o tipo de operação para ver o resultado no console do navegador

// Lembre-se de conectar esse auqivo a index.html
let operacao = "-";
let a = 10;
let b = 5;

switch (operacao) {
  case "+":
    console.log(a + b);
    break;

  case "-":
    console.log(a - b);
    break;

  case "*":
    console.log(a * b);
    break;

  case "/":
    console.log(a / b);
    break;

  default:
    console.log("Operação inválida");
}



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }