import React, { useEffect, useState } from 'react'
import {IoIosAddCircleOutline} from 'react-icons/io'
import Todo from './Todo'
import {db} from './../firebase'
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore'

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
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState(' ');

  //Create todo
  const createTodo =async(e) => {
    e.preventDefault(e)
    if(input === ''){
      alert("Please enter a valid To Do List Item")
      return
    }
    await addDoc(collection(db, 'todos'),{  //here it adds to the database or creates a database named "todos" if it doesnt exist
      text: input,
      completed: false,  //default to false
    })
    setInput('')  //????
  }


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
  const toggleComplete = async(todos) => {
    await updateDoc(doc(db, 'todos', todos.id),{  //doc refers to listItem
      completed: !todos.completed
    })
  }


  //Delete todo
  const deleteTodo = async(id)=>{
    await deleteDoc(doc(db, 'todos', id))
  }

  return (
    <div>
      <div className={style.container}>
        <div>
          <h3 className={style.heading}>To Do List</h3>
          <p className={style.count}>{`You have ${todos.length} items left`}</p>
          <form onSubmit={createTodo} className={style.form}>
            <input type="text" onChange={(e)=> setInput(e.target.value)} className={style.input} placeholder="Another thing to do"/>
            <button onClick={createTodo} className={style.button}>
              {<IoIosAddCircleOutline size={40}/>}
            </button>
          </form>
          <ul>
          {todos.map((todos, index) =>(
              <Todo key={index} todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList