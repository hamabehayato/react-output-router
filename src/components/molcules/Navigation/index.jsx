/**
 * Navigation
 *
 * @package components
 */
import { NavigationLink } from '../../atoms/NavigationLink';
import { NAVIGATION_PATH } from '../../../constants/navigations';
import styles from './styles.module.css';
// import styles from './styles.module.css';

/**
 * Navigation
 * @returns {JSX.Element}
 * @constructor
 */
export const Navigation = () => {
  return (
    <>
      <ul className={styles.list}>
        <NavigationLink to={NAVIGATION_PATH.TOP} label={'Top'} />
        <NavigationLink to={NAVIGATION_PATH.CREATE} label={'Create'} />
      </ul>
    </>
  );
};
