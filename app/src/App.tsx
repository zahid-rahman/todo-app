import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './ui/InputBox';
import Button from './ui/Button';
import Todos from './components/Todos';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getAllTodoList() {
      const response = await fetch('http://localhost:8000/api/todo/all')
      const data = await response.json();
      console.log(data);
      setData(data)
    }
    getAllTodoList()
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-4">
        Todo app
      </h1>
      <div className="text-center">
        <InputBox type="text" placeholder="Enter item"/>
        <Button onClick={() => alert('clicked')}>Add</Button>
      </div>

      <div className="flex flex-col p-2">
        <Todos todos={data}/>
      </div>
    </div>
  );
}

export default App;
