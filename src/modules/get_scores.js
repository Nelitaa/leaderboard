const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'e9htu7UnsHXoVkpoljqO';

const GET_SCORES = async () => {
  const RESPONSE = await fetch(`${URL}games/${GAME_ID}/scores/`);
  const DATA = await RESPONSE.json();
  return DATA;
};

export default GET_SCORES;