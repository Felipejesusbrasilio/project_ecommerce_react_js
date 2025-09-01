const initialState = {
  sacola: []
};

function Store(state = initialState, action) {
  if (action.type === 'ADICIONAR_ITEM') {
    return { ...state, sacola: [action.payload, ...state.sacola] };
  }

  if (action.type === 'DELETAR-ITEM') {
    return {
      ...state,
      sacola: state.sacola.filter(item => item.nome !== action.payload.nome)
    };
  }

  // se nenhuma action for tratada, retorna o estado atual
  return state;
}

export default Store;
