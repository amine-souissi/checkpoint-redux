import React from 'react';
import './App.css';
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import Filter from "./Components/Filter";


function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <AddTask />
      <ListTask />
      <Filter />
    </div>
  );
}


export default App;
