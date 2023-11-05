/**
 * TodoEditTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { CommonButton } from '../../atoms/CommonButton';
import { useTodoEditTemplate } from './useTodoEditTemplate';

export const TodoEditTemplate = () => {
  const { updateTodo, originTodoList } = useTodoContext();
  const [
    { todo, inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleUpdateTodo },
  ] = useTodoEditTemplate({
    updateTodo,
    originTodoList,
  });

  /**
   * TodoEditTemplate
   * @returns {JSX.Element}
   * @constructor
   */

  return (
    <BaseLayout title={'Edit Todo'}>
      <form onSubmit={handleUpdateTodo}>
        <InputForm inputVal={inputTitle} placeholder={'Title'} onChange={handleChangeTitle} />

        <TextAreaForm
          inputVal={inputContent}
          placeholder={'Content'}
          onChange={handleChangeContent}
        />

        <CommonButton label={'Edit Todo'} type={'submit'} />
      </form>
    </BaseLayout>
  );
};
