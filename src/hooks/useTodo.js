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
   * Todo検索処理
   * @param {*} e
   */
  const searchTodo = (e) => {
    return originTodoList.filter((todo) => {
      const regexp = new RegExp('^' + searchVal, 'i');
      return todo.title.match(regexp);
    });
  };

  /**
   * Todo削除処理
   * @param {number} id
   * @param {Array} todoList
   */
  const handleDeleteTodo = (id, todoList) => {
    const newTodos = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  return {
    addTodo,
    originTodoList,
    searchTodo,
    handleDeleteTodo,
  };
};
