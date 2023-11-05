/**
 * InpurForm
 *
 * @package components
 */
import styles from './styles.module.css';

/**
 * InputForm
 * @returns {JSX.Element}
 * @constructor
 */
export const InputForm = (props) => {
  const { inputVal, placeholder, onChange } = props;

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={inputVal}
        onChange={onChange}
      />
    </div>
  );
};
