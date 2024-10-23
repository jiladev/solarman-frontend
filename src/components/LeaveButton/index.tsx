import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

export default function LeaveButton() {
  const navigate = useNavigate();

  return (
    <Styled.LogoutButton onClick={() => navigate("/login")}>
      SAIR
    </Styled.LogoutButton>
  );
}
