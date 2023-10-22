/**
 * TodoList
 *
 * @package components
 */
import { useState, useMemo } from "react"
import styles from "./styles.module.css"
import { TrashIcon } from "../../atoms/Icons/Trash"

/**
 * TodoList
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoList = (props) => {
  const { todoList, setTodos } = props

  const handleDeleteTodo = (id) => {
    const newTodos = todoList.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos)
  }

  return (
    <>
    {todoList.map((todo) => (
    <div className={styles.todo} key={todo.id} >
      <p>{todo.text}</p>
      <button onClick={() => handleDeleteTodo(todo.id)} className={styles.button}>
        <TrashIcon />
      </button>
    </div>
    ))}
    </>
  )
}
