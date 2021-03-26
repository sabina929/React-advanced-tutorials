import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'jon',
    age: 24,
    message: 'random message'
  })

  // const [name, setName] = useState('jon')
  // const [age, setAge] = useState(24)
  // const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    setPerson({...person, message: 'winter is coming'})
    // setMessage("winter is coming")
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  )
};

export default UseStateObject;
