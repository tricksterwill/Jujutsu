const botoes = document.querySelectorAll('.botao')
const personagem = document.querySelectorAll('.personagem')

console.log(botoes);


    botoes.forEach((botao,index)=>{
        botao.addEventListener("click", () => {
            desselecionarbotao();
            desselecionarpersonagem();
            botao.classList.add("selecionado")
            personagem[index].classList.add("selecionado")
        });
    });
        
    
    
    

function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

