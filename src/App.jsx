import React, { useReducer } from 'react';

// Función reductora
function reducer(state, action) {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'decrementar':
      return { contador: state.contador - 1 };
    case 'resetear':
      return { contador: 0 };
    default:
      return state;
  }
}

function Contador() {
  // useReducer recibe la función reductora y el estado inicial
  const [state, dispatch] = useReducer(reducer, { contador: 0 });

  return (
    <div>
      <h2>Contador: {state.contador}</h2>
      <button onClick={() => dispatch({ type: 'incrementar' })}>➕ Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrementar' })}>➖ Decrementar</button>
      <button onClick={() => dispatch({ type: 'resetear' })}>🔄 Resetear</button>
    </div>
  );
}

export default Contador;
