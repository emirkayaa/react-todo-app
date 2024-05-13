import "./App.css";
import {memo} from 'react'
function TodoItem({ todo }) {
  <li className="todo-wrapper">
    {todo}
    <span>Delete</span>
  </li>;
}

export default memo(TodoItem);
