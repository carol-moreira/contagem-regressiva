// definir o tempo final da contagem regressiva
const dataFinal = new Date("Octocer 8, 2024 00:00:00").getTime();
// new Date tem como função definir o tempo final da contagem regressiva
// getTime tem como função pegar esse valor

// função de atualização da contagem regressiva
function atualizaContagem() {

    const agora = new Date().getTime(); // calcula o tempo restante até a data final
    const diferenca = dataFinal - agora;

    // variáveis para calcular os dias, horas, minutos e segundos
    // Math.floor arredonda o número para baixo até o inteiro mais próximo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // os números estão entre parênteses pois se trata de uma solução matemática
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // atualiza os elementos html com os novos valores
    // o document.getElementById é usado para chamar o id do arquivo html e o conectar com o js
    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    // exibe uma mensagem quando a contagem terminar
    if (diferenca < 0) { // verifica se a variavel "diferenca" é menor que zero
        clearInterval(intervalo); // usada para parar as ações que estão sendo repetidas em intervalos de tempo definidos pela função "setInterval()", parando o intervalo que foi armazenado na variável intervalo
        document.getElementById('titulo').innerText = 'Contagem finalizada!'; // altera o texto id via id para "Contagem finalizada!"
    }
}

// atualiza a contagem regressiva a cada segundo
const intervalo = setInterval(atualizaContagem, 1000);
// setInterval é usada para chamar repetidamente uma função ou bloco de código até que clearInterval seja chamado
// atualizContagem é a função chamada a cada intervalo de tempo de 1000 milissegundos (1 segundo)
// intervalo é a variável que armazena o ID retornado pela função setInterval