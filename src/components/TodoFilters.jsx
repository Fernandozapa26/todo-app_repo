const TodoFilters = ({ onFilter }) => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <h3>Filtros (pendiente de implementar)</h3>
  
        <button onClick={() => onFilter("all")}>Todos</button>
        <button onClick={() => onFilter("completed")}>Completados</button>
        <button onClick={() => onFilter("pending")}>Pendientes</button>
      </div>
    );
  };
  
  export default TodoFilters;
  