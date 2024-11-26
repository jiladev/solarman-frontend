import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import MainModal from "../../components/MainModal";
import * as Styled from "./styles";
import { AdminContext } from "../../contexts/adminContext";
import { VariableContext } from "../../contexts/variablesContext";
import { getVariables } from "../../api/variablesRoutes/getVariables";

export default function AdminBase() {
  const navigate = useNavigate();

  const { admin } = useContext(AdminContext);
  const { setVariables } = useContext(VariableContext);

  const [modal, setModal] = useState({
    variant: "",
    message: "",
  });

  if (!admin.token) {
    navigate("/login");
  }

  async function handleVariables() {
    try {
      const result = await getVariables(admin.token);

      setVariables(result);
    } catch (err) {
      console.error(err);
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
      <MainModal
        variant={modal.variant}
        message={modal.message}
        setModal={setModal}
      />
    </Styled.PageContainer>
  );
}
