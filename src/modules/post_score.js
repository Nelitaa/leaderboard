const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const GAME_ID = 'e9htu7UnsHXoVkpoljqO';

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

export default POST_SCORE;