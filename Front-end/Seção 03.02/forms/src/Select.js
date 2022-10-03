import React from 'react'

class Select extends React.Component {
  render() {
    const { handleChange } = this.props;
    return(
      <fieldset>
          <select name="select" onChange={ handleChange } >
            <option>Brasil</option>
            <option>Alemanha</option>
          </select>
        </fieldset>
    )
  }
}

export default Select;
