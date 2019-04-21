(function(){
    function factorial(n) {
        // Calculate the factorial here
        if(n === 0 || n === 1) {
          return 1;
        }
        
        if (n >= 12 || n < 0) {
            return RangeError('Number must be less than 12 and greater then 0') 
        }
        
         let resp = n;
              
          while(n>2) {
              resp *= --n;
          }
      
          return resp;
      }
    
    console.log('Fatorial -- ', factorial(-1));
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    const person = {
        name: 'Tchalla',
        lastname: 'Wakanda',
        age: 25,
    }
    console.log( 'Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
   console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    const books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push({name: 'O poder do Habito', pages: 300});
    books.push({name: 'Lean startup', pages: 200});
    books.push({name: 'Javascript: the weird parts', pages: 250});

    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    Pop retorna o ultimo elemento que ele está removendo do array
    */
    const lastBook = books.pop();
    console.log(lastBook);

    console.log( '\nAgora sobraram somente os livros:' );
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    const stringifiedBooks = JSON.stringify(books);
    console.log(stringifiedBooks);

    /*
    Converta os livros novamente para objeto.
    */
    // ?
    console.log( '\nAgora os livros são objetos novamente:' );
    const parsedBooks = JSON.parse(stringifiedBooks);
    console.log(parsedBooks);

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
   console.log( '\nExibindo as propriedades e valores de books:' );

    for(const prop in parsedBooks) {
        console.log(`${prop}: ${parsedBooks[prop]}`);
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?
    console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // ?

    console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?
})();