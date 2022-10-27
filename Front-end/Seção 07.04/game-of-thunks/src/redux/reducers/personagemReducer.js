const INITIAL_STATE = {
  personagem: '',
}

const personagemReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case 'REQUEST_PERSONAGEM':
      return { ...state, personagem: payload }
    default: 
      return state;
  }
}

export default personagemReducer;