import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';


// useReducer ( arguments =====> (reducer, defaultState) )
// reducer (is a function =====> (state, action) => {} )

// state (is an object)
// dispatch (is a function that takes action object as an arg. =====> ({type: 'ADD_ITEM', payload: newItem}) )

// defaultState (is an object)


import {reducer} from './reducer'

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(name) {
      const newPerson = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newPerson})
      setName('')
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }
  return (
    <>
    {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent}/>)
      }
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <button type="submit">Add item</button>
      </form>

      {state.people.map(person => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={()=>dispatch({type: 'REMOVE_ITEM', payload: person.id})}>remove</button>
          </div>
        )
      })}
    </>
  )
};

export default Index;
