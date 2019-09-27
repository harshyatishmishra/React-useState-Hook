import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  //setPersonState override the state on merge it So, manually you have to do
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Harsh", age: 22 },
      { name: "Harsh Mishra", age: 44 }
    ],
    otherState: 'someone'
  });

  const [otherState, setOtherState] = useState('someother value of state');

  const switchAgeHandler = () => {
    setPersonState({
      persons: [
        { name: "Harsh", age: 99 },
        { name: "Harsh Mishra", age: 77 }
      ],
      //setPersonState override the state on merge it So, manually you have to do
      // otherState: personState.otherState   OR use const [otherState, setOtherState] = useState('someother value of state');
    })
  }
  const mouseOverHandler = () => {
    //console.log('Mouse over');
    setPersonState({
      persons: [
        { name: "Harsh", age: 992 },
        { name: "Harsh", age: 992 }
      ],
      //setPersonState override the state on merge it So, manually you have to do
      // otherState: personState.otherState   OR use const [otherState, setOtherState] = useState('someother value of state');
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header><br />

      <button onMouseOver={mouseOverHandler} onClick={switchAgeHandler}>Switch Age</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
    </div>
  );
}

export default app;
