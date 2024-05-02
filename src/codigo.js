var valoresPorcentagem = {
    botao5: 5,
    botao10: 10,
    botao15: 15,
    botao25: 25,
    botao50: 50
};

// Input customizado de porcentagem
document.getElementById("input--custom").addEventListener("input", function() {
    var inputCustom = parseFloat(document.getElementById("input--custom").value);
    if(isNaN(inputCustom)){
        calcularPorcentagem(0);
    }else{
    calcularPorcentagem(inputCustom);
    }
});

// Botões de porcentagem fixa
var botoesPorcentagem = document.querySelectorAll("button[id^='botao']");

botoesPorcentagem.forEach(function(botao) {
    botao.addEventListener("click", function() {
        var porcentagemFixa = valoresPorcentagem[botao.id];
        var inputCustom = parseFloat(document.getElementById("input--custom").value);
        var porcentagemFinal = porcentagemFixa + (inputCustom || 0);
        console.log("botão", porcentagemFinal)
        calcularPorcentagem(porcentagemFinal);
    });
});

function calcularPorcentagem(porcentagem) {

    var inputDinheiro = parseFloat(document.getElementById("input--dinheiro").value);
    var inputPessoas = parseFloat(document.getElementById("input--pessoas").value);
    var somaPorcentagem =+ porcentagem

    if(isNaN(inputDinheiro)){
        document.getElementById("input--dinheiro").classList.add("campo-invalido");
    }else{
        document.getElementById("input--dinheiro").classList.remove("campo-invalido");
    }if(isNaN(inputPessoas) || inputPessoas <= 0){
        document.getElementById("input--pessoas").classList.add("campo-invalido");
        document.getElementById("aviso-pessoas").style.display = 'block'
    }else{
        document.getElementById("input--pessoas").classList.remove("campo-invalido");
        document.getElementById("aviso-pessoas").style.display = 'none'
    }if (isNaN(inputDinheiro) || (isNaN(inputPessoas))){
        return;
    }
    
    if(somaPorcentagem == 0 || inputPessoas == 0){
        return;
    }else{
        var valorGorjeta = (inputDinheiro * (somaPorcentagem ) / 100) / inputPessoas;
        var valorTotal = (inputDinheiro + (inputDinheiro * (somaPorcentagem ) / 100)) / inputPessoas;

        console.log("gorgeta",valorGorjeta)
        document.getElementById("valor--gorjeta").innerText = valorGorjeta.toFixed(2);
        document.getElementById("valor--total").innerText = valorTotal.toFixed(2);
    }
}

const botaoReset = document.getElementById('reset')

botaoReset.addEventListener("click", limpar);

function limpar(){
    console.log('entrou')
    const inputDinheiro = document.getElementById("input--dinheiro");
    const inputPessoas = document.getElementById("input--pessoas");
    const inputCustom= document.getElementById("input--custom");
    const valorGorjeta = document.getElementById("valor--gorjeta");
    const valorTotal = document.getElementById("valor--total");
    const avisoPessoas = document.getElementById("aviso-pessoas");

    inputDinheiro.value = ''
    inputPessoas.value = ''
    inputCustom.value = ''; // Define como vazio

    // Redefinir as áreas de gorjeta e total
    valorGorjeta.innerText = "0.00"; // Valor padrão
    valorTotal.innerText = "0.00"; // Valor padrão
    
    // Remover estilos de erro
    inputDinheiro.classList.remove("campo-invalido");
    inputPessoas.classList.remove("campo-invalido");
    avisoPessoas.style.display = 'none'
    
}