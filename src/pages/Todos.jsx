import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
import TodoFilters from "../components/TodoFilters";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder para filtros (sin lógica)
  const handleFilter = (filterType) => {
    console.log("Filtro seleccionado:", filterType);
    alert(`Filtro '${filterType}' aún no implementado`);
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

      {/* Componente de filtros (placeholder) */}
      <TodoFilters onFilter={handleFilter} />

      <TodoList todos={todos} onEdit={() => {}} />
    </div>
  );
};

export default Todos;
