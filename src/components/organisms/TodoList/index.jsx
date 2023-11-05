/**
 * TodoList
 *
 * @package components
 */
import styles from './styles.module.css';
import { TrashIcon } from '../../atoms/Icons/Trash';

/**
 * TodoList
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoList = ({ showTodoList, deleteTodo }) => {
  return (
    <>
      {showTodoList.map((todo) => (
        <div className={styles.todo} key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => deleteTodo(todo.id)} className={styles.button}>
            <TrashIcon />
          </button>
        </div>
      ))}
    </>
  );
};
