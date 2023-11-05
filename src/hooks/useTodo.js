/**
 * useTodo
 *
 * @package hooks
 */
// useCallback, useMemo はどちらもキャッシュを利用し、不要な関数の生成を防ぐ
// useCallback は 親コンポーネントから子コンポーネントに渡すコールバック関数をメモ化するのに使う。
// https://zenn.dev/tsucchiiinoko/articles/8da862593a9980
import { useState, useMemo, useCallback } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  const [searchVal, setSerchVal] = useState('');
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
  const handleSearchVal = (e) => {
    setSerchVal(e.target.value);
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

  // useMemo は、値に変更がある時発火し、画面描写に変更がない場合はキャッシュを使う(処理軽減)
  // const showTodolist = useMemo(() => {
  //   return originTodoList.filter((todo) => {
  //     ////////////////
  //     // RegExp は、正規表現のオブジェクト
  //     // "^" + searchVal は、前方から searchVal の値と一致しているか
  //     // , "i" は、大文字、小文字を区別しない　の意味
  //     ////////////////
  //     const regexp = new RegExp('^' + searchVal, 'i');
  //     return todo.title.match(regexp);
  //   });
  // });

  return {
    addTodo,
    originTodoList,
    searchVal,
    handleSearchVal,
    handleDeleteTodo,
  };
};
