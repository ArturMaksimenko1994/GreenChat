import { Outlet } from "react-router";

import Header from "@/components/Aside/Aside";

import PageChatId from "@/pages/PageChatId/PageChatId";

import styles from "./Layout.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__row}>
        <Header />
        <div className={styles.app__panel}>
          <Outlet />
        </div>
        <div className={styles.app__window}>
          <PageChatId />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
