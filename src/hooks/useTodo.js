/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useMemo } from "react"

/**
 * useTodo
 */
export const useTodo = () => {
  const [todoVal, setTodoVal] = useState('')
  const [searchVal, setSerchVal] = useState('')
  const [todos, setTodos] = useState([])

  const handleTodoVal = (e) => {
    setTodoVal(e.target.value)
  }

  const handleSearchVal = (e) => {
    setSerchVal(e.target.value)
  }

  const handleAddTodo = (value) => {
    if(value) {
      const newTodoId = todos.length ? todos.length : 0
      const newTodo = {
        id: newTodoId,
        text: value
      }
      setTodos([...todos, newTodo])
      setTodoVal('')
    }
  }

  // useMemo は、値に変更がある時発火し、画面描写に変更がない場合はキャッシュを使う(処理軽減)
  const showTodolist = useMemo(() => {
    return todos.filter((todo) => {
      ////////////////
      // RegExp は、正規表現のオブジェクト
      // "^" + searchVal は、前方から searchVal の値と一致しているか
      // , "i" は、大文字、小文字を区別しない　の意味
      ////////////////
      const regexp = new RegExp ("^" + searchVal, "i")
      return todo.text.match(regexp)
    })
  })

  const states = {
    todoVal,
    searchVal,
    setTodos,
  }

  const actions = {
    handleTodoVal,
    handleSearchVal,
    handleAddTodo,
    showTodolist,
  }

  return [states, actions]
}
