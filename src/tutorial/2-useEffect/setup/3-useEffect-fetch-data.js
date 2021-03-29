import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument
// useState (setValue()) always triggers re-rendering =====> useEffect


const UseEffectFetchData = () => {

const [users, setUsers] = useState([])

const getUsers = async () => {
  const response = await fetch(url)
  const users = await response.json()
  setUsers(users) 
}

// if second argument is an empty array, then it'll call the useEffect only onload event
useEffect(()=>{
  getUsers()
}, [])

  return (
    <>
      <h3>Github users</h3>
      <ul className='users'>
        {
          users.map((user) => {
            const {id, login, avatar_url,html_url} = user
            return (
              <li key={id}> 
                <img src={avatar_url} alt={login}/>
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>projfile</a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
};

export default UseEffectFetchData;
