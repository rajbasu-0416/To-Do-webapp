import "./App.css";
import Header from "./MyComponents/Header";
import { Todo } from "./MyComponents/Todo";
import Footer from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    // let index = todo.indexOf(todo);
    // todo.splice(index,1);

    // setTodo(todo.filter((e)=>{
    //   return e!==todo;
    // }));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if (todo.length === 0) {
      sno = 0;
    } else {
      let sno = todo[todo.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todo, myTodo]);
    console.log(myTodo);
  };
  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <Header title="My Todo List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todo todo={todo} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
