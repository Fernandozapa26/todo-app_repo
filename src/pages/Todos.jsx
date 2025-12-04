import { useEffect, useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json();
        setTodos(data);
        console.log("Todos obtenidos:", data);
      } catch (error) {
        console.error("Error al obtener los todos:", error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Listado de Todos (fetch inicial)</h1>
      <p>Revisa la consola para ver los datos obtenidos.</p>
    </div>
  );
}
