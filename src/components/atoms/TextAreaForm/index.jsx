/**
 * TextAreaForm
 *
 * @package components
 */
import { useState } from 'react';
import styles from './styles.module.css';

/**
 * TextAreaForm
 * @returns {JSX.Element}
 * @constructor
 */
export const TextAreaForm = (props) => {
  const { inputVal, placeholder, onChange } = props;

  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={inputVal}
        onChange={onChange}
      />
    </div>
  );
};
