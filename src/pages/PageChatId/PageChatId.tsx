import { useState } from "react";
import { useParams, useLocation } from "react-router";
import { useSelector } from "react-redux"; // Импортируем useSelector
import styles from "./PageChatId.module.scss";
import { API_URL } from "@/api/api-config";
import { RootState } from "@/redux/store";

const PageChatId = () => {
  const { chatId } = useParams();
  const location = useLocation();
  const phone = location.state?.phone || "";

  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Получаем данные из Redux
  const idInstance = useSelector((state: RootState) => state.auth.idInstance);
  const apiTokenInstance = useSelector(
    (state: RootState) => state.auth.apiTokenInstance
  );

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;
    if (!phone) {
      console.error("Ошибка: номер телефона отсутствует");
      return;
    }
    if (!idInstance || !apiTokenInstance) {
      console.error("Ошибка: отсутствует idInstance или apiTokenInstance");
      return;
    }

    const messageData = {
      chatId: `${phone}@c.us`,
      message: inputMessage,
    };

    try {
      const response = await fetch(
        `${API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messageData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setMessages([...messages, { text: inputMessage, sender: "Вы" }]);
        setInputMessage("");
        console.log("Сообщение отправлено! ID:", result.idMessage);
      } else {
        console.error("Ошибка при отправке сообщения:", result);
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
    }
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.recipient}>
          <h2>Чат с {chatId}</h2>
        </div>

        <div className={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.message}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>

        <div className={styles.sender}>
          <input
            type="text"
            placeholder="Введите сообщение..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default PageChatId;
