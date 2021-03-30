import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements (as document.querySelector)

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDevault()
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }

  useEffect(()=>{
    console.log(refContainer.current)
    refContainer.cureent.focus()
  })

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/>
        </div>
        <button type='submit'>Submit</button>
      </form>

      <div ref={divContainer}>hello world</div>
    </>
  )
};

export default UseRefBasics;
