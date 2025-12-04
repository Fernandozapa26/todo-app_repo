import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null); // limpiar error anterior si existe

        const res = await fetch("https://jsonplaceholder.typicode.com/todos");

        if (!res.ok) {
          throw new Error("No se pudo obtener la lista de tareas");
        }

        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message); // guardar mensaje de error
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de TODOS</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✔️" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
