// import { Component, StrictMode } from 'react';
import './App.css';

// const Header = () => {
//   return <h2>Hello world!</h2>
// }

// const Field = () => {
//   const holder = 'Enter here';
//   const styleField = {
//     width: '300px'
//   };
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styleField} />
// }


// class Field extends Component {
//   render() {
//     const holder = 'Enter here';
//     const styleField = {
//       width: '300px'
//     };
//     return <input
//       placeholder={holder}
//       type="text"
//       style={styleField} />
//   }
// }

// function Btn() {
//   const text = 'Login.';
//   const logged = true;

//   return <button>{logged ? 'Enter' : text}</button>
// }

// function WhoAmI(props) {
function WhoAmI({ name, surname, link }) {
  return (
    <div>
      {/* <h1>Wy name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a> */}

      {/* <h1>Wy name is {name.firstName}, surname - {surname}</h1> */}
      <h1>Wy name is {name.firstName}, surname - {surname()}</h1>
      <a href={link}>My profile</a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={{ firstName: 'John' }} surname={()=>{return "Smith"}} link='https://github.com/mihailsinM' />
      {/* <WhoAmI name={{ firstName: 'Alex' }} surname='Smith' link='https://github.com/mihailsinM' /> */}
      {/* <WhoAmI name={{ firstName: 'Miha' }} surname='Smith' link='https://github.com/mihailsinM' /> */}
      {/* <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn /> */}
    </div>
  );
}
// export { Header };
export default App;
