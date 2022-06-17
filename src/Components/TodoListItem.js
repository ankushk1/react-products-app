import React from "react";
import PropTypes from 'prop-types'

const TodoListItem = ({
  todo,
  handleCompleted,
  onDeleteTodo,
  onEditTodo
}) => {
  return (
    <div>
      <li className={todo.isCompleted ? "isCompleted" : null}>
        <input type="checkbox" checked={todo.isCompleted} onClick={(e) => handleCompleted(e, todo.id)} />
        {todo.text}
        <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        <button onClick={() => onEditTodo(todo.id)}>Edit</button>
      </li>
    </div>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  todo : PropTypes.object, 
  handleCompleted : PropTypes.func
}

