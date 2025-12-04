import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder para editar (aún sin lógica)
  const handleEdit = (todo) => {
    console.log("En el futuro aquí se editará:", todo);
    alert(`Editar TODO: ${todo.title} (función aún no implementada)`);
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("Error al obtener los TODOS");

        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
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
      <TodoList todos={todos} onEdit={handleEdit} />
    </div>
  );
};

export default Todos;
