/**
 * Navigation
 *
 * @package components
 */
import { NavigationLink } from '../../atoms/NavigationLink';
import { TODO_PATH } from '../../../constants/pagenations';
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
      <ul class={styles.list}>
        <NavigationLink to={TODO_PATH.TOP} label={'Top'} />
        <NavigationLink to={TODO_PATH.CREATE} label={'Create'} />
      </ul>
    </>
  );
};
