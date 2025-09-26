// Conhecendo os tipos de dados primitivos
// Dados primitivos são os dados mais básicos e fundamentais da linguagem
// Temos 7 tipos de dados diferentes no JavaScript

// Lidando com strings - cadeia de caracteres
let saudacao = "Bom dia! Como vai você?";
let email = 'teste@teste.com';

// Lidando com number. Limite de aproximadamente 2^53 -1
const banco = 1020304050
const decimal = 4949.4994494994
const numeroNegativo = -7

// Lidando com BooLean - Lógica booLeana
let estaLogado = false
let podeTransferir = true

// Lidando com undefined (indefinido) - quando uma variável não possui valor
let semValor

console.log(semValor);

// lidando com Null (Nulo) - Representando a ausência (intencional) de valor.

let usuario = null
let resultado = null
resultado = 42
resultado = "Você marcou 42 pontos"

// Lidando com Symbols (símbolos). Representa um identificador único. Cada Symbol é único. Mesmo que você crie dois simbolos, eles nunca serão iguais.
let simbolo1 = Symbol()
let simbolo2 = Symbol("id")

console.log(simbolo2)

// Lidando com BigInt. Para lidar com números.
// Números muitos grandes que ultrapassam o number (o limite de caracteres do number)
let numeroGrande = 99900394080945084098584908085n