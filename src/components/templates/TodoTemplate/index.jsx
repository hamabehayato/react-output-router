/**
 * TodoTemplate
 *
 * @package components
 */
import { useState, useMemo } from "react"
import { InputForm } from "../../atoms/InputForm"
import { TodoList } from "../../organisms/TodoList"
import styles from "./styles.module.css"

export const TodoTemplate = () => {
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

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
      <h1>Todo List</h1>
      <h2>ADD TODO</h2>
      </div>

      <InputForm todoVal={todoVal} placeholder={"New Todo"} handleTodoVal={handleTodoVal} handleAddTodo={handleAddTodo} />
      <InputForm serchVal={searchVal} placeholder={"Search Todo"} handleTodoVal={handleSearchVal}/>

      { showTodolist.length > 0 && ((
        <TodoList todoList={showTodolist} setTodos={setTodos} />
      ))}
    </div>
  )
}
