/**
 * useTodo
 *
 * @package hooks
 */
// useCallback, useMemo はどちらもキャッシュを利用し、不要な関数の生成を防ぐ
// useCallback は 親コンポーネントから子コンポーネントに渡すコールバック関数をメモ化するのに使う。
// https://zenn.dev/tsucchiiinoko/articles/8da862593a9980
import { useState, useCallback } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  /**
   * Todo 新規登録処理
   * @param {*} e
   */
  const addTodo = useCallback(
    (title, content) => {
      const newId = originTodoList.length + 1;
      const newTodoList = [
        ...originTodoList,
        {
          id: newId,
          title: title,
          content: content,
        },
      ];
      setOriginTodoList(newTodoList);
    },
    [originTodoList],
  );

  /**
   * 更新処理
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = (id, title, content) => {
    const newTodos = originTodoList.map((todo) => {
      if (todo.id === id) {
        return (todo = { id: id, title, title, content, content });
      }
      return todo;
    });
    setOriginTodoList(newTodos);
  };

  /**
   * Todo削除処理
   * @param {number} id
   */
  const deleteTodo = (id) => {
    const newTodos = originTodoList.filter((todo) => {
      return todo.id !== id;
    });
    setOriginTodoList(newTodos);
  };

  return {
    addTodo,
    originTodoList,
    updateTodo,
    deleteTodo,
  };
};
