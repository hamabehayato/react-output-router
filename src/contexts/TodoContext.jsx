/**
 * TodoContext
 *
 * @package contexts
 */
import { useContext, createContext } from 'react';
import { useTodo } from '../hooks/useTodo';

/**
 * TodoContext
 */
const TodoContext = createContext({});

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider = ({ children }) => {
  const { addTodo, originTodoList, searchVal, showTodolist, handleSearchVal, handleDeleteTodo } =
    useTodo();

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        originTodoList,
        searchVal,
        showTodolist,
        handleSearchVal,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
