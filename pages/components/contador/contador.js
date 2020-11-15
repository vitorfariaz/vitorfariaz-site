import { useState } from 'react';

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}> Adicionar contador</button>
        </div>
    )
}

export default Contador