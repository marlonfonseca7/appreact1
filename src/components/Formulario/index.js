import React from "react";
import Botao from "../Botao";
class Formulario extends React.Component {
    render(){
        return (
            <form>
                <div>
                    <label htmlFor="tarefa">
                        adicione um novo estudo
                    </label>
                    *
                    <input 
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="O que você deseja estudar?"
                        required>
                    
                    </input>
                </div>
                <div>
                    <label htmlFor="tempo">
                        adicione um novo estudo
                    </label>
                    *
                    <input 
                        type="time"
                        name="tempo"
                        step="1"
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required>
                    
                    </input>
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;