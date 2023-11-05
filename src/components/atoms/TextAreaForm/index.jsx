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
export const TextAreaForm = ({ disabled = false, inputVal, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <textarea
        disabled={disabled}
        className={styles.textarea}
        placeholder={placeholder}
        value={inputVal}
        onChange={onChange}
      />
    </div>
  );
};
