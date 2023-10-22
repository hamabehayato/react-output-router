/**
 * InpurForm
 *
 * @package components
 */
import { useState } from "react"
import styles from "./styles.module.css"


/**
 * InputForm
 * @returns {JSX.Element}
 * @constructor
 */
export const InputForm = (props) => {
  const { todoVal, placeholder, handleTodoVal, handleAddTodo } = props
  const [ isFocused, setIsFocused ] = useState(false)

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={todoVal}
        onChange={handleTodoVal}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if(isFocused && e.key === 'Enter') {
            handleAddTodo(todoVal)
          }
        }}
      />
    </div>
  )
}
