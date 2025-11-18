let playerChoice = null;
let computerChoice = null;
let result = null;
let isPlaying = false;
const score = { player: 0, computer: 0, draws: 0 };

const choices = [
  { id: 'rock', name: 'Pedra', emoji: '✊' },
  { id: 'paper', name: 'Papel', emoji: '✋' },
  { id: 'scissors', name: 'Tesoura', emoji: '✌️' }
];

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const drawsScoreEl = document.getElementById('draws-score');

const resultMessageEl = document.getElementById('result-message');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');

const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('btn-reset');

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex].id;
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw';

  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }

  return 'lose';
}

function getResultMessage() {
  if (result === 'win') return '🎉 Você Venceu!';
  if (result === 'lose') return '😢 Você Perdeu!';
  if (result === 'draw') return '🤝 Empate!';
  return 'Faça sua escolha';
}

function applyResultClasses() {
  resultMessageEl.classList.remove('win', 'lose', 'draw', 'neutral');

  if (result === 'win') resultMessageEl.classList.add('win');
  else if (result === 'lose') resultMessageEl.classList.add('lose');
  else if (result === 'draw') resultMessageEl.classList.add('draw');
  else resultMessageEl.classList.add('neutral');
}

function updateScoreboard() {
  playerScoreEl.textContent = score.player;
  computerScoreEl.textContent = score.computer;
  drawsScoreEl.textContent = score.draws;
}

function setButtonsDisabled(disabled) {
  choiceButtons.forEach(btn => {
    btn.disabled = disabled;
  });
}

function handleChoiceClick(event) {
  if (isPlaying) return;

  const choiceId = event.currentTarget.getAttribute('data-choice');
  if (!choiceId) return;

  isPlaying = true;
  setButtonsDisabled(true);

  playerChoice = choiceId;
  computerChoice = null;
  result = null;

  const chosen = choices.find(c => c.id === playerChoice);
  playerChoiceEl.textContent = chosen ? chosen.emoji : '—';

  computerChoiceEl.textContent = '❓';
  resultMessageEl.textContent = 'Computador está escolhendo...';
  resultMessageEl.classList.remove('win', 'lose', 'draw', 'neutral');

  setTimeout(() => {
    computerChoice = getComputerChoice();
    const comp = choices.find(c => c.id === computerChoice);
    computerChoiceEl.textContent = comp ? comp.emoji : '—';

    result = determineWinner(playerChoice, computerChoice);

    if (result === 'win') score.player += 1;
    if (result === 'lose') score.computer += 1;
    if (result === 'draw') score.draws += 1;

    updateScoreboard();

    resultMessageEl.textContent = getResultMessage();
    applyResultClasses();

    resetButton.classList.remove('hidden');

    isPlaying = false;
    setButtonsDisabled(false);
  }, 1500);
}

function resetGame() {
  playerChoice = null;
  computerChoice = null;
  result = null;

  playerChoiceEl.textContent = '—';
  computerChoiceEl.textContent = '—';
  resultMessageEl.textContent = 'Faça sua escolha';
  applyResultClasses();

  resetButton.classList.add('hidden');
}

choiceButtons.forEach(btn => {
  btn.addEventListener('click', handleChoiceClick);
});

resetButton.addEventListener('click', resetGame);

resetGame();
updateScoreboard();
