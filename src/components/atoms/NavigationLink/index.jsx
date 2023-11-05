/**
 * NavigationLink
 *
 * @package components
 */
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

/**
 * NavigationLink
 * @returns {JSX.Element}
 * @constructor
 */
export const NavigationLink = (props) => {
  const { to, label } = props;

  return (
    <>
      <li className={styles.item}>
        <Link className={styles.link} to={to}>
          {label}
        </Link>
      </li>
    </>
  );
};
