/* eslint-disable no-alert */
import './style.css';
import { NAME_INPUT, NUMBER_INPUT, CLEAR_INPUTS } from './modules/clear_inputs.js';
import GET_SCORES from './modules/get_scores.js';
import POST_SCORE from './modules/post_score.js';
import RENDER_SCORE from './modules/render.js';

const FORM = document.querySelector('form');
const REFRESH_BUTTON = document.querySelector('#refresh-button');

FORM.addEventListener('submit', async (event) => {
  event.preventDefault();
  const NAME = NAME_INPUT.value;
  const NUMBER = NUMBER_INPUT.value;
  const RESULT = await POST_SCORE(NAME, NUMBER);
  window.alert(RESULT.result);
  CLEAR_INPUTS();
  RENDER_SCORE(NAME, NUMBER);
});

REFRESH_BUTTON.addEventListener('click', async () => {
  const DATA = await GET_SCORES();
  DATA.result.forEach((score) => {
    RENDER_SCORE(score.user, score.score);
  });
});