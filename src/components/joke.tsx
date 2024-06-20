import  { useReducer } from 'react';
import './joke.scss';
import { JokeData } from '../types/Alltypes';
import { ratingFun } from '../utils/utils';


type IAction = { type: 'INCREMENT'; rate: number } | { type: 'DECREASE'; rate: number };


const reducer = (state: number, action: IAction): number => {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREASE': 
      return state - 1;
    default:
      return state;
  }
};

const Joke = (data: JokeData) => {
  
  const [rating, dispatch] = useReducer(reducer, data.rating);

  return (
    <div className='joke'>
      <h4 className='id'>Id: {data.id}</h4>
      <p className='data'>Desc: {data.joke}</p>
      <p className='rating'>Rating: {ratingFun(rating)}</p>
      <div className='buttons'>
        <button onClick={() => dispatch({ type: 'INCREMENT', rate: 1 })}>Increase Rating</button>
        <button onClick={() => dispatch({ type: 'DECREASE', rate: 1 })}>Decrease Rating</button>
      </div>
    </div>
  );
};

export default Joke;
