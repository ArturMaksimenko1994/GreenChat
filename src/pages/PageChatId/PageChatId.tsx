import { useParams } from "react-router";
import styles from "./PageChatId.module.scss";

const PageChatId = () => {
  const { chatId } = useParams();

  return (
    <div className={styles.page}>
      <div className="container">
        <h2>Чат №{chatId}</h2>
        <p>Сообщения и содержимое чата {chatId}</p>
      </div>
    </div>
  );
};

export default PageChatId;
