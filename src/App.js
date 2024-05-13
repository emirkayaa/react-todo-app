import { useCallback, useReducer } from "react";
import "./App.css";
import AddTodo from "./addTodo";
import todoReducer from "./todoReducer";
import Todos from "./todos";

function App() {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    todo: "",
  });

  const submitHandle = useCallback(e => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
    state.todo = "";
  }, [state.todo]
  
);

  const onChanges = useCallback((e) => {
    dispatch({
      type: "SET_TODO",
      value: e.target.value,
    });
  },[]);

  return (
    <div className="App">
      <div>
        <h1>Todo Add</h1>
        <AddTodo
          submitHandle={submitHandle}
          todo={state.todo}
          onChanges={onChanges}
        />
        <div>
          <Todos todoList={state.todoList} />
        </div>
      </div>
    </div>
  );
}

export default App;
