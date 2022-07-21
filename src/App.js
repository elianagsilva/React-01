import React, { Component } from "react";

class App extends Component{

  state = {
    
    nome: "Eliana",
    idade: 28,
    comidaFavorita: "acarajé" [
      {
        primeiraMusica: "Valerie",
        segundaMusica: "Rehab",
        terceiraMusica: "Stay"
      }

    ]

  }

  render(){
    return(
        <>
          <main>
            <div className="caixa">
              <p>Nome: {this.state.nome}</p>
              <p>Idade: {this.state.idade}</p>
              <p>comidaFavorita: {this.state.comidaFavorita}</p>
            </div>

      
          </main>
        </>
    )
  }
}

export default App;