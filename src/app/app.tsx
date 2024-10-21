import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "../pages/Error";
import Login from "../pages/Login";
import Customer from "../pages/Customer";
import AdminBase from "../pages/AdminBase";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Customer />,
      errorElement: <ErrorPage />,
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
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
