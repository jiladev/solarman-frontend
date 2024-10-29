import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AdminProvider } from "../contexts/adminContext";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Customer from "../pages/Customer";
import AdminBase from "../pages/AdminBase";
import Welcome from "../pages/Welcome";
import Budget from "../pages/Budget";
import History from "../pages/History";
import Variables from "../pages/Variables";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import IndividualDashboard from "../pages/Dashboard/Individual";

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
          element: <Budget />,
        },
        {
          path: "/admin/historico",
          element: <History />,
        },
        {
          path: "/admin/variaveis",
          element: <Variables />,
        },
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/dashboard/:id",
          element: <IndividualDashboard />,
        },
        {
          path: "/admin/cadastro",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;
