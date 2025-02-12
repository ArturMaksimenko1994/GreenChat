import { Link, useParams } from "react-router";
import styles from "./PageChats.module.scss";

const PageChats = () => {
  const chats = [
    { id: 1, name: "Чат с Анной" },
    { id: 2, name: "Рабочий чат" },
    { id: 3, name: "Друзья" },
  ];

  const { chatId } = useParams();

  return (
    <div className={styles.chats}>
      <h2>Список чатов</h2>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id} className={chat.id === Number(chatId) ? styles.active : ""}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageChats;