import { Outlet } from 'react-router';

import styles from './Layout.module.scss';

const AuthLayout = () => {
  return (
    <div className={styles.auth}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
