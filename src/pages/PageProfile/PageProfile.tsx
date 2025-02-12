import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate } from "react-router";

import styles from "./PageProfile.module.scss";

const ProfilePage = () => {
  const apiTokenInstance = useSelector((state: RootState) => state.auth.apiTokenInstance);
  const user = useSelector((state: RootState) => state.user);

  if (!apiTokenInstance) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className={styles.profile}>
      <div className="container">
        <div className={styles.profile__row}>

          <div className={styles.profile__avatar}>
            <img src={`${user.avatarUrl}`}
              alt={`${user.name || "Аватар пользователя"}`}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>

          <div className={styles.profile__desc}>
            <h1 className="h1">Профиль пользователя</h1>
            {user.name || user.email ? (
              <div className={styles.profile__block}>
                <p>
                  <strong>id:</strong> {user.id || "Не указано"}
                </p>
                <p>
                  <strong>registered date:</strong> {user.registeredDate || "Не указано"}
                </p>
                <p>
                  <strong>username:</strong> {user.username || "Не указано"}
                </p>
                <p>
                  <strong>name:</strong> {user.name || "Не указано"}
                </p>
                <p>
                  <strong>Email:</strong> {user.email || "Не указан"}
                </p>

                {user.description && (
                  <p>
                    <strong>Описание:</strong> {user.description}
                  </p>
                )}

                <p>
                  <strong>Nickname:</strong> {user.nickname || "Не указан"}
                </p>


              </div>
            ) : (
              <p>Загрузка данных...</p>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};

export default ProfilePage;
// o0UDv69Rg&2xN&#6MOm6Ahj6
