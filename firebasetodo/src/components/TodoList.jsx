import React, { useEffect, useState } from 'react'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Todo from './Todo'
import {db} from './../firebase'
import {query, collection, onSnapshot} from 'firebase/firestore'

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
  const [todos, setTodos] = useState([]) 

  //Create todo
  //Read todo from Firebase
  useEffect(()=>{
    //define a path for the database
    const q = query(collection(db, 'todos'))
    //take a snapshot of firebase and read it out on the screen
    const unsubsribe = onSnapshot(q, (querySnapshot)=> {
      let todosArr =[]
      querySnapshot.forEach((listItem)=>{
        todosArr.push({...listItem.data(), id: listItem.id})  //pushing each obj in our array into the new array
      });
      setTodos(todosArr)
    })
    return () => unsubsribe()

  },[])
  //Update todo in firebase
  //Delete todo

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