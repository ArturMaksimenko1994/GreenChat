import { Route, Routes } from "react-router";

import AppLayout from "./../Layouts/AppLayout";
import AuthLayout from "./../Layouts/AuthLayout";

import { routes, routesAut } from "../../pages/routes";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>

      <Route element={<AuthLayout />}>
        {routesAut.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
