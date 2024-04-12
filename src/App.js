import React, { useState, useEffect } from 'react';
import {GridBox} from './GridBox';
import {KeyCapture } from './KeyCapture'

function App() {
  const [bindings, setBindings] = useState({});
  const [keyPressed, setKeyPressed] = useState('');


  useEffect(function(){
    console.log('Sending Bindings: ', bindings);
    // todo make actual api call
  }, [bindings])

  const boxes = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
    <div>
      Max's PMK
      <div style={{ width: '355px', position: 'relative', border: '1px solid black' }}>
        {boxes.map((index) => (
          <GridBox key={index} binding={bindings[index] ?? null} setBinding={() => {
            setBindings({...bindings, [index]: keyPressed})
          }}>
              {bindings[index] ?? 'unbound' } 
          </GridBox>
        ))}
      </div>
    <div><KeyCapture keyPressed={keyPressed} setKeyPressed={setKeyPressed} /></div>
    </div>
  );
}

export default App;


// 

/**
 * 
 * React app -> server -> micro controller
 * 
 * micro controller press -> to system
 * 
 * 
 * Micro controller: constantly reading the config.json
 */