import { useContext } from "react";

import { AdminContext } from "../../contexts/adminContext";
import LeaveButton from "../LeaveButton";
import * as Styled from "./styles";

export default function AdminHeader() {
  const context = useContext(AdminContext);

  return (
    <Styled.Container>
      <Styled.Content>
        <h1>
          Olá, <span>{context.admin.name}</span>!
        </h1>
        <LeaveButton />
      </Styled.Content>
    </Styled.Container>
  );
}
