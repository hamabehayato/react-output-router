/**
 * TodoDetailTemplate
 *
 * @package components
 */
import { useParams } from 'react-router-dom';
import { useTodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const { id } = useParams();
  // アロー関数において {} 無しの場合、暗黙的に retun が行われる
  const todo = originTodoList.find((todo) => String(todo.id) === id);

  /**
   * TodoDetailTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <BaseLayout title={'Todo Detail'}>
      <InputForm disabled inputVal={todo.title} placeholder={'Title'} />
      <TextAreaForm disabled inputVal={todo.content} placeholder={'Content'} />
    </BaseLayout>
  );
};
