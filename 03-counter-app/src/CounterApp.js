import React, {useState} from 'react';
import PropTypes from 'prop-types';  

const CounterApp = ( {valor = 10} ) => {
    /*BEWARE OF USING RESERVED WORDS FOR VARIABLE NAMES */
    const [counter, setCounter] = useState(valor);
    
    const handleAdd = () => {
        setCounter(counter+1);
    }
    const handleReset = () => {
        setCounter(valor);
    }
    const handleSubstract = () => {
        setCounter(counter-1);
    }

    return (
        <>
            {/*Fragment Start*/}
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    valor: PropTypes.number
}

export default CounterApp;