/**
 * CommonButton
 *
 * @package components
 */
import { useState } from 'react';
import styles from './styles.module.css';

/**
 * CommonButton
 * @returns {JSX.Element}
 * @constructor
 */
export const CommonButton = (props) => {
  const { label, type, onClick } = props;

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
