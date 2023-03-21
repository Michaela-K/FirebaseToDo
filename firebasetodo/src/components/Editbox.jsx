import React, {useState} from 'react';

const style = {
  form: `flex justify-between`,
  input: `border my-5 p-2 w-full text-xl rounded-md`,
  button: `ml-2 hover:text-pink-100`,
}

const Editbox = ({ todos, editTodo, setNewInput }) => {

 return (
  <div key={todos.id}>
   <form onSubmit={editTodo} className={style.form}>
    <input
     type="text"
     onChange={(e) => setNewInput(e.target.value)}
     className={style.input}
     placeholder="Edit your todo item"
    />
    <button onClick={editTodo} className={style.button}>
     {/* {<IoIosAddCircleOutline size={40} />} */}
    </button>
   </form>
  </div>
 );
};

export default Editbox;
