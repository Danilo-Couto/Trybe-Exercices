/* 
const base = 5;
let height = 8;
const area = base*height;

let perimeter = base + height + base + height
console.log (perimeter);
 
Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:

Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"

Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
Altere o valor da nota para verificar se as condições que você implementou funcionam;

const nota_canditato_a = 65;
if (nota_canditato_a >= 80) {
    console.log ("Parabéns, você foi aprovada(o)!")
} else if (nota_canditato_a <= 60) {
    console.log ("Você foi reprovada(o)")
} else {
    console.log ("Você está na nossa lista de espera")
}

Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
Implemente condicionais para que:
Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".
Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".
Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".
Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".
Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".
Agora imprima a variável message fora das suas condições. */
/* 
let currentHour = 22;
let message = "";

if (currentHour >=22) {
    message ="Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >=18) {
    message = "Rango da noite, vamos jantar :D"
} else if (currentHour >=14) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else {
    message = "Hmmm, cheiro de café recém passado"
}
console.log (message) */

/* const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
} */


/* 
console.log((2 + 2) === 4); // true
console.log(!(2 + 2) === 4); //false */

/* 
TENTAR DE NOVO
let estado_candidato = 'aprovada'

switch (estado_candidato) {
    case 'aprovada':
        console.log ('parabens');
        break;
    case ('lista');
        console.log ('lista');
        break;
    case 'reprovada';
        console.log ('reprovado')
        break
} */

/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

/* 
var a = 3;
var b = 2;
var soma = a+b;
var sub = a-b;
var mult = a*b;
var modulo = a%b;
console.log (soma);
console.log (sub);
console.log (mult);
console.log (modulo); */

/* Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados. */
/* 
var a = 19;
var b = 8;

if (a <=b) {
    console.log (b);
} else {
    console.log (a);
}
 */

/* Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. */
/* 
var a = 70;
var b = 128;
var c = 111;

    if (a>b && a>c) {
        console.log (a);
    } else if (b>a && b>c) {
            console.log (b)
        } else {
            console.log (c)
/*         } */

/* const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a +' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
}; */ 
/* 
Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. */

/* var tal = 0;

    if (tal>0) {
        console.log ("positive");
    } else if (tal<0) {
            console.log ('negative');
    } else {
        console.log ("zero");
    } */

/*     Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. */
/* 
const angulo_a = 60;
const angulo_b = 60;
const angulo_c = 60;

if (angulo_a<=0||angulo_b<=0||angulo_c <= 0) {
    console.log ("erro"); 
    
} else { 
    if (angulo_a+angulo_b+angulo_c==180) {
        console.log (true);
    } else {
        console.log (false);
    }    
}


let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
} */

/* 
Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' . */

let situacao = 'lista';

switch (situacao) {
    case 'aprovada':
        console.log ('Parabéns');
        break;
        case 'lista':
            console.log ('Ainda há esperança');
            break;
            case 'reprovada':
                console.log ('Lo siento');
                break;

                default:
                     console.log ('Não se aplica') ;
}


/* 
TENTAR MAIS TARDE 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)

let chesspiece = 

let cavalo = "anda e come em l";
let peao = "anda de um em um apenas para frente e come em diagonal";
let bispo = "anda e come em diagonal";
let torre = "anda para frente e para os lados sem limites de casa";


if cavalo {
    console.log (chesspiece)
}

toLowerCase() */



/* TENTAR DE NOVO
Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */

/* 
Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .

let a = 1;
let b = 5;
let c = 3;

if (a%2==0||b%2==0||c%2==0) {
    console.log ("true");
} else {
    console.log ("false");
}
*/

/* 
const a = 1;
const b = 2;
const c = 5;
let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);  */

/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if . */
/* 
const a = 3;
const b = 6;
const c = 2;
let tem_impar = 'nao tem impar';

if ((a%2!=0) || (b%2!=0) || (c%2!=0)) {
    tem_impar = 'tem impar';
}; 
console.log (tem_impar);

 */

/* Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de /* 20% também faz parte do valor de custo. */
/* 
let volume_de_venda = 500
const valorCusto = 10;
const valorVenda = 20;

const impostoSobreOCusto = 0.20*valorCusto
const valorCustoTotal = valorCusto + impostoSobreOCusto
const lucro = valorVenda - valorCustoTotal 
const lucro_com_vendas = volume_de_venda * lucro

if (valorCusto>0 && valorVenda>0) {
    console.log (lucro_com_vendas)
} else {
    console.log ('erro:os valores não podem ser negativos')
}
 */
/* 
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR (Imposto de Renda)
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto. */

let aliquota;
const salario_bruto = 10000;
let salario_liquido;

if (salario_bruto <= 1556.94) {
    aliquota = salario_bruto;
} else if (salario_bruto <= 2594.92) {
    aliquota = salario_bruto;
} else if (salario_bruto <= 5189.82) {
    aliquota = salario_bruto;
} else {
    aliquota = 570.88;
}

console.log (aliquota)
