import React from 'react'

class TextArea extends React.Component {
  render() {
    const { handleChange, textArea } = this.props;
    
    return(
      <fieldset>
        <textarea name="textArea" value={ textArea } onChange={ handleChange } ></textarea>
      </fieldset>
    )
  }
}

export default TextArea;