import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onToClick: PropTypes.func,
};
TodoList.defaultProps = {
  todoList: [],
  onToClick: null,
};

function TodoList({ todoList, onToClick }) {
  const handleTodoClick = (todo, idx) => {
    if (!onToClick) return;
    onToClick(todo, idx);
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}
            className={classnames({
              "todo-item": true,
              new: todo.status === "new",
            })}
            onClick={() => handleTodoClick(todo, idx)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
