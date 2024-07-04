const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Analise os impactos das reformas educacionais recentes, como o Novo Ensino Médio, na qualidade da educação e no desenvolvimento de competências necessárias para os desafios contemporâneos, considerando aspectos como flexibilização curricular, formação integral dos estudantes e preparação para o mercado de trabalho.",
        alternativas: [
            {
                texto: "Qual o impacto?",
                afirmacao: "O Novo Ensino Médio tem 1.000 horas anuais, visando à expansão gradual para 1.400 horas, conforme o Plano Nacional de Educação. "
            },
           
        ]
    },
    {
        enunciado: "O novo Ensino Médio propõe uma participação muito mais ativa do aluno, tornando-o protagonista em sua aprendizagem e na construção de seu projeto de vida.",
        alternativas: [
            {
                texto: "Quais são as principais mudanças trazidas pela reforma do ensino médio?",
                
            },
           
        ]
    },
    {
        enunciado: "A carga horária do Ensino Médio passou de 800 para 1.000 horas atuais, mas passaram  a ser pelo menos 3.000 horas para três últimos anos da Educação Básica. O ano letivo passou a durar 200 dias. Para cumprir a carga horária total, os estudantes do Ensino Médio terão que dedicar mais horas ao ensino escolar.",
        alternativas: [
            {
                texto: "Qual a crítica ao Novo Ensino Médio?",
                
            },
           
        ]
    },
    {
        enunciado: "Segundo a pesquisa, 55% dos alunos se mostraram insatisfeitos com as mudanças decorrentes do NEM. Outros 63% criticaram a mudança na carga horária. Entre os professores, 76% se mostraram insatisfeitos com NEM. Já entre os gestores, esse índice é de 66%.",
        alternativas: [
            {
                texto: "O que os jovens acham do Novo Ensino Médio?",
                
            },
           
        ]
    },
    {
        enunciado: "Os estudantes que estão cursando o novo modelo de Ensino Médio o avaliam como positivo, se dizem mais satisfeitos com a escola e otimistas com o futuro profissional. 61% dos alunos que estão cursando o Novo Ensino Médio avaliam positivamente o modelo. ",
        alternativas: [
            {
                texto: "Resumo do que foi dito sobre o Novo Ensino Médio!",
                afirmacao: "Disciplinas obrigatórias incluem língua portuguesa, língua inglesa, língua espanhola, arte, educação física, matemática, história, geografia, sociologia, filosofia, física, química e biologia."
            },
           
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2022...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();