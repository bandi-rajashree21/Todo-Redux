import { useSelector } from "react-redux";
import Todo from "../todo/todo";
import TodoInput from "../TodoInput/TodoInput";
function todoList() {
  const todoList = useSelector((state) => state.todos);  //get property from state
  return (
    <>
      <TodoInput></TodoInput>
      {todoList &&
        todoList.map((todo) => <Todo id={todo.id} title={todo.title} key={todo.id} />)}
    </>
  );
}

export default todoList;
