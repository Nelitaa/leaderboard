const UL = document.querySelector('ul');

const RENDER_SCORE = (name, number) => {
  const LI = document.createElement('li');
  LI.className = 'score-item';
  LI.innerHTML = `${name}: ${number}`;
  UL.appendChild(LI);
};

export default RENDER_SCORE;