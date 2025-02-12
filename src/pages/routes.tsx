import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

import PageHome from "./PageHome/PageHome";
import PageProfile from "./PageProfile/PageProfile";

import PageNotFound from "./PageNotFound/PageNotFound";
import PageLogin from "./PageLogin/PageLogin";
import PageAvatar from "./PageAvatar/PageAvatar";
import PageChats from "./PageChats/PageChats";
import PageSettings from "./PageSettings/PageSettings";
import PageChatId from "./PageChatId/PageChatId";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <PageHome />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <PageProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/avatar",
    element: (
      <ProtectedRoute>
        <PageAvatar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/chats/*",
    element: (
      <ProtectedRoute>
        <PageChats />
      </ProtectedRoute>
    ),
    children: [
      {
        path: ":chatId",
        element: <PageChatId />,
      },
    ],
  },
  {
    path: "/settings",
    element: (
      <ProtectedRoute>
        <PageSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const routesAut = [
  {
    path: "/login",
    element: <PageLogin />,
  }
];
