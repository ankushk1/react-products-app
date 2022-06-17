import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import { v4 as uuidv4 } from "uuid";
import { useHistory, useLocation, useParams } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import { addTodo } from "../actions/todoactions";

const Todo = (props) => {
  // console.log("props called", props);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("All");
  const [isEditing, setIsEditing] = useState({
    flag: false,
    id: ""
  });

  const todoListData = useSelector((state) => state.todos);
  const [todos, setTodos] = useState(() => {
    const LocalStorageTodos = localStorage.getItem("todos");
    return todoListData.length > 0
      ? todoListData
      : JSON.parse(LocalStorageTodos) ?? [];
  });

  const dispatch = useDispatch();

  const onTodoAdd = async (e) => {
    setTodos([
      ...todos,
      { id: uuidv4().split("-")[0], text: input, isCompleted: false }
    ]);
    setInput("");
  };

  const onDeleteTodo = (id) => {
    const updatedArr = todos.filter((todo) => todo.id !== id);
    setTodos(updatedArr);
  };

  const onEditTodo = (id) => {
    setIsEditing({ ...isEditing, flag: true, id: id });
    const currTodos = [...todos];
    const todoItem = currTodos.find((todo) => todo.id === id);
    setInput(todoItem.text);
  };

  const onUpdateTodo = () => {
    const todoId = isEditing.id;
    const currTodos = [...todos];
    const todoItemIndex = currTodos.findIndex((todo) => todo.id === todoId);
    const todoItem = currTodos.find((todo) => todo.id === todoId);
    currTodos[todoItemIndex] = { ...todoItem, text: input };
    setTodos(currTodos);
    setInput("");
    setIsEditing({ ...isEditing, flag: false });
  };

  const handleCompleted = (e, id) => {
    const currTodos = [...todos];
    const todoItemIndex = currTodos.findIndex((todo) => todo.id === id);
    const todoItem = currTodos.find((todo) => todo.id === id);
    currTodos[todoItemIndex] = { ...todoItem, isCompleted: e.target.checked };
    setTodos(currTodos);
    setInput("");
  };

  useEffect(() => {
    // props.onAdd(todos);
    dispatch(addTodo(todos));
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h3>Todo App</h3>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <button onClick={() => setFilter("All")} className={filter === "All" ? "filter-btn-active" : "filter-btn" }>All</button>
        <button onClick={() => setFilter("Completed")} className={filter === "Completed" ? "filter-btn-active" : "filter-btn" }>Completed</button>
        <button onClick={() => setFilter("Pending")} className={filter === "Pending" ? "filter-btn-active" : "filter-btn" }>pending</button>
      </div>
      <input
        type="text"
        value={input}
        placeholder="Add todo"
        onChange={(e) => setInput(e.target.value)}
      />
      {!isEditing.flag ? (
        <button onClick={(e) => onTodoAdd(e)}>Add</button>
      ) : (
        <button onClick={(e) => onUpdateTodo(e)}>Update</button>
      )}
      <div>
        <ul style={{ listStyle: "none" }}>
          {filter === "All" &&
            todos.map((todo, index) => (
              <div>
                <TodoListItem
                  key={index}
                  todo={todo}
                  index={index}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={onUpdateTodo}
                  handleCompleted={handleCompleted}
                  isEditing={isEditing}
                  onEditTodo={onEditTodo}
                  h={10}
                />
              </div>
            ))}
          {filter === "Completed" &&
            todos.map(
              (todo, index) =>
                todo.isCompleted && (
                  <div>
                    <TodoListItem
                      key={index}
                      todo={todo}
                      index={index}
                      onDeleteTodo={onDeleteTodo}
                      onUpdateTodo={onUpdateTodo}
                      handleCompleted={handleCompleted}
                      isEditing={isEditing}
                      onEditTodo={onEditTodo}
                      h={10}
                    />
                  </div>
                )
            )}
            {filter === "Pending" &&
            todos.map(
              (todo, index) =>
                !todo.isCompleted && (
                  <div>
                    <TodoListItem
                      key={index}
                      todo={todo}
                      index={index}
                      onDeleteTodo={onDeleteTodo}
                      onUpdateTodo={onUpdateTodo}
                      handleCompleted={handleCompleted}
                      isEditing={isEditing}
                      onEditTodo={onEditTodo}
                      h={10}
                    />
                  </div>
                )
            )}
        </ul>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     todoList: state.todos
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (todo) => dispatch(addTodo(todo))
//   };
// };

export default connect(Todo);
