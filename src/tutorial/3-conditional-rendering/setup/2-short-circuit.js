import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setError] = useState(false)
  // const firstValue = text || 'hello world first';
  // const secondValue = text && 'hello world second';

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      {/* don't use this way */}
      {/* {if(){console.log('hello world')}} */}

      <h1>{text || 'jon snow'}</h1>
      <h1>{text && 'wildlings'}</h1>
      <button className="btn" onClick={()=>setError(!isError)}>Toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? (<p>There is an error...</p>) : (<div>
        <h2>There is no error</h2>
      </div>)}
    </>
  )
};

export default ShortCircuit;
