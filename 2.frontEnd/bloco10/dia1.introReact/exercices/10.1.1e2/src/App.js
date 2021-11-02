import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['editar site chales', 'configurar links e dominio', 'recastrar links pela internet', 'comprar moveis', 'comprar celular'];
const arrayTask = tasks.map((task)=>Task(task));

function App() {
  return React.createElement('ul', {className: 'my-tasks'}, Task(arrayTask))
}

/* ou
function App() {
  return (
    <ul> {Task(arrayTask)} </ul>
  )
}
 */


export default App;

/* 
function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}

const element = helloWorld("Jorge", "Maravilha");
const container = <div>{element}</div>; */