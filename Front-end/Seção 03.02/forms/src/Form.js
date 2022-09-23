import React from 'react'
import Select from './Select';
import TextArea from './TextArea';

class Form extends React.Component {
  state = {
    textArea: '',
    select: '',
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value, });
  }

  render() {
    const { textArea, select } = this.state;
    return (
      <div>
        <form>
          <Select handleChange={this.handleChange} value={select}/>

          <fieldset>
            <input name="input1" onChange={ this.handleChange } ></input>
          </fieldset>

          <fieldset>
            <input name="input2" onChange={ this.handleChange } ></input>
          </fieldset>

          <TextArea handleChange={this.handleChange} value={textArea}/>

          <fieldset>
            <input name="checkbox" type={ "checkbox" } onChange={ this.handleChange } ></input>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form;
