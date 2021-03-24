import React, { useState } from 'react';

// use
// useState is a function that reurns an array =======> [a variable, f]. Second element (f) controls the value of the variable
// cannot call conditionally

const UseStateBasics = () => {

  // const value = useState("asdfghj")[0]
  // const handler = useState("asdfghj")[1]
  // console.log(value, handler)

  const [text, setText] = useState('random title')

  const handleClick = () => {
    // setText('new title')
    if(text === "random title"){
      setText('new title')
    } else{
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
