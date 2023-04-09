import { Component } from 'react';
import './App.css';


class WhoAmI extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
      position: ''
    }

  }
  nextYear = () => {
    this.setState(state => ({ years: state.years + 1 }))
  }

  commitInputChanges = (e, color) => {
    console.log(color);
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;

    console.log(this);

    return (
      <>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name},
          surname - {surname},
          age - {years},
          position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Enter job title.</span>
          {/* <input type='text' onInput={this.commitInputChanges} /> */}
          <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
      </ >
    )
  }

}

function App() {
  return (
    <div className="App">
      <WhoAmI name='John' surname="Smith" link='https://github.com/mihailsinM' />
      <WhoAmI name='Alex' surname="Smith" link='https://github.com/mihailsinM' />
    </div>
  );
}
export default App;
