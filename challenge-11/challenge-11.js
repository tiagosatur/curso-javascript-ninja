(function () {
    // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
    Crie uma variável chamada `once`, que recebe `false` como seu valor.
    Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */
    var once = false;

    while(once === true) {
        console.log('Entrou ao menos uma vez!');
    }

    /*
    Crie um objeto chamado `person`, que receba as seguintes propriedades:
    - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
    para o nome, idade, peso e data de nascimento dessa pessoa.
    */
    const person = {
        name: 'Shakira Isabel Mebarak Ripoll',
        age: 42,
        weight: 50,
        birthdate: '02/02/1977'
    }

    /*
    Use um loop para percorrer o objeto criado acima, mostrando no console
    a frase:
    'The [PROPERTY] of person is [VALUE]'
    Aproveite e crie uma variável `counter` que vai contar quantas propriedades
    esse objeto tem.
    Após o loop, mostre a frase:
    'The person has [COUNTER] properties'
    */

    var counter = 0;
    // for (const [prop, value] of Object.entries(person)) {
    //     counter++;
    //     console.log(`The ${prop} of person is ${value}`);
    // }
    for (const prop in person) {
        counter++;
        console.log(`The ${prop} of person is ${person[prop]}`);
    }

    console.log(`The person object has ${counter} properties`);

    /*
    Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
    criado acima) é mais velha que a idade passada por parâmetro.
    Se verdadeiro, retornar `true`. Senão, retornar false.
    Após a função, mostrar a mensagem no console:
    'The person has more than 25 years old? [TRUE/FALSE]'
    */
    
    function moreThan(age) {

        return person.age > age;
        // if(person.age > age) {
        //     return true;
        // }

        // return false;
    }

    console.log(`The person has more than 25 years old? ${moreThan(30)}`);

    /*
    Faça um loop de 0 a 20, que adicione cada número como um item de um
    array chamado `numbers`. Se o contador for maior que 10, saia do loop.
    Mostre no console os números no array.
    */
    console.log( 'De 0 a 10:' );
    var numbers = [];

    for(var i = 0; i <= 20; i++) {
        if(i > 10) {
            break;
        }

        numbers[i] = i;
    }

    console.log('O array numbers possui é igual a: ', numbers);

    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */
    console.log( 'Pares de 0 a 20:' );
    var numbers = [];

    for(var i = 0; i < 20; i++) {
        if(i % 2 != 0) {
            continue;
        }
        numbers.push(i);
    }

    console.log('Os números pares do array numbers são: ', numbers);


gstgstgstlkjhglkhgkhrsasdfasdfadsfadsds    // ?
})();