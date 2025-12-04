import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [nuevoTodo, setNuevoTodo] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error al obtener los todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevoTodo.trim() === "") {
      alert("El campo no puede estar vacío");
      return;
    }

    console.log("Nuevo TODO creado:", nuevoTodo);
    setNuevoTodo("");
  };

  const toggleCompletado = (id) => {
    const todosActualizados = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(todosActualizados);
  };

  return (
    <div>
      <h1>Listado de Todos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe un nuevo todo"
          value={nuevoTodo}
          onChange={(e) => setNuevoTodo(e.target.value)}
        />
        <button type="submit">Crear</button>
      </form>

      <hr />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? "✅ Completado" : "❌ Pendiente"}{" "}
            <button onClick={() => toggleCompletado(todo.id)}>
              Cambiar estado
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
