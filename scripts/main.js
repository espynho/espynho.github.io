"use strict";
let minhaImagem = document.querySelector('img');
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

if (!localStorage.getItem('nome')) {
    defineNomeUsuario();
} else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Mozilla é legal, ' + nomeGuardado;
}
minhaImagem.onclick = function () {
    let meuSrc = minhaImagem.getAttribute('src');
    if (meuSrc === 'img/logo_200x200.png') {
        minhaImagem.setAttribute('src', 'img/logo1_200x200.png');
    } else {
        minhaImagem.setAttribute('src', 'img/logo_200x200.png')
    }
}

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null){
        defineNomeUsuario();
        
    }else{
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Mozilla é legal, ' + meuNome;
    }
}

meuBotao.onclick = function () {
    defineNomeUsuario();
}