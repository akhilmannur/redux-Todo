import React from 'react'
import AddToDo from './Cards/AddToDo'
import ListToDo from './Cards/ListTodo'

const Home = () => {
  return (
    <div>
      <AddToDo/>
      <ListToDo/>
    </div>
  )
}

export default Home