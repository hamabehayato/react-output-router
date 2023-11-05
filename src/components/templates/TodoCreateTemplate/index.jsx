/**
 * TodoTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext';
import { InputForm } from '../../atoms/InputForm';
import { TextAreaForm } from '../../atoms/TextAreaForm';
import { CommonButton } from '../../atoms/CommonButton';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';
import styles from './styles.module.css';

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
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <h2>Create Todo</h2>
      </div>

      <form onSubmit={handleCreateTodo}>
        <InputForm inputVal={inputTitle} placeholder={'Title'} onChange={handleChangeTitle} />

        <TextAreaForm
          inputVal={inputContent}
          placeholder={'Content'}
          onChange={handleChangeContent}
        />

        <CommonButton label={'Create Todo'} type={'submit'} />
      </form>
    </div>
  );
};
