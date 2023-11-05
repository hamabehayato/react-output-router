/**
 * TodoTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TodoList } from '../../organisms/TodoList';
import { useTodo } from '../../../hooks/useTodo';
import { useTodoTemplate } from './useTodoTemplate';

export const TodoTemplate = () => {
  const { originTodoList } = useTodoContext();
  const [{ inputSearch, showTodoList }, { handleChangeSearch }] = useTodoTemplate({
    originTodoList,
  });

  /**
   * TodoTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <BaseLayout title={'TodoList'}>
      <InputForm
        inputVal={inputSearch}
        placeholder={'Search Key Word'}
        onChange={handleChangeSearch}
      />

      {showTodoList.length > 0 && (
        <TodoList todoList={showTodoList} />

        // TODO 後でDELETE処理追加する参考用コメント
        // <TodoList todoList={showTodoList} handleDeleteTodo={handleDeleteTodo} />
      )}
    </BaseLayout>
  );
};
