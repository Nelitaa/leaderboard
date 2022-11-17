const NAME_INPUT = document.querySelector('#name');
const NUMBER_INPUT = document.querySelector('#number');

const CLEAR_INPUTS = () => {
  NAME_INPUT.value = '';
  NUMBER_INPUT.value = '';
};

export { NAME_INPUT, NUMBER_INPUT, CLEAR_INPUTS };