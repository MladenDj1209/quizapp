import React, {createContext, useReducer} from 'react';
import Reducer from '../reducers/Reducer';
import Questions from '../static/questions';

const initalState = {
  posts: [],
  error: null,
  questions: Questions
}

const Store = ({children}) => {
  const[state, dispatch] = useReducer(Reducer, initalState);
  return (
    <Context.Provider value = {[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

export const Context = createContext(initalState);
export default Store;