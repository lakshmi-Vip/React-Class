import React, {useReducer, useState} from 'react';

// const intitialValue = {count: 0};
// const reducer = (state,action) =>{
//   switch(action.type){
//     case 'increment' :
//         return {count: state.count +1};
//     case 'decrement' :
//         return {count: state.count -1};
//     case 'reset' :
//         return {count: 0};
//     default:
//         throw new Error('Unknown action type');
//   }
// }


// const Reducer = () =>{
// const [state, dispatch] = useReducer(reducer,intitialValue)
//     return(
//         <>
//         <h3>Reducer Hook Counter: {state.count}</h3>
//         <button onClick={() => dispatch({type: 'increment'})}>ADD</button>
//         <button onClick={() => dispatch({type: 'decrement'})}>SUB</button>
//         <button onClick={() => dispatch({type:'reset'})}>RESET</button>
//         </>
//     )
// }


const initialState = { todo: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add Todo':
      return { ...state, todo: [...state.todo, action.payload] };
    case 'Delete Todo':
      return {
        ...state,
        todo: state.todo.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if(inputValue.trim()!== ''){
      dispatch({ type: 'Add Todo', payload: inputValue });
    //   setInputValue('');
    }
  };

  return (
    <>
      <p>To Do Reducer Hook</p>
      <input
        type="text"
        placeholder="Enter your todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <h4>Todo List</h4>
      <ul>
        {state.todo.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button
              onClick={() => dispatch({ type: 'Delete Todo', payload: index })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};


export default Reducer;

