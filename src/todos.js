import TodoItem from './todoItem'
import {memo} from 'react'
function Todos({todoList}) {
    return (
        <ul>
        {todoList.map((todo, index) => {
          return (
            <>
            <TodoItem  todo={todo} key={index}/>
          </>
          )
        })}
      </ul>
    )
}

export default memo(Todos)