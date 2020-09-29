import React, { useState } from 'react';
import './App.scss';
import Dashboard from './pages/views/Admin/Dashboard';
import Routers from './routers';
// import TodoList from './TodoList';


function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'I love My Crush' },
  //   { id: 2, title: 'I love HL' },
  //   { id: 3, title: 'I love My Fa' },
  // ])

  // function handleTodoClick(todo) {
  //   console.log(todo);
  //   const index = TodoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;
  //   console.log(index);
  //   const newTodoList = [...TodoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
