/**
 * TodoTemplate
 *
 * @package components
 */
import { useState, useMemo } from "react"
import { InputForm } from "../../atoms/InputForm"
import { TodoList } from "../../organisms/TodoList"
import { useTodo } from "../../../hooks/useTodo"
import styles from "./styles.module.css"

export const TodoTemplate = () => {
  // console.log(useTodo())
  const [
    { todoVal, searchVal, setTodos},
    {
      handleTodoVal,
      handleSearchVal,
      handleAddTodo,
      showTodolist,
    },
  ] = useTodo();

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
