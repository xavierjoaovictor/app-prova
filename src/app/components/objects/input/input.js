/* Dependencies */
import React, {Component} from 'react';


class FullInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: '',
      inputStyle: ''
    }
  }

  componentDidMount() {
    this.setState({
      style: this.props.isHalf ? 'halfInput' : 'fullInput',
      inputStyle: this.props.isCorrectAnswer ? 'correctAnswer' : ''
    })
  }

  onChangeHandler() {
    let field = this.props.id;

    let value = document.getElementById(field).value;
    this.props.onChange(field, value);
  }
  render() {
    return (
      <div className={"inputItem " + this.state.style}>
        {this.props.text ? <p>{this.props.text}:</p> : null}
        <input id={this.props.id}
               type="text"
               className={"inputText" + this.state.inputStyle}
               placeholder={this.props.placeholder}
               onChange={this.onChangeHandler.bind(this)}/>
      </div>
    );
  }
}

export default FullInput;