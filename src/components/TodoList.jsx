import TodoItem from "./TodoItem";

const TodoList = ({ todos, onEdit }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default TodoList;
