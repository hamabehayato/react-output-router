/**
 * useTodoTemplate
 *
 * @package hooks
 */
import { useState, useMemo, useCallback } from 'react';

/**
 * useTodoTemplate
 * @param addTodo
 * @returns {[{inputTitle: string, inputContent: string}
 * {handleCreateTodo: ((function(*): void)|*)
 * handleChangeContent: (function(*): void)
 * handleChangeTitle: (function(*): void)}]}
 */

export const useTodoTemplate = ({ originTodoList }) => {
  /* local state */
  const [inputSearch, setInputSearch] = useState('');

  /* actions */
  // useMemo は、値に変更がある時発火し、画面描写に変更がない場合はキャッシュを使う(処理軽減)
  const showTodoList = useMemo(() => {
    // 正規表現で前方一致を確認する
    const regexp = new RegExp('^' + inputSearch, 'i');
    return originTodoList.filter((todo) => {
      return todo.title.match(regexp);
    });
    // 以下の要素に変更があった時のみ、関数を再生成する
  }, [originTodoList, inputSearch]);

  /**
   * search の更新処理
   * @param {*} e
   */
  const handleChangeSearch = useCallback((e) => {
    setInputSearch(e.target.value);
  }, []);

  /**
   * Todo削除処理
   * @param {number} id
   */
  const handleDeleteTodo = (id) => {
    const newTodos = originTodoList.filter((todo) => {
      return todo.id !== id;
    });
    setOriginTodoList(newTodos);
  };

  return [
    /* states */
    { inputSearch, showTodoList },
    /* actions */
    { handleChangeSearch, handleDeleteTodo },
  ];
};
