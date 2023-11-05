/**
 * useTodoEditTemplate
 *
 * @package hooks
 */
import { useState, useMemo, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { NAVIGATION_PATH } from '../../../constants/navigations';

/**
 * useTodoEditTemplate
 * @param updateTodo
 * @returns {[{inputTitle: string, inputContent: string}
 * {handleUpdateTodo: ((function(*): void)|*)
 * handleChangeContent: (function(*): void)
 * handleChangeTitle: (function(*): void)}]}
 */
export const useTodoEditTemplate = ({ updateTodo, originTodoList }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  // アロー関数において {} 無しの場合、暗黙的に retun が行われる
  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [originTodoList, id],
  );

  /* local state */
  const [inputTitle, setInputTitle] = useState(todo.title);
  const [inputContent, setInputContent] = useState(todo.content);

  /* actions */
  /**
   * title の更新処理
   * @param {*} e
   */
  const handleChangeTitle = useCallback((e) => {
    setInputTitle(e.target.value);
  }, []);

  /**
   * content の更新処理
   * @param {*} e
   */
  const handleChangeContent = useCallback((e) => {
    setInputContent(e.target.value);
  }, []);

  /**
   * Todo の更新処理
   * @type {function(*): void |*}
   */
  const handleUpdateTodo = useCallback(
    (e) => {
      // e.preventDefault(): ブラウザデフォルトのform 送信機能を無効化
      e.preventDefault();
      if (inputTitle && inputContent) {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    // これらが更新された時のみ、関数を再生成する
    [updateTodo, inputTitle, inputContent, navigate],
  );

  return [
    /* state */
    { todo, inputTitle, inputContent },
    /* actions */
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ];
};
