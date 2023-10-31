/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useMemo } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

/**
 * useTodo
 */
export const useTodo = () => {
  const [todoVal, setTodoVal] = useState('');
  const [searchVal, setSerchVal] = useState('');
  const [todos, setTodos] = useState(INIT_TODO_LIST);

  const handleTodoVal = (e) => {
    setTodoVal(e.target.value);
  };

  /**
   * Todo検索処理
   * @param {*} e
   */
  const handleSearchVal = (e) => {
    setSerchVal(e.target.value);
  };

  /**
   * Todo新規登録処理
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    if (e) {
      const newTodoId = todos.length ? todos.length : 0;
      const newTodo = {
        id: newTodoId,
        text: e,
      };
      setTodos([...todos, newTodo]);
      setTodoVal('');
    }
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
  const showTodolist = useMemo(() => {
    return todos.filter((todo) => {
      ////////////////
      // RegExp は、正規表現のオブジェクト
      // "^" + searchVal は、前方から searchVal の値と一致しているか
      // , "i" は、大文字、小文字を区別しない　の意味
      ////////////////
      const regexp = new RegExp('^' + searchVal, 'i');
      return todo.text.match(regexp);
    });
  });

  return {
    todoVal,
    searchVal,
    showTodolist,
    handleTodoVal,
    handleSearchVal,
    handleAddTodo,
    handleDeleteTodo,
  };
};
