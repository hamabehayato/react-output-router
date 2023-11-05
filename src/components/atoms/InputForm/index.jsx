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
export const InputForm = ({ disabled = false, inputVal, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <input
        disabled={disabled}
        className={styles.input}
        placeholder={placeholder}
        value={inputVal}
        onChange={onChange}
      />
    </div>
  );
};
