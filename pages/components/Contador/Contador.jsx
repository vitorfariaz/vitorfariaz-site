import { useState } from 'react';

function Contador() {
    const [counter, setContador] = useState(1);

    function incrementarContador() {
        setContador(counter + 1);
    }

    function reset() {
        setContador(0);
    }

    return (
        <div>
            <div>{counter}</div>
            <br />
            <button onClick={incrementarContador}>Add</button>
            <br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Contador