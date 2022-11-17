import './style.css';

const FORM = document.querySelector('form');
const NAME_INPUT = document.querySelector('#name');
const NUMBER_INPUT = document.querySelector('#number');
const UL = document.querySelector('ul');
const REFRESH_BUTTON = document.querySelector('#refresh-button');

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'e9htu7UnsHXoVkpoljqO';

const GET_SCORES = async () => {
  const RESPONSE = await fetch(`${URL}games/${GAME_ID}/scores/`);
  const DATA = await RESPONSE.json();
  return DATA;
};

const POST_SCORE = async (name, number) => {
  const RESPONSE = await fetch(`${URL}games/${GAME_ID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: number }),
  });
  const DATA = await RESPONSE.json();
  return DATA;
};

const REFRESH = async () => {
  const DATA = await GET_SCORES();
  UL.innerHTML = '';
  DATA.result.forEach((score) => {
    const LI = document.createElement('li');
    LI.innerHTML = `${score.user} : ${score.score}`;
    UL.appendChild(LI);
  });
};

const CLEAR_INPUTS = () => {
  NAME_INPUT.value = '';
  NUMBER_INPUT.value = '';
};

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = NAME_INPUT.value;
  const number = NUMBER_INPUT.value;
  const t = await POST_SCORE(name, number);
  console.log(t);
  CLEAR_INPUTS();
  await REFRESH();
});

REFRESH_BUTTON.addEventListener('click', REFRESH);