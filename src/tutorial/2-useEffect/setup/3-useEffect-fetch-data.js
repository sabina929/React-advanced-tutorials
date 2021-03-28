import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {

const [users, seetUsers] = useState([])

const getUsers = async () => {
  const response = await fetch(url)
  const users = await response.json()
  seetUsers(users) 
}

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
