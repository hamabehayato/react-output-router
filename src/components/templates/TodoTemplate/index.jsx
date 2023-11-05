/**
 * TodoTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';
import { useTodo } from '../../../hooks/useTodo';
import styles from './styles.module.css';

export const TodoTemplate = () => {
  const { searchVal, handleSearchVal, handleDeleteTodo } = useTodo();
  const { originTodoList } = useTodoContext();

  /**
   * TodoTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h1>Todo List</h1>
      </div>
      <InputForm serchVal={searchVal} placeholder={'Search Todo'} />

      {originTodoList.length > 0 && (
        <TodoList todoList={originTodoList} handleDeleteTodo={handleDeleteTodo} />
      )}
    </div>
  );
};
