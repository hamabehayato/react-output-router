/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TODO_PATH } from '../../../constants/pagenations';

/**
 * useTodoCreateTemplate
 * @param addTodo
 * @returns {[{inputTitle: string, inputContent: string}
 * {handleCreateTodo: ((function(*): void)|*)
 * handleChangeContent: (function(*): void)
 * handleChangeTitle: (function(*): void)}]}
 */
export const useTodoCreateTemplate = ({ addTodo }) => {
  const navigate = useNavigate();

  /* local state */
  const [inputTitle, setInputTitle] = useState('');
  const [inputContent, setInputContent] = useState('');

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
   * Todo の新規登録処理
   * @type {function(*): void |*}
   */
  const handleCreateTodo = useCallback(
    (e) => {
      // e.preventDefault(): ブラウザデフォルトのform 送信機能を無効化
      e.preventDefault();
      if (inputTitle && inputContent) {
        addTodo(inputTitle, inputContent);
        navigate(TODO_PATH.TOP);
      }
    },
    // これらが更新された時のみ、関数を再生成する
    [addTodo, inputTitle, inputContent, navigate],
  );

  return [
    /* states */
    { inputTitle, inputContent },
    /* actions */
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ];
};
