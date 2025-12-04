import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);     // ← estado de carga
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true); // iniciar carga
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("Error al traer los datos");

        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // finalizar carga
      }
    };

    fetchTodos();
  }, []);

  if (loading) return <p>Cargando tareas...</p>;      // ← mensaje de espera
  if (error) return <p>Error: {error}</p>;

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
