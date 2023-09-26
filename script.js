function jogar() {
    //RESULADO ALEATORIO
    const jogo = ['Pedra','Papel','Tesoura']
    const randomChoice = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min
    const resAleatorio = () =>
        jogo[randomChoice(0, jogo.length - 1)]
    var computador = resAleatorio()
    
    //ESCOLHA DO JOGADOR
    var fescolha = document.getElementsByName("opc")
    var escolha = ""
    if (fescolha[0].checked) {
        escolha = "Pedra"
    } else if (fescolha[1].checked) {
        escolha = "Papel"
    } else if (fescolha[2].checked) {
        escolha = "Tesoura"
    }

    //REGRAS DO JOGO
    var resultado = "oi"
    
    if (fescolha[0].checked && computador == 'Pedra') {
        resultado = "Empate"
    }   else if (fescolha[0].checked && computador == 'Papel') {
        resultado = "Derrota"
    }   else if (fescolha[0].checked && computador == 'Tesoura') {
        resultado = "Vitoria"
    }
    
    if (fescolha[1].checked && computador == 'Pedra') {
        resultado = "Vitoria"
    }   else if (fescolha[1].checked && computador == 'Papel') {
        resultado = "Empate"
    }   else if (fescolha[1].checked && computador == 'Tesoura') {
        resultado = "Derrota"
    }

    if (fescolha[2].checked && computador == 'Pedra') {
        resultado = "Derrota"
    }   else if (fescolha[2].checked && computador == 'Papel') {
        resultado = "Vitoria"
    }   else if (fescolha[2].checked && computador == 'Tesoura') {
        resultado = "Empate"
    }

    //RESPOSTA DO JOGO
    window.alert(`Você escolheu: ${escolha},\na maquina escolheu: ${computador},\nlogo, o resultado é: ${resultado}!`)

    //PERGUNTAR DE DESEJA JOGAR NOVAMENTE
    function atualizar() {
        window.location.reload()
    }
    function sair() {
        window.close()
    }
    var retorno = window.confirm('Deseja jogar novamente?')
    if (retorno == true) {
        atualizar()
    } else {
        alert('Fim do jogo')
        sair()
    }

    }
    