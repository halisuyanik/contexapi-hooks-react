import React from 'react';
import './index.css'
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {
  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
            <TodoListContextProvider>          
              <Navbar></Navbar>
              <TodoList></TodoList>  
            </TodoListContextProvider>
          </ThemeContextProvider>
        </AuthContextProvider>            
      </div>   
    </div>
  );
}

export default App;
