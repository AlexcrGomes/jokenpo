function play() {
    //RANDOM RESULT
    const jogo = ['Rock','Paper','Scissors']
    const randomChoice = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min
    const randomResult = () =>
        jogo[randomChoice(0, jogo.length - 1)]
    var machine = randomResult()
    
    //PLAYER'S CHOICE
    var playChoice = document.getElementsByName("option")
    var choice = ""
    if (playChoice[0].checked) {
        choice = "Rock"
    } else if (playChoice[1].checked) {
        choice = "Paper"
    } else if (playChoice[2].checked) {
        choice = "Scissors"
    }

    //GAME LOGIC
    var result = ""
    
    if (playChoice[0].checked && machine == 'Rock') {
        result = "Empate"
    }   else if (playChoice[0].checked && machine == 'Paper') {
        result = "Derrota"
    }   else if (playChoice[0].checked && machine == 'Scissors') {
        result = "Vitoria"
    }
    
    if (playChoice[1].checked && machine == 'Rock') {
        result = "Vitoria"
    }   else if (playChoice[1].checked && machine == 'Paper') {
        result = "Empate"
    }   else if (playChoice[1].checked && machine == 'Scissors') {
        result = "Derrota"
    }

    if (playChoice[2].checked && machine == 'Rock') {
        result = "Derrota"
    }   else if (playChoice[2].checked && machine == 'Paper') {
        result = "Vitoria"
    }   else if (playChoice[2].checked && machine == 'Scissors') {
        result = "Empate"
    }

    //GAME ANSWER
    window.alert(`You chose: ${choice},\nThe machine chose: ${machine},\nThen, the result is: ${result}!`)

    //ASK IF YOU WANT TO PLAY AGAIN
    function refresh() {
        window.location.reload()
    }
    function exit() {
        window.close()
    }
    var resetGame = window.confirm('Would you want to play again?   ')
    if (resetGame == true) {
        refresh()
    } else {
        alert('End game')
        exit()
    }

    }
    