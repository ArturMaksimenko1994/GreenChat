import { useDispatch, useSelector } from "react-redux";
import styles from "./PageSettings.module.scss";
import { Link, useNavigate } from "react-router";
import { RootState } from "@/redux/store";
import { clearAuthData } from "@/redux/slices/authSlice";
import { clearUser } from "@/redux/slices/userSlice";

const PageSettings = () => {
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
    <div className={styles.page}>
      <div className="container">
        <div className={styles.aside__list}>
          {apiTokenInstance ? (
            <Link to="/login" onClick={handleLogout}>
              Выйти
            </Link>
          ) : (
            <Link to="#">Войти</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageSettings;
