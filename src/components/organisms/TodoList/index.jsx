/**
 * TodoList
 *
 * @package components
 */
import { useState, useMemo } from 'react';
import styles from './styles.module.css';
import { TrashIcon } from '../../atoms/Icons/Trash';

/**
 * TodoList
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <>
      {todoList.map((todo) => (
        <div className={styles.todo} key={todo.id}>
          <p>{todo.title}</p>
          <button onClick={() => handleDeleteTodo(todo.id, todoList)} className={styles.button}>
            <TrashIcon />
          </button>
        </div>
      ))}
    </>
  );
};
