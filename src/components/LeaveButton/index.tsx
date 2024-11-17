import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import * as Styled from "./styles";
import { AdminContext } from "../../contexts/adminContext";
import { postLogout } from "../../api/authRoutes/postLogout";

export default function LeaveButton() {
  const navigate = useNavigate();

  const { admin, setAdmin } = useContext(AdminContext);

  async function handleLogout() {
    if (admin.token) {
      try {
        const request = await postLogout(admin.token);

        if (request === 200) {
          setAdmin({
            id: -1,
            name: "",
            email: "",
            phone: "",
            token: "",
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    navigate("/");
  }

  return (
    <Styled.LogoutButton onClick={() => handleLogout()}>
      SAIR
    </Styled.LogoutButton>
  );
}
