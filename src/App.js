
import './App.css';
import { useState } from 'react';
import ListTask from './Components/ListTask';
import AddTask from './Components/AddTask';

function App() {
  const [items, setItems] = useState([]);


  return (
    <div className='App'>
      <ListTask items={items} setItems={setItems}/>
      <AddTask items={items} setItems={setItems}/>
    </div>

  );
}

export default App;
