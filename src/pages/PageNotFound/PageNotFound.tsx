import { Link } from "react-router";

import styles from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={styles.error}>
      <div className="container">
        <div className={styles.error__message}>
          <h1 className="h1">Страница не найдена</h1>
          <Link to="/">На Главную</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
