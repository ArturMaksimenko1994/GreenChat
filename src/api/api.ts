import { API_URL } from "./api-config";

// авторизация по id и token
export const getlogin = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<{ isAuthenticated: boolean; error: string | null }> => {
  try {
    const response = await fetch(
      `${API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (data.stateInstance === "authorized") {
      return { isAuthenticated: true, error: null };
    } else {
      return {
        isAuthenticated: false,
        error: "Ошибка авторизации. Проверьте данные",
      };
    }
  } catch (err) {
    return { isAuthenticated: false, error: "Произошла ошибка авторизации" };
  }
};

// Функция для получения данных пользователя
// export const getUserData = async (token: string) => {
//   const response = await fetch(`${BASE_URL}/wp-json/wp/v2/users/me`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     const errorResponse = await response.json();
//     throw new Error(
//       errorResponse.message || 'Ошибка получения данных пользователя'
//     );
//   }

//   const data = await response.json();

//   return data;
// };
