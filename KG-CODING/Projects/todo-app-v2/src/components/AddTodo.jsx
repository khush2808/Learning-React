function AddTodo({ onNewItem }) {
	const [todoName,setTodoName]=useState();
	const [todoDate,setTodoDate]=useState();
	const handleNameChange = (e) => {
		setTodoName(e.target.value);	
	};
	const handleDateChange = (e) => {
		setTodoDate(e.target.value);
	};
	const handleAddButton = () => {
		onNewItem(todoName,todoDate);
	};
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
					onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
