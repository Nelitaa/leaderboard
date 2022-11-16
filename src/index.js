import './style.css';

const scores = [
  { name: 'Alice', score: 96 },
  { name: 'Bob', score: 80 },
  { name: 'Cindy', score: 91 },
  { name: 'Dennis', score: 81 },
  { name: 'Ellen', score: 96 },
  { name: 'Frank', score: 88 },
  { name: 'George', score: 90 },
];

const recentScoresUl = document.querySelector('#scores-list');

scores.forEach((score) => {
  const scoreLi = document.createElement('li');
  scoreLi.textContent = `${score.name}: ${score.score}`;
  recentScoresUl.appendChild(scoreLi);
});