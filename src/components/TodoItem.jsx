const TodoItem = ({ todo }) => {
    return (
      <li>
        {todo.title} {todo.completed ? "✔️" : "❌"}
      </li>
    );
  };
  
  export default TodoItem;
  