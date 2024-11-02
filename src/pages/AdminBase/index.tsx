import { Outlet } from "react-router-dom";

import AdminHeader from "../../components/AdminHeader";
import AdminSidebar from "../../components/AdminSidebar";
import * as Styled from "./styles";

export default function AdminBase() {

  //Teste deploy 1

  return (
    <Styled.PageContainer>
      <AdminHeader />
      <AdminSidebar />
      <Styled.AdminPageDetails>
        <Outlet />
      </Styled.AdminPageDetails>
    </Styled.PageContainer>
  )
}