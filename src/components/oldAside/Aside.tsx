import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { clearUser } from "../../redux/slices/userSlice";
import { clearAuthData } from "../../redux/slices/authSlice";

import styles from "./Aside.module.scss";
import { RootState } from "@/redux/store";

const Aside = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiTokenInstance = useSelector(
    (state: RootState) => state.auth.apiTokenInstance
  );

  const handleLogout = () => {
    dispatch(clearAuthData());
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <aside className={styles.aside}>
      <div className={styles.aside__list}>
        {apiTokenInstance ? (
          <>
            <Link to="/">Главная</Link>
            <Link to="/profile">Профиль</Link>
            <button className={styles.aside__close} onClick={handleLogout}>
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Aside;
