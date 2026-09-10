// ==========================================================
// PROJETO: MATEMÁTICA E MÚSICA
// Arquivo: script.js
// ==========================================================


// ----------------------------------------------------------
// 1. MENSAGEM INICIAL
// ----------------------------------------------------------

// O evento DOMContentLoaded faz o JavaScript esperar
// o HTML carregar antes de executar o código.

document.addEventListener("DOMContentLoaded", function () {

    console.log("Site Matemática e Música carregado!");

});



// ==========================================================
// 2. MITO OU VERDADE
// ==========================================================

// Esta função recebe:
// respostaCorreta = verdadeiro ou falso
// elemento = local onde aparecerá a resposta

function verificarMito(respostaCorreta, elemento) {

    const resposta = document.getElementById(elemento);

    if (respostaCorreta === true) {

        resposta.innerHTML =
            "✅ VERDADE! A música possui relações com Matemática, Física e Tecnologia.";

    } else {

        resposta.innerHTML =
            "❌ MITO! Essa afirmação não está correta.";

    }

}



// ==========================================================
// 3. MOSTRAR E ESCONDER CONTEÚDO
// ==========================================================

function mostrarConteudo(id) {

    const conteudo = document.getElementById(id);

    if (conteudo.style.display === "none") {

        conteudo.style.display = "block";

    } else {

        conteudo.style.display = "none";

    }

}



// ==========================================================
// 4. CALCULADORA DE OITAVAS
// ==========================================================

// Na música, uma oitava acima possui aproximadamente
// o dobro da frequência.

function calcularOitava() {

    const frequencia =
        Number(document.getElementById("frequencia").value);

    const resultado =
        document.getElementById("resultadoFrequencia");


    // Verifica se o estudante digitou um número válido.

    if (frequencia <= 0) {

        resultado.innerHTML =
            "Digite uma frequência maior que zero.";

        return;
    }


    const oitavaAcima = frequencia * 2;

    const oitavaAbaixo = frequencia / 2;


    resultado.innerHTML =
        "Oitava abaixo: " +
        oitavaAbaixo +
        " Hz <br>" +
        "Frequência original: " +
        frequencia +
        " Hz <br>" +
        "Oitava acima: " +
        oitavaAcima +
        " Hz";

}



// ==========================================================
// 5. CALCULADORA DE SEMITONS
// ==========================================================

// No temperamento igual:
//
// nova frequência = frequência inicial × 2^(n/12)
//
// n = quantidade de semitons.

function calcularSemitons() {

    const frequenciaInicial =
        Number(document.getElementById("freqInicial").value);

    const semitons =
        Number(document.getElementById("semitons").value);


    const resultado =
        document.getElementById("resultadoSemitons");


    if (frequenciaInicial <= 0) {

        resultado.innerHTML =
            "Digite uma frequência válida.";

        return;
    }


    const novaFrequencia =
        frequenciaInicial * Math.pow(2, semitons / 12);


    resultado.innerHTML =
        "Nova frequência: " +
        novaFrequencia.toFixed(2) +
        " Hz";

}



// ==========================================================
// 6. QUIZ DE MÚSICA E MATEMÁTICA
// ==========================================================

let pontos = 0;

let questaoAtual = 0;


// Array com as perguntas.

const perguntas = [

    {
        pergunta:
            "Uma oitava acima dobra aproximadamente a frequência?",

        respostas:
            ["Sim", "Não"],

        correta: 0
    },


    {
        pergunta:
            "Qual unidade é usada para medir frequência?",

        respostas:
            ["Metro", "Hertz", "Litro"],

        correta: 1
    },


    {
        pergunta:
            "Qual conceito matemático aparece diretamente no ritmo musical?",

        respostas:
            ["Frações", "Equação do 2º grau", "Bhaskara"],

        correta: 0
    },


    {
        pergunta:
            "Qual é a afinação tradicional de um baixo de quatro cordas?",

        respostas:
            [
                "Mi - Lá - Ré - Sol",
                "Dó - Ré - Mi - Fá",
                "Sol - Dó - Mi - Lá"
            ],

        correta: 0
    },


    {
        pergunta:
            "Se uma frequência é 220 Hz, qual é sua oitava acima?",

        respostas:
            [
                "110 Hz",
                "330 Hz",
                "440 Hz"
            ],

        correta: 2
    }

];



// ----------------------------------------------------------
// MOSTRAR PERGUNTA
// ----------------------------------------------------------

function mostrarPergunta() {

    const areaPergunta =
        document.getElementById("perguntaQuiz");

    const areaRespostas =
        document.getElementById("respostasQuiz");


    areaRespostas.innerHTML = "";


    // Se todas as perguntas acabaram.

    if (questaoAtual >= perguntas.length) {

        areaPergunta.innerHTML =
            "Quiz terminado!";

        areaRespostas.innerHTML =
            "Você acertou " +
            pontos +
            " de " +
            perguntas.length +
            " questões.";

        return;

    }


    const pergunta = perguntas[questaoAtual];


    areaPergunta.innerHTML =
        pergunta.pergunta;


    // Criamos automaticamente os botões de resposta.

    pergunta.respostas.forEach(function (resposta, indice) {

        const botao =
            document.createElement("button");


        botao.innerHTML =
            resposta;


        botao.classList.add("botao-quiz");


        botao.onclick = function () {

            responderQuiz(indice);

        };


        areaRespostas.appendChild(botao);

    });

}



// ----------------------------------------------------------
// VERIFICAR RESPOSTA
// ----------------------------------------------------------

function responderQuiz(respostaEscolhida) {

    const pergunta =
        perguntas[questaoAtual];


    if (respostaEscolhida === pergunta.correta) {

        pontos++;

        alert("✅ Resposta correta!");

    } else {

        alert("❌ Resposta incorreta.");

    }


    questaoAtual++;

    mostrarPergunta();

}



// ==========================================================
// 7. GERADOR DE EXERCÍCIO DE FREQUÊNCIA
// ==========================================================

function gerarExercicio() {

    // Math.random cria um número aleatório.

    const valores =
        [55, 110, 220, 440];


    const indice =
        Math.floor(
            Math.random() * valores.length
        );


    const frequencia =
        valores[indice];


    const area =
        document.getElementById("exercicioAleatorio");


    area.innerHTML =
        "Uma nota possui frequência de " +
        frequencia +
        " Hz. Qual será sua frequência uma oitava acima?";

}



// ==========================================================
// 8. VERIFICAR EXERCÍCIO
// ==========================================================

let frequenciaExercicio = 220;


function novoDesafio() {

    const frequencias =
        [55, 110, 220, 440];


    const indice =
        Math.floor(
            Math.random() * frequencias.length
        );


    frequenciaExercicio =
        frequencias[indice];


    document.getElementById("desafio").innerHTML =

        "Uma nota possui frequência de " +

        frequenciaExercicio +

        " Hz. Qual é sua oitava acima?";


    document.getElementById("respostaDesafio").value = "";

    document.getElementById("resultadoDesafio").innerHTML = "";

}



function verificarDesafio() {

    const respostaAluno =
        Number(
            document.getElementById("respostaDesafio").value
        );


    const respostaCorreta =
        frequenciaExercicio * 2;


    const resultado =
        document.getElementById("resultadoDesafio");


    if (respostaAluno === respostaCorreta) {

        resultado.innerHTML =
            "✅ Correto! " +
            frequenciaExercicio +
            " × 2 = " +
            respostaCorreta +
            " Hz";

    } else {

        resultado.innerHTML =
            "❌ Tente novamente.";

    }

}



// ==========================================================
// 9. MOSTRAR NOTA MUSICAL
// ==========================================================

const notas = [

    "Dó",
    "Ré",
    "Mi",
    "Fá",
    "Sol",
    "Lá",
    "Si"

];


function sortearNota() {

    const indice =
        Math.floor(
            Math.random() * notas.length
        );


    document.getElementById("notaSorteada").innerHTML =
        "Nota sorteada: " +
        notas[indice];

}



// ==========================================================
// 10. FRAÇÕES MUSICAIS
// ==========================================================

function mostrarFracao(valor) {

    const resultado =
        document.getElementById("resultadoFracao");


    if (valor === 1) {

        resultado.innerHTML =
            "Semibreve → representa um inteiro.";

    }


    if (valor === 2) {

        resultado.innerHTML =
            "Mínima → representa 1/2.";

    }


    if (valor === 4) {

        resultado.innerHTML =
            "Semínima → representa 1/4.";

    }


    if (valor === 8) {

        resultado.innerHTML =
            "Colcheia → representa 1/8.";

    }

}



// ==========================================================
// 11. MODO DE ESTUDO
// ==========================================================

function modoEstudo() {

    document.body.classList.toggle("modo-estudo");

}



// ==========================================================
// 12. CONTADOR DE CLIQUES
// ==========================================================

let contador = 0;


function contarPratica() {

    contador++;


    document.getElementById("contador").innerHTML =

        "Exercícios praticados: " +

        contador;

}