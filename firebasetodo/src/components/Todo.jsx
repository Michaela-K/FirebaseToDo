import React, { useState } from 'react'
import {IoTrashOutline} from 'react-icons/io5'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import Editbox from './Editbox';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize rounded-md`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize rounded-md`,
  row: `w-full flex justify-between`,
  rowInner: `flex`,
  rowInner2: `w-10 flex justify-between`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center `,
};

const Todo = ({todos, toggleComplete, deleteTodo, editTodo, newInput, setNewInput}) => {

  //completed comes from the firebase database 
  return (
    <li className={todos.completed ? style.liComplete : style.li}> 
      <div className={style.row}>
        <div className={style.rowInner}>
          <input onChange={()=> toggleComplete(todos)} type="checkbox" checked={todos.completed ? 'checked' : ''}/>
          <p onClick={()=> toggleComplete(todos)} className={todos.completed ? style.textComplete : style.text}>{todos.text}</p>
        </div>
        <div className={style.rowInner2}>
          <button onClick={() => editTodo(todos)}>{<MdOutlineModeEditOutline  size={23} color="blue"/>}</button>
          <button onClick={() => deleteTodo(todos.id)}>{<IoTrashOutline size={23} color="crimson"/>}</button>
        </div>
      </div>
      {newInput === true && <Editbox todos={todos} editTodo={editTodo} setNewInput={setNewInput}/>}
    </li>
  )
}

export default Todo