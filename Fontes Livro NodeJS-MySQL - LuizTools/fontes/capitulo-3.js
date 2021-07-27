//3.1
var x = 1;

//3.2
x = 'teste';

//3.3
let x, y, z;

//3.4
let x = 1;

//3.5
// comentário de uma linha
// tudo após as duas barras é considerado comentário

//3.6
/* comentário
 de múltiplas linhas */

 //3.7
 // Declaracao e inicializacao de duas variaveis, troque os valores se quiser
let a = 5;
let b = 2;
// Varios exemplos de operacoes sobre variaveis
console.log('a = ' + a);
console.log('b = ' + b);
console.log('a + b = ' + (a + b));
console.log('a - b = ' + (a - b));
console.log('a * b = ' + (a * b));
console.log('a / b = ' + (a / b));
console.log('a % b = ' + (a % b));
console.log('a++ = ' + (a++));
console.log('--b = ' + (--b));
console.log('a = ' + a);
console.log('b = ' + b);

//3.8
let a = 15;
let b = 12;
let c = '15';
console.log('a = ' + a);
console.log('b = ' + b);
// aqui a igualdade é apenas sobre o valor, mas são valores diferentes
console.log('a == b : ' + (a == b));
// aqui, o interpretador acha que são iguais, pois o valor é o mesmo, mas com tipos diferentes
console.log('a == c : ' + (a == c));
// agora sim, valida-se o tipo primeiro e depois o valor
console.log('a === c : ' + (a === c));
// ou seja, use sempre === e !==
console.log('a !== b : ' + (a !== b));
console.log('a < b : ' + (a < b));
console.log('a > b : ' + (a > b));
console.log('a <= b : ' + (a <= b));
console.log('a >= b : ' + (a >= b));

//3.9
var result = false;
i = 0;
y = a*x + b;

//3.10
const i = 0;
let y = i + 2;
console.log('Valor do i: ' + i);

//3.11
function somar(num1, num2){ return num1 + num2; }

//3.12
const somar = function(num1, num2) { return num1 + num2; }

//3.13
somar(1,2);

//3.14
outraFuncao(somar);

//3.15
const somar = (num1,num2) => num1 + num2;

//3.16
const nome = 'Luiz';

//3.17
const nome = 'Luiz';
const sobrenome = 'Duarte';
console.log('Prof. ' + nome + sobrenome);

//3.18
const nome = 'Luiz';
const idade = 28;
console.log('Prof. ' + nome + ' tem ' + idade + ' anos!');

//3.19
let str = 'Teste';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = '1';
console.log(parseInt(str));
str = '1.5';
console.log(parseFloat(str));

//3.20
for (let i=0; i < 10; i++)
   console.log('i=' + i);

//3.21
for (let i=0; i < 10; i++){
	console.log("i=" + i);
	//outra instrução qualquer, quantas quiser
}

//3.22
let chave = true;
while(chave === true)
   chave = false;

//3.23
let chave = true;
while(chave === true){
   //outra instrução qualquer
   console.log('Imprime!');
   chave = false;
}

//3.24
let i = 0;
while(i < 10){
   //outra instrução qualquer
   console.log('Imprime!');
   i++;
}

//3.25
let chave = false;
do{
   //outra instrução qualquer
   console.log('Imprime!');
}while(chave === true)

//3.26
let x = 0;
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);

//3.27
for(var i=0; i < 10; i++)
   console.log(i);

//3.28
let x=0;
while(x < 10)
   console.log(x++);

//3.29
let x=0;
do{
   console.log(x);
} while(x++ < 10)

//3.30
let x=0;
console.log(x++);

//3.31
let x=0;
console.log(++x);

//3.32
let x = 0;
if(x === 0)
   console.log('X é zero!');

//3.33
let x = 0;
if(x === 0){
   console.log('X é zero!');
   x++;
}

//3.34
let x = 0;
if(x % 2 === 0){
   console.log('X é PAR!');
}

//3.35
for(let i=1; i <= 20; i++){
    if(i % 2 === 0){
       console.log(i + ' é PAR!');
    }
 }

 //3.36
 for(let i=1; i <= 20; i++){
    if(i % 2 == 0){
       console.log(i + ' é PAR!');
    }
    console.log(i + ' é ÍMPAR!');
 }

 //3.37
 for(let i=1; i <= 20; i++){
    if(i % 2 === 0){
       console.log(i + ' é PAR!');
    } else {
       console.log(i + ' é ÍMPAR!');
    }
 }

 //3.38
 for(let i=0; i < 10; i++){
    if(i >= 5){
       if(i <= 7){
          console.log('FUNCIONOU');
       }
    }
 }

 //3.39
 for(let i=0; i < 10; i++){
    if(i >= 5 && i <= 7){
       console.log('FUNCIONOU');
    }
 }

 //3.40
 const letra = 'A';
switch (letra) {
 case 'A': console.log('Vogal A'); break;
 case 'E': console.log('Vogal E'); break;
 case 'I': console.log('Vogal I'); break;
 case 'O': console.log('Vogal O'); break;
 case 'U': console.log('Vogal U'); break;
 default: console.log('Não é uma vogal');
}

//3.41
const numeros = [];

//3.42
numeros[0] = 5;

//3.43
numeros[1] = 3;

//3.44
numeros[1] = 6;

//3.45
const numeros = [];
numeros[0] = 8;
numeros[1] = 4;
numeros[2] = 29;

//3.46
const inventores= [];
inventores[0] = 'Einstein';
inventores[1] = 'Edson';
inventores[2] = 'Galileu';
inventores[3] = 'Da Vinci';

//3.47
const inventor = inventores[3];
console.log(inventor);

//3.48
const numeros = [];
for(let i=0; i < 10; i++)
   numeros[i] = 1;

//3.49
const numeros = [];
for(let i=0; i < 10; i++)
   numeros.push(1);

//3.50
for(let i=0; i < numeros.length; i++)
   console.log(numeros[i]);

//3.51
const cliente = {};

//3.52
cliente.nome = 'Luiz';

//3.53
cliente.exibirMensagem = function(msg){ 
    console.log(msg);
 }

 //3.54
 const cliente = { 
    nome: 'Luiz', 
    saldo: 100.0, 
    idade: 29, 
    gaucho: true 
 }

 //3.55
 const clientes = [cliente1, cliente2, { nome:"cliente3", saldo:5.0, idade:21, gaúcho:false }];