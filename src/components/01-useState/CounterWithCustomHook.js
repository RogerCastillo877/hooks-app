import React from 'react';
import './count.css'
import { useCounter } from './hooks/useCounter';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter( 100 );

    return (
        <>
          <h1>counter with custom hook { state }</h1>
          <hr />
          <button className="btn" onClick={ () => increment(2) }>+ 1</button>
          <button className="btn" onClick={ reset }>Reset</button>
          <button className="btn" onClick={ () => decrement(2) }>- 1</button>
        </>
    )
}
