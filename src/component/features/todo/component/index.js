import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "eat",
      status: "completed",
    },
    {
      id: 2,
      title: "sleep",
      status: "new",
    },
    {
      id: 3,
      title: "code",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterList, setFilter] = useState('all');

  const handleTodoClick = (todo, idx) => {
    //clone cureent array to the new one
    const newTodoList = [...todoList];
    //toggle state
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    //update totolist
    setTodoList(newTodoList);
  };

  const handleALL = () => {
    setFilter ('all')
  };
  const handleCompleted = () => {
    setFilter ('completed')
  };
  const handleNew = () => {
    setFilter ('new')
  };
  const renderList =todoList.filter(todo =>filterList ==='all'|| filterList===todo.status)

  return (
    <div>
      <h3>todoList</h3>
      <TodoList todoList={renderList} onToClick={handleTodoClick} />

      <button onClick={handleALL}>handleALL</button>
      <button onClick={handleNew}>handleNew</button>
      <button onClick={handleCompleted}>handleCompleted</button>
    </div>
  );
}

export default TodoFeature;
