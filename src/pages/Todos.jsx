import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

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

  return (
    <div>
      <h1>Listado de Todos</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} — {todo.completed ? "✅ Completado" : "❌ Pendiente"}
          </li>
        ))}
      </ul>
    </div>
  );
}
