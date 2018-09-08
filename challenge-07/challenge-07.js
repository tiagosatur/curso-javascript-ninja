/*
Crie um array com 5 items (tipos variados).
*/
let arrei = [1, true, 'String', {a: 'this', b: 'is', c: 'array'}, function(){return 'Array class';}]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(item) {
  arrei.push(item);
  return arrei;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

console.info(addItem(['Um bilhão', 10, function sum(x, y) {return x + y;}])); //[1, true, "String", {…}, ƒ, Array(3)


/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.warn('O segundo elemento do segundo array é ', arrei[5][1]); //true

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/


console.info(`O primeiro array tem ${arrei.length} itens`); //O primeiro array tem 5 itens

/*
  Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.info(`O segundo array tem ${arrei[5].length} itens`);

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
let counter = 10;

while(counter <= 20) {
  counter % 2 === 0 ? console.log(counter) : '';
  counter++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
let counter = 10;

while(counter <= 20) {
  counter % 2 !== 0 ? console.log(counter) : '';
  counter++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
for(var i = 100; i <= 120; i++) {
  i % 2 === 0 ? console.log(i) : '';
}

console.log( 'Números ímpares entre 111 e 125:' );
for(var i = 111; i <= 125; i++) {
  i % 2 !== 0 ? console.log(i) : '';
}
