import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import React from 'react';
import EventPractice from './EventPractice';
import Validation from './ValidationSample';
import RefSample from './RefSample';

const App = () => {
  return (
    <div>
      <RefSample /><br></br>
      <Validation/>
      <EventPractice />
      {/* <Say />
      <Counter />
      <MyComponent/> */}
    </div>
  );
}


export default App;
