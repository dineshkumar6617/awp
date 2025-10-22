import React from 'react';
import Tenth from './questions/Tenth';
import NinethA from './questions/NinethA';
import NinethB from './questions/NinethB';
import Eighth from './questions/Eighth';
import Eleventh from './questions/Eleventh';
import Twelveth from './questions/Tweleveth';
import './App.css';
import Thirteen from './questions/Thirteen';
import Fifteen from './questions/Fifteen';
function App() {
  return (
    <div>
      <Eighth/>
      <NinethA a={5} b={10}/>
      <NinethB a={20} b={30}/>
      <Tenth/>
      <Eleventh/>
      <Twelveth/>
      <Thirteen/>
      <Fifteen/>
    </div>
  );
}

export default App;
