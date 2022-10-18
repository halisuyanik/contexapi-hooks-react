import React,{useContext, useState} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoListContext } from '../contexts/TodoListContext';


const TodoList=()=>{
    const [todo, setTodo]=useState('');
    const{isDarkTheme, lightTheme, darkTheme, changeTheme, }= useContext(ThemeContext);
    const theme=isDarkTheme?darkTheme:lightTheme;
    const  {todos, addTodo, removeTodo}=useContext(TodoListContext);
    const onFormSubmit=e=>{
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };
    const handleRemoveTodo=e=>{
        const id=e.target.id;
        removeTodo(id);
    }
    return(
        <div style={{background:theme.background, color:theme.text,  textAlign:'center'}} className='ui list'>
            {
                todos.length?(
                    todos.map(todo=>{
                    return <div className='ui'><p key={todo.id}  className='item'>{todo.text}</p>
                    <div class="ui icon button" id={todo.id} onClick={handleRemoveTodo}>
    <i class="trash icon"></i>
  </div>
                    </div>
                    })):(<div>you have no todos</div>)
            }
            <form onSubmit={onFormSubmit}>
                <label htmlFor='todo'>add todo:</label>
                <div className='ui input focus'>
                    <input id='todo' value={todo}  type="text" onChange={(e)=>setTodo(e.target.value)} />
                </div>
                <input className='ui purple button' type='submit' value='add new todo' style={{marginRight:'4px'}}></input>

            </form>
            <button className='ui button primary' onClick={changeTheme}>change the theme</button>
        </div>
    )
};
export default TodoList;