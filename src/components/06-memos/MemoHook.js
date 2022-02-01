import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);
   

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            {/* <p>{ heavyProcess( counter ) }</p> */}
            <p>{ memoHeavyProcess }</p>

            <button
                className="btn btn-primary"
                onClick={ increment }>
                +1
            </button>

            <button
                className="btn btn-outline-primary ms-3"
                onClick={() => {
                    setShow( !show );
                }}>
                    Show / Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
