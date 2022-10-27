import React from "react";
import { connect } from "react-redux";
import { fetchPerson } from "./redux/actions";

class App extends React.Component {
  state = {
    personagem: '',
  };

  onChange = ({ target }) => {
    this.setState({ personagem: target.value });
  };

  onClick = () => {
    const { personagem } = this.state;
    const { dispatch } = this.props;
    dispatch(fetchPerson(personagem))
  };

  render() {
    const { info: { name, gender, culture, born } } = this.props;
    return (
    <div>
      <h1>Personagens de Game of Thrones</h1>
      <form>
        <input
          placeholder="Personagem"
          onChange={ this.onChange }
        />
        <button
          type="button"
          onClick={ this.onClick }
        >
          Buscar
        </button>
      </form>
      { name && 
      <div>
      <h1>{name}</h1> 
      <h2>{gender}</h2>
      <h2>{culture}</h2>
      <h2>{born}</h2>
      </div>
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  info: { ...state.personagem[0]}
})

export default connect(mapStateToProps)(App);
