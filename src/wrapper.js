import Screen from './screen.js'
import Buttons from './buttons'

import React,{ useState } from 'react';
const Wrapper = () => {
  const [result, setResult] = useState('');
  return (
      <div className="calculator">
            <Screen result={result}>
             
            </Screen>
            <Buttons setResult={setResult} result={result}>
               
            </Buttons>
      </div>
  );

}
export default  Wrapper;