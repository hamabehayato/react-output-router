/**
 * TodoTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext';
import { BaseLayout } from '../../organisms/BaseLayout';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { CommonButton } from '../../atoms/CommonButton';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';

export const TodoCreateTemplate = () => {
  const { addTodo } = useTodoContext();
  const [
    { inputTitle, inputContent },
    { handleChangeTitle, handleChangeContent, handleCreateTodo },
  ] = useTodoCreateTemplate({ addTodo });

  /**
   * TodoTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <BaseLayout title={'Create Todo'}>
      <form onSubmit={handleCreateTodo}>
        <InputForm inputVal={inputTitle} placeholder={'Title'} onChange={handleChangeTitle} />

        <TextAreaForm
          inputVal={inputContent}
          placeholder={'Content'}
          onChange={handleChangeContent}
        />

        <CommonButton label={'Create Todo'} type={'submit'} />
      </form>
    </BaseLayout>
  );
};
