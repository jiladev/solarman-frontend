import { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import * as Styled from "./styles";
import { AdminContext } from "../../contexts/adminContext";
import { VariableContext } from "../../contexts/variablesContext";
import { getVariables } from "../../api/variablesRoutes/getVariables";

export default function AdminBase() {
  const navigate = useNavigate();

  const { admin } = useContext(AdminContext);
  const { setVariables } = useContext(VariableContext);

  if (!admin.token) {
    navigate("/login");
  }

  async function handleVariables() {
    try {
      const result = await getVariables(admin.token);

      setVariables(result);
    } catch (err) {
      console.error(err);
      alert(
        "Não foi possível obter as variáveis do banco de dados, redirecionando..."
      );
      navigate("/login");
    }
  }

  useEffect(() => {
    handleVariables();
  }, []);

  return (
    <Styled.PageContainer>
      <AdminHeader />
      <AdminSidebar />
      <Styled.AdminPageDetails>
        <Outlet />
      </Styled.AdminPageDetails>
    </Styled.PageContainer>
  );
}
