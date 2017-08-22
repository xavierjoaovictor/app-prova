/* Dependencies */
import React, {Component} from 'react';

/* Components */
import Input from '../../objects/input/input';
import firebase from 'firebase';

class NewQuestion extends Component {

  constructor(props) {
    super(props);

    this.state = {
      question: '',
      source: '',
      year: '',
      answers: {}
    }
  }

  onChangeInput(field, value) {
    switch (field) {
      case 'question':
        this.setState({
          question: value
        });
        break;
      case 'source':
        this.setState({
          source: value
        });
        break;
      case 'year':
        this.setState({
          year: value
        });
        break;
      case 'correctAnswer':
        this.setState((previousState) => {
          return {
            answers: {
              ...previousState.answers,
              correctAnswer: value
            }
          };
        });
        break;
      case 'answerTwo':
        this.setState((previousState) => {
          return {
            answers: {
              ...previousState.answers,
              answerTwo: value
            }
          };
        });
        break;
      case 'answerThree':
        this.setState((previousState) => {
          return {
            answers: {
              ...previousState.answers,
              answerThree: value
            }
          };
        });
        break;
      case 'answerFour':
        this.setState((previousState) => {
          return {
            answers: {
              ...previousState.answers,
              answerFour: value
            }
          };
        });
        break;
      case 'answerFive':
        this.setState((previousState) => {
          return {
            answers: {
              ...previousState.answers,
              answerFive: value
            }
          };
        });
        break;
      default:
        console.log('There is something wrong');
        break;
    }
  }

  submitQuestion() {
    firebase.database().ref('questions/').push(this.state);
  }

  render() {
    return (
      <div id="NewQuestion">
        <div className="container">
          <h2>New Question</h2>
          <p>On this section you're able to create AppProva questions.</p>

          <Input isHalf={false} id="question" text="Pergunta" placeholder="Insert here your question"
                 onChange={this.onChangeInput.bind(this)}/>

          <div className="twoColumnInputItem">
            <Input isHalf={true} id="source" text="Fonte" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
            <Input isHalf={true} id="year" text="Ano" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
          </div>

          <div id="Answers" className="inputItem">
            <p>Alternativas:</p>
            <Input isHalf={false} id="correctAnswer" isCorrectAnswer={true} placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
            <Input isHalf={false} id="answerTwo" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
            <Input isHalf={false} id="answerThree" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
            <Input isHalf={false} id="answerFour" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
            <Input isHalf={false} id="answerFive" placeholder="Insert here your question"
                   onChange={this.onChangeInput.bind(this)}/>
          </div>

          <div id="SubmitQuestionButton" onClick={this.submitQuestion.bind(this)}>
            Send Question
          </div>
        </div>
      </div>
    );
  }
}

export default NewQuestion;
