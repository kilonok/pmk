import React, { useState } from 'react';

export const KeyCapture = ({keyPressed, setKeyPressed}) => {
  
    function handleKeyDown (event) {
    console.log(event)
    if (event.code == "Backspace") {
        setKeyPressed(undefined);
    } else {
        const keyName = event.key.toUpperCase();
        event.preventDefault(''); 
        setKeyPressed(`${event.ctrlKey ? 'CTRL +' : ''} ${event.shiftKey ? 'SHIFT +' : ''} ${event.altKey ? 'ALT +' : ''} ${keyName}`.replace(/ /g, ''));
    }
  }

  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} value="Press keys here" />
      <p>{keyPressed || 'No key combination pressed yet.'}</p>
    </div>
  );
}
