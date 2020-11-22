import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super()
        this.state = {
            contador: 60*25
        }
    }

    transformaEmTempo = (segundos) => {
        var date = new Date(0);
        date.setSeconds(segundos); // specify value for SECONDS here
        return date.toISOString().substr(11, 8);
    }

    iniciarCountdown = () => {
        setInterval(() => {
            this.setState({ contador: this.state.contador - 1 })
        }, 1000);
    };

    render() {
        return (
            <div>
                <div>{this.transformaEmTempo(this.state.contador)}</div>
                <button >Iniciar contador</button>
            </div>
        )
    };
}

export default Contador