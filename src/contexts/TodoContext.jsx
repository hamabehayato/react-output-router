/**
 * TodoContext
 *
 * @package contexts
 */
import { useContext, createContext } from "react"
import { useTodo } from "../hooks/useTodo"

/**
 * TodoContext
 */
const TodoContext = createContext({});

/**
 * TodoProvider
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoProvider = () => {
  const {
    todoVal,
    searchVal,
    showTodolist,
    handleTodoVal,
    handleSearchVal,
    handleAddTodo,
    handleDeleteTodo
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        todoVal,
        searchVal,
        showTodolist,
        handleTodoVal,
        handleSearchVal,
        handleAddTodo,
        handleDeleteTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext)
