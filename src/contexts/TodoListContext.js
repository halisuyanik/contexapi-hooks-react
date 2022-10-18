import React, {createContext, useState} from 'react';

export const TodoListContext=createContext();

const TodoListContextProvider=({children})=>{
    const [todos, setTodos]=useState([
        {text:'Plan', id:1},
        {text:'go for', id:2},
        {text:'go for a walk', id:3},
    ]);
    const addTodo=(todo)=>{
      setTodos([
        ...todos,
        {text:todo,id:todos.length+1}
      ]);  
    };
    const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>{
            return todo.id !==Number(id);
        }));
    };
    return(
        <TodoListContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </TodoListContext.Provider>
    );
};

export default TodoListContextProvider;