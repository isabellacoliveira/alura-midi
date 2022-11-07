// quem chamar a função, terá que passar o id do botão necessitado para reproduzir o audio
function tocaSom(seletorAudio) {
    // aqui acessamos o áudio da tecla pom que é reproduzido assim que apertamos enter no console 
    // ao voltarmos para o console, ele apresenta um erro, pois ele não consegue acessar algo que é nulo
   const elemento = document.querySelector(seletorAudio);
//    esse evento só pode acontecer, se esse elemento existir 
// se por exemplo passamos no console: tocaSom('.piano') essa classe não existe, portanto a mensagem será retornada
  
//   se o elemento não for nulo e for igual a tag audio 
  if (elemento != null && elemento.localName === 'audio') {
    // podemos ver as propriedades javascript de uma tag ao chamarmos ela no console, o localName é como o js identifica as tags passadas entre aspas
         elemento.play();
  } else {
        alert('elemento não encontrado ou seletor inválido');
  }

}
    // temos acesso a esse botão 
    // podemos atribuir para o botão 
    // para guardar a função dentro do atributo onclick , não podemos passar os parenteses para a função, para que a ação nao seja executada assim que o usuário entrar na página 
    // document.querySelector('.tecla_pom').onclick = tocaSomPom;


const listaDeTeclas = document.querySelectorAll('.tecla'); 

// dentro do while, não temos acesso a tag audio , somente temos acesso ao elemento button 
// ao digitar listaDeTeclas[indice].classList, podemos acessar alguns atributos
// assim podemos acessar a segunda classe deste elemento aqui 

for(let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    // template string 
    const idAudio = `#som_${instrumento}`;

    // true or false 
    // vamos usar uma função anônima = assim vamos estar criando uma função nova 
    tecla.onclick = function () {
        tocaSom(idAudio); 
    }
        
    /* há uma classe active que é responsável por determinadas funcionalidades quando o usuário 
    aperta o botão  */
    // temos que fazer a inserção dessa classe nos botões da tecla enter 
    // listaDeTeclas[2].classList.add('ativa') ao colocar esse código, acessamos a lista de teclas primeiramente
    // depois acessamos a lista de classes e com add, podemos adicionar algo, no caso uma class, a classe responsável por
    // deixar o botão vermelho ao clicar no enter

    // ADICIONAR UMA CLASSE EM UM ELEMENTO, COM JAVASCRIPT 
    // chamamos a tecla em questão através da constante tecla, ao longo do for 
    // o nome do evento chamado é: quando eu aperto a tecla e ela está lá em baixo 
    // quando a tecla estiver abaixada = onkeydown 
    // ele está adicionando essa classe (ativa) em cada uma das tags do html button conforme as teclas são apertadas 
    tecla.onkeydown = function(evento) { 
        
        // com o console, podemos voltar na página e ao usar o tab e as outras teclas, o evento é mostrado no console.
        // ao clicar no evento, as suas propriedades são mostradas, vemos que a propriedade code é a que aparece a tecla que clicamos
        // podemos fazer com que apareça no console cada uma das teclas que clicarmos, digitando evento.code
        // ao estipularmos uma condição no console log com o operador "==" ele retorna true ou false, colocamos a condição que para ser true, 
        // a tecla apertada deve ser igual a space, quando apertamos space, o console retorna true, mas quando apertamos outra tecla, ele retorna false
        
        // para todas as funções que são atreladas a um evento, podemos dar um nome qualquer para o evento  
        // assim o js vai mostrar o resultado do evento ao ser acionado o botão
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
    }
}
    // REMOVER UMA CLASSE DE UM ELEMENTO, COM JAVASCRIPT 
    tecla.onekeyup = function() {
        tecla.classList.remove('ativa');
    }

   
}

















