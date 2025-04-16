const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const tempoObjetivo1 = new Date("2025-12-19T10:40:00");
const tempoObjetivo2 = new Date("2025-11-09T00:00:00");
const tempoObjetivo3 = new Date("2025-11-01T00:00:00");
const tempoObjetivo4 = new Date("2025-08-10T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


const contadores = document.querySelectorAll(".contador");

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0, 0, 0, 0];
    }
}

function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        const [dias, horas, minutos, segundos] = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = minutos;
        document.getElementById("seg" + i).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
 







document.addEventListener('DOMContentLoaded', function() {
    // Elementos de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const audioBotao = document.getElementById('audio-botao');
    
    // Novos elementos
    const modoEscuroBotao = document.createElement('button');
    modoEscuroBotao.innerText = "🌙 Modo Escuro";
    modoEscuroBotao.classList.add('btn', 'btn-primary', 'fw-bold');
    modoEscuroBotao.setAttribute('aria-label', 'Ativar modo escuro');
    opcoesDeAcessibilidade.appendChild(modoEscuroBotao);

    const brilhoInput = document.createElement('input');
    brilhoInput.type = "range";
    brilhoInput.min = "50";
    brilhoInput.max = "150";
    brilhoInput.value = "100";
    brilhoInput.classList.add('form-range');
    opcoesDeAcessibilidade.appendChild(brilhoInput);

    // Variáveis de configuração
    let tamanhoAtualFonte = 1;
    let falaEmExecucao = false;
    let modoEscuroAtivo = false;

    // Função para ativar a leitura em áudio
    function lerTexto() {
        const texto = document.body.innerText;
        const msg = new SpeechSynthesisUtterance(texto);
        msg.lang = 'pt-BR';

        if (!falaEmExecucao) {
            falaEmExecucao = true;
            window.speechSynthesis.speak(msg);
            msg.onend = function() {
                falaEmExecucao = false;
            };
        }
    }

    // Toggle de acessibilidade (mostra/oculta opções)
    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Aumento de fonte
    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuição de fonte
    diminuiFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.5) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Alternância de contraste
    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

    // Modo Escuro
    modoEscuroBotao.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        modoEscuroAtivo = !modoEscuroAtivo;
        modoEscuroBotao.innerText = modoEscuroAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    });

    // Controle de Brilho
    brilhoInput.addEventListener('input', function() {
        const brilho = brilhoInput.value;
        document.body.style.filter = `brightness(${brilho}%)`;
    });

    // Evento de clique para o botão de áudio
    audioBotao.addEventListener('click', function() {
        if (falaEmExecucao) {
            window.speechSynthesis.cancel();
            falaEmExecucao = false;
        } else {
            lerTexto();
        }
    });
});






// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Aparece após rolar 200px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Rola suavemente para o topo ao clicar no botão
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});