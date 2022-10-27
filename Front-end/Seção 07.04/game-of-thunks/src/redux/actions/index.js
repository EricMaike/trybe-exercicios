export const REQUEST_PERSONAGEM = 'REQUEST_PERSONAGEM'

const reqPersonagem = (json) => {
  return {
    type: REQUEST_PERSONAGEM,
    payload: json,
  }
};

export const fetchPerson = (name) => {
  return (dispatch) => {
    return fetch(`https://anapioficeandfire.com/api/characters?name=${name}`)
      .then((response) => response.json())
      .then((json) => dispatch(reqPersonagem(json)))
  }
}