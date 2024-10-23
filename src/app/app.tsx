import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Customer from "../pages/Customer";
import AdminBase from "../pages/AdminBase";
import Welcome from "../pages/Welcome";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cliente",
      element: <Customer />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/admin",
      element: <AdminBase />,
      children: [
        {
          path: "/admin/orcamento",
          element: <div>Busquem comer cimento</div>,
        },
        {
          path: "/admin/historico",
          element: <div>historico aqui</div>,
        },
        {
          path: "/admin/variaveis",
          element: <div>variaveis aqui</div>,
        },
        {
          path: "/admin/dashboard",
          element: <div>dashboard aqui</div>,
        },
        {
          path: "/admin/cadastro",
          element: <div>cadastro aqui</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
