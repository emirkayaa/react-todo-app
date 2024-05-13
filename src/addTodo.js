import {memo} from 'react'

function AddTodo({submitHandle,todo,onChanges}) {
    return(
        <form className="input-wrapper" onSubmit={submitHandle}>
          <input type="text" value={todo} onChange={onChanges}  />
          <button disabled={!todo} onSubmit={submitHandle}>Ekle</button>
        </form>
    )
}

export default memo(AddTodo)