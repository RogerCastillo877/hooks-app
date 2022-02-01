import React, { useLayoutEffect ,useRef, useState } from 'react';

import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    // console.log(state);
    const { quote } = !!data && data[0];
    // console.log( quote);

    const pTag = useRef()
    const [boxsize, setBoxsize] = useState({})

    useLayoutEffect(() => {
       setBoxsize(pTag.current.getBoundingClientRect() );
    }, [])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            
            <blockquote className="blockquote text-end">
                <p className="mb-3" ref={ pTag }> { quote }</p>
            </blockquote>

            <pre>{ JSON.stringify( boxsize, null, 3 ) }</pre>
            
            <button
                class="brn btn-primary"
                onClick={increment}>
                    Siguiente Quote
            </button>

        </div>
    )
}
