import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import Loader from "../Loader";
import * as Styled from "./styles";
import { AdminContext } from "../../contexts/adminContext";
import { LoaderContext } from "../../contexts/loaderContext";
import { postLogout } from "../../api/authRoutes/postLogout";

export default function LeaveButton() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoaderContext);
  const { admin, setAdmin } = useContext(AdminContext);

  async function handleLogout() {
    setLoading(true);

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

    setLoading(false);
    navigate("/");
  }

  return (
    <Styled.LogoutButton disabled={loading} onClick={() => handleLogout()}>
      {loading ? <Loader /> : "SAIR"}
    </Styled.LogoutButton>
  );
}
