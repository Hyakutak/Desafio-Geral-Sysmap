const pegaTecla = (evt) => {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key);
}

document.onkeypress = (evt) => {
    let str = pegaTecla(evt);
    let teclaUpperCase = str.toLowerCase();
    if(str == 'S' || str == 'Y' || str == 'M' || str == 'P' || str == '1' || str == '2' || str == '0' || str == '3') {
        console.log(str);
    } else if (teclaUpperCase == 's' || teclaUpperCase == 'y' || teclaUpperCase == 'm' || teclaUpperCase == 'p') {
        console.log(teclaUpperCase);
    }
}

setTimeout(() => {
    const inputDate = document.querySelector('#data');
    const dateMask = (element) => {
        element.addEventListener('keypress', (e) => {
            if(e.keyCode < 47 || e.keyCode > 57) {
                e.preventDefault();
            }
            var len = element.value.length;
            if(len !== 1 || len !== 3) {
                if(e.keyCode == 47) {
                    e.preventDefault();
                }
            }
            if(len === 2 || len === 5) {
                element.value += '/';
            }
        });
    };
    dateMask(inputDate);
}, 500)

const maskCurrency = (money) => {
    let f = money.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    console.log(f);
}

// Array Frutas
const arrayFruits = ['Abacate', 'Abacaxi', 'Acai', 'Acerola', 'Amora', 'Araticum', 'Banana', 'Biriba', 'Cacau', 'Caja'];
// imprimi o tamanho do array
const lengthArray = arrayFruits.length;
// remove os primeiros 5 itens do array
const removeFiveArray = arrayFruits.splice(5);
// adiciona a fruta laranja no array
const addCacau = removeFiveArray.splice(3, 0, 'laranja');
// adiciona a fruta mamao no array
const addMamao = removeFiveArray.unshift('mamão');

//console.log(lengthArray);
//console.log(removeFiveArray);
//console.log(addCacau);
//console.log(addMamao);

// Array numeros
const arrayNumbers = [10, 23, 43,44,56,12,35,77,23, 13, 31,55,24,60];
const arrayPar = [];
const arrayPrimos = [];
const somar = (total, number) => {
    return total + number
}
// calcula a media do array
let media = arrayNumbers.reduce(somar, 0)/arrayNumbers.length;
// Remove o quinto item do array
const removeFiveNumber = arrayNumbers.splice(4, 1);
// Soma o array de numeros
let soma = arrayNumbers.reduce(somar, 0);
// array de numeros pares
for(let i = 0; i < arrayNumbers.length; i++) {
    if((arrayNumbers[i] % 2) == 0) {
        arrayPar.push(arrayNumbers[i]);
    }
}
// array de numeros primos
const numberPrimo = (number) => {
    let isPrimo = true;
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            isPrimo = false;
            break;
        }
    }
    if(isPrimo) arrayPrimos.push(number);
}
for(let i = 0; i < arrayNumbers.length; i++) {
    numberPrimo(arrayNumbers[i]);
}
//console.log(arrayPar);
//console.log(arrayPrimos);
//console.log(soma);
//console.log(media.toFixed(2));

const user = {
    name: "Roberto",
    idade: "33",
    formado: "Sim",
    escolaridade: {
        instituicao1: "UNIVERSIDADE MG, UNIVERSIDADE SP, UNIVERSIDADE PR, UNIVERSADE RS",
        instituicao2: "Preencher essa informação",
    },
}
// Separando universidades em um array de string
user.escolaridade.instituicao1 = user.escolaridade.instituicao1.split(',', 4);
// Adicionando as nocas propriedades do user
user.endereço = 'Maua';
user.nacionalidade = 'Brasileiro';
user.situaçãoDoCurso = 'concluido';