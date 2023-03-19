import React, { useState } from 'react'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Todo from './Todo'

const style = {
  // bg: `h-screen w-screen p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...`
  bg: `h-screen w-screen p-4 bg-gray-200 bg-[url("https://www.transparenttextures.com/patterns/purty-wood.png")]`,
  container: `grid h-auto place-items-center bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border my-5 p-2 w-full text-xl rounded-md`,
  button: `ml-2 hover:text-blue-400`,
  count: `text-center p-2`,
}

const TodoList = () => {
  const [todos, setTodos] = useState(['study', 'clean']) 
  return (
    <div>
      <div className={style.container}>
        <div>
          <h3 className={style.heading}>To Do List</h3>
          <p className={style.count}>{`You have ${todos.length} items left`}</p>
          <form className={style.form}>
            <input type="text" className={style.input} placeholder="Another thing to do"/>
            <button className={style.button}>
              {<IoIosAddCircleOutline size={40}/>}
            </button>
          </form>
          <ul>
          {todos.map((todos, index) =>(
              <Todo key={index} todos={todos} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList