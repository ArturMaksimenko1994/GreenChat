import { Outlet, Route, Routes } from "react-router";

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
          <Routes>
                <Route path="/chats/:chatId" element={<PageChatId />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
