import React from "react";
import PropTypes from "prop-types";
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

  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, idx) => (
          <li
            key={todo.id}

          >
            {todo.idx}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
