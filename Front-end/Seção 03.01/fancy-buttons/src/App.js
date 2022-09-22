// Crie uma aplicação React com npx create-react-app fancy-buttons, que atenda ao seguinte critérios: O componente App.jsdeve ser alterado para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log().
// ⚠ Não se preocupe com a sintaxe correta para funções de eventos por enquanto.

// Faça com que sua aplicação anterior exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log().

// import React from 'react';
// import './App.css';

// const click1 = () => {
//   console.log('Hello');
// }

// const click2 = () => {
//   console.log('Hi');
// }

// const click3= () => {
//   console.log('Good Morning');
// }

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <button onClick={ click1 }>Btn1</button>
//         <button onClick={ click2 }>Btn2</button>
//         <button onClick={ click3 }>Btn3</button>
//       </>
//     )
//   }
// }

// export default App;


// Utilizando o mesmo código do exercício anterior, declare dentro da classe <App> as funções que, anteriormente, foram declaradas fora da classe.

// Faça com que as funções criadas no exercício anterior possuam acesso ao objeto this.

// import React from 'react';
// import './App.css';

// class App extends React.Component {
//   click1 = () => {
//     console.log('Hello');
//     console.log(this);
//   };
  
//   click2 = () => {
//     console.log('Hi');
//     console.log(this);
//   };
  
//   click3= () => {
//     console.log('Good Morning');
//     console.log(this);
//   };

//   render() {
//     return (
//       <>
//         <button onClick={ this.click1 }>Btn1</button>
//         <button onClick={ this.click2 }>Btn2</button>
//         <button onClick={ this.click3 }>Btn3</button>
//       </>
//     )
//   }
// }

// export default App;

// Agora você vai converter a aplicação desenvolvida nos exercícios anteriores para uma que conta o número de cliques dados em cada botão!
// Defina um estado inicial para a contagem de cada botão.

// 👀 De olho na dica: lembre-se que você pode definir três chaves, uma para cada botão!

// Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

// Por fim, incremente a contagem de um botão sempre que ele for clicado.

import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    cliqueBtn1: 0,
    cliqueBtn2: 0,
    cliqueBtn3: 0,
  }

  color = (num) => {
    if (num % 2 === 0) {
      return 'green';
    } else {
      return 'white';
    }
  }

  click1 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliqueBtn1: estadoAnterior.cliqueBtn1 +1,
    }));
  };
  
  click2 = () => {
    this.setState((estadoAnterior, _props) => ({
      cliqueBtn2: estadoAnterior.cliqueBtn2 +1,
    }));
  };
  
  click3= () => {
    this.setState((estadoAnterior, _props) => ({
      cliqueBtn3: estadoAnterior.cliqueBtn3 +1,
    }));
  };

  render() {
    const { cliqueBtn1, cliqueBtn2, cliqueBtn3 } = this.state;
    return (
      <>
        <button onClick={ this.click1 } style={ { backgroundColor: this.color(2) } } >Btn1 { cliqueBtn1 }</button>
        <button onClick={ this.click2 } style={ { backgroundColor: this.color(1) } } >Btn2 { cliqueBtn2 } </button>
        <button onClick={ this.click3 } style={ { backgroundColor: this.color(4) } } >Btn3 { cliqueBtn3 } </button>
      </>
    )
  }
}

export default App;