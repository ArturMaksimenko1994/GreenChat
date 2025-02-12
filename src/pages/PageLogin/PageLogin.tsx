import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styles from "./PageLogin.module.scss";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { getlogin } from "@/api/api";
import { setAuthData } from "@/redux/slices/authSlice";

const PageLogin = () => {
  const [idInstance, setIdInstance] = useState("1103189939");
  const [apiTokenInstance, setApiTokenInstance] = useState("1207b0f5ddd448e48955da5e4679c52305bfb26ade894aab81");
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { isAuthenticated, error } = await getlogin(
      idInstance,
      apiTokenInstance
    );

    if (isAuthenticated) {
      dispatch(setAuthData({ idInstance, apiTokenInstance }));
      navigate("/"); // Перенаправление на главную страницу
    } else {
      setError(error);
    }
  };

  return (
    <div className={styles.aut}>
      <div className={styles.aut__title}>
        <h1 className="h3 h3--green">Авторизация Green API</h1>
        <p className="text">Введите данные для входа</p>
      </div>

      <form onSubmit={handleLogin} className={styles.form}>
        <div className={styles.form__row}>
          <Input
            type="text"
            label="idInstance"
            placeholder="Введите idInstance"
            value={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
          />
          <Input
            type="text"
            label="apiTokenInstance"
            placeholder="Введите apiTokenInstance"
            value={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
          />
        </div>
        <Button
          type="primary"
          size="md"
          htmlElement="button"
          buttonType="submit"
        >
          Войти
        </Button>
      </form>

      {error && (
        <div className={styles.error}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default PageLogin;
