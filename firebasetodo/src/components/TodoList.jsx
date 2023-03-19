import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo'

const style = {
  // bg: `h-screen w-screen p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...`
  bg: `h-screen w-screen p-4 bg-gray-200 bg-[url("https://www.transparenttextures.com/patterns/purty-wood.png")]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 text-slate-100 bg-gradient-to-r from-green-300 to-blue-500 hover:from-yellow-400 hover:to-pink-500 ...`,
  count: `text-center p-2`,
}

const TodoList = () => {
  return (
    <div>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" className={style.input} placeholder="Another thing to do"/>
          <button className={style.button}>
            <AiOutlinePlus size={30}/>
          </button>
        </form>
        <ul>
          <Todo/>
        </ul>
      </div>
    </div>
  )
}

export default TodoList