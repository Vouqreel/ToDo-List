import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Vanta from "./components/Vanta/Vanta";

function App() {
	return (
		<div className="todo-app">
			<Vanta />
			<TodoList />
		</div>
	);
}

export default App;
