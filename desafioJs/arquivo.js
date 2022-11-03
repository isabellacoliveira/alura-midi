
// https://www.alura.com.br/artigos/html-css-e-js-definicoes

// Primeiro, você precisa criar uma referência para receber a lista com todas as teclas do AluraFone
const listaDeTeclas = document.querySelectorAll('input[type=button]');

// para capturar o input Digite seu telefone, que no caso do código
const inputTel = document.querySelector('input[type=tel]');

// O segundo passo é criar o laço de repetição for, que vai percorrer a lista de teclas, por esta razão, a condição do for é indice < listaDeTeclas.length, ou seja,
//  enquanto o indice for menor que o tamanho de listaDeTeclas, executa um comando.
for (indice = 0; indice < listaDeTeclas.length; indice++) {

    // é necessário que se crie uma referência constante const tecla para que a cada iteração, 
    // receba o valor correspondente da tecla listaDeTeclas[indice].
  const tecla = listaDeTeclas[indice];

//   adicione no onclick uma função anônima que receberá o valor do campo Digite seu telefone inputTel.value, 
//   e atribua a ela a soma entre o valor do campo Digite seu telefone 
//   e o valor da tecla clicada tecla.value, ficando inputTel.value = inputTel.value + tecla.value.
  tecla.onclick = function () {
    // ao clicar no botão, chamamos a tecla mais o seu valor 
    inputTel.value = inputTel.value + tecla.value;
    
    // precisamos garantir que as teclas que foram pressionadas são a enter ou a VideoColorSpace
    // pois somente elas tem a função de fazer algo carregar, portanto essa função deve ser restritas 
    // a essas teclas, para isso, vamos conferir se o evento que ocorreu, é o clique na tecla enter ou na space 
    // se um desses eventos acontecer, então a classe será adicionada ao elemento html 
    tecla.onekeydown = function(evento) {
      if(evento.code === "Enter" || evento.code === "Space")
      tecla.classList.add('input[type=button]')
    }
    tecla.onekeyup = function() {
      tecla.classList.remove('input[type=button]')
    }
    
  }
}

// Para selecionarmos todas as teclas do Alura Fone, é necessário usar o script const listaDeTeclas = 
// document.querySelectorAll(‘input[type=button]), porquê o JavaScript vai criar uma referência chamada 
// listaDeTeclas e armazenar dentro dela a NodeList com todas as teclas do Alura Fone, pois o script 
// document.querySelectorAll(‘input[type=button]’) acessa o documento HTML (representado por document) 
// e captura todos os elementos input que tenha como atributo type=button. É necessário passar o type, 
// ou seja, o seletor de atributo, pois os inputs do HTML não tem classes nem IDs, e 
// também temos um input que não é do tipo type, impossibilitando o uso do seletor de nome de tag input.

