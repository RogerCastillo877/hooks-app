import React, { useState, useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formstate, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formstate;

    useEffect(() => {
        // console.log('Simple');  
    }, []);
    
    useEffect(() => {
        // console.log('Form');   
    }, [formstate]);
    
    useEffect(() => {
        // console.log('email');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formstate,
            [ target.name ]: target.value
        })
    }

    return (
        <>
           <h1>UseEffect</h1>
           <hr />
           <div className="form-group">
               <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    autoComplete="off"
                    vale={ name }
                    onChange={ handleInputChange }
               />
           </div>

           <div className="form-group">
               <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@email.com"
                    autoComplete="off"
                    vale={ email }
                    onChange={ handleInputChange }
               />
           </div>

           { ( name === '123' ) && <Message /> }
        </>
    )
}
