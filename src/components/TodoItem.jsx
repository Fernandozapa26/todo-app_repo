const TodoItem = ({ todo, onEdit }) => {
    return (
      <li>
        {todo.title} {todo.completed ? "✔️" : "❌"} 
  
        {/* Botón para la edición */}
        <button onClick={() => onEdit(todo)} style={{ marginLeft: "10px" }}>
          Editar
        </button>
      </li>
    );
  };
  
  export default TodoItem;
  