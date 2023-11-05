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

export const TodoTemplate = () => {
  const { searchVal, handleSearchVal, handleDeleteTodo } = useTodo();
  const { originTodoList } = useTodoContext();

  /**
   * TodoTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <BaseLayout title={'TodoList'}>
      <InputForm serchVal={searchVal} placeholder={'Search Todo'} />

      {originTodoList.length > 0 && (
        <TodoList todoList={originTodoList} handleDeleteTodo={handleDeleteTodo} />
      )}
    </BaseLayout>
  );
};
