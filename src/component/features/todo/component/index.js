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

  return (
    <div>
      <h3>todoList</h3>
      <TodoList todoList={todoList} onToClick={handleTodoClick} />
    </div>
  );
}

export default TodoFeature;
