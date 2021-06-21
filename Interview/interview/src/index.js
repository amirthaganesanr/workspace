import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MyComponent = (props) => {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState();
  const [todoList, setTodoList] = useState([]);
  const [apiValue, setApiValue] = useState({});
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  // using async await
  const getData = async () => {
    const response = await fetch("https://mocki.io/v1/3eec5be8-13ac-44f8-962e-2a524b87a681");
    const body = await response.json();
    setApiValue(body);
  }

  //using then
  const getDataUsingThen = async () => {
    fetch("https://mocki.io/v1/3eec5be8-13ac-44f8-962e-2a524b87a681")
      .then(response => response.json())
      .then(body => setApiValue(body));
  }

  useEffect(() => {
  })

  const handleStatus = (item) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[item.key - 1].status = !updatedTodoList[item.key - 1].status;
    setTodoList(updatedTodoList);
  }

  const newColor = {
    color: 'red',
  }

  const oldColor = {
    color: 'black',
  }

  const timer = () => {
    setTime(new Date().toLocaleTimeString());
  }

  return (<div>
    <h1>My Component</h1>
    <div onClick={() => setCounter(counter + 1)}>Increment</div>
    <div>Counter Value: {counter}</div>
    <input onChange={(e) => setInputVal(e.target.value)} value={inputVal} type="text" />
    <div onClick={() => { inputVal && inputVal !== '' && setTodoList([...todoList, { value: inputVal, key: todoList.length + 1, status: false }]); setInputVal(''); }}>Add to List</div>
    <ul>{todoList.map(item => <li key={item.key} onClick={() => handleStatus(item)} style={item.status ? newColor : oldColor}>{item.value}</li>)}</ul>
    <div onClick={getData}>API Value: {apiValue.test}</div>
    <div onClick={() => setInterval(timer, 1000)}>Time now: {currentTime}</div>
  </div >);
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);

