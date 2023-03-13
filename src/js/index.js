/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricao = document.querySelectorAll('.informacoes')

//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3 - desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //passo 4 - marcar o botão clicado como se estivesse
        botao.classList.add('selecionado');

        //passo 5 - esconder a imagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');

        // Passo 7 Esconder o texto e a Logo anterior
        const informacoesFrente = document.querySelector('.frente');
        informacoesFrente.classList.remove('frente');

        // Passo 8 - Fazer aparecer o texto e a logo correspondente ao botao clicado
        descricao[indice].classList.add('frente');
        

    })
})