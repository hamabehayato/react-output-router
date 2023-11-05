/**
 * BaseLayout
 *
 * @package components
 */
import { Navigation } from '../../molcules/Navigation';
import styles from './styles.module.css';

export const BaseLayout = ({ children, title }) => {
  /**
   * BaseLayout
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <div className={styles.container}>
      <section>
        <Navigation />
      </section>
      <div className={styles.titleBox}>
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
};
