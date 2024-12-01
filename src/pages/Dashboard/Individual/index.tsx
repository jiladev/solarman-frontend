import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import HistoryTable from "../../../components/HistoryTable";
import RightsFooter from "../../../components/RightsFooter";
import { getUserDetails } from "../../../api/usersRoutes/getUsers";
import { AdminContext } from "../../../contexts/adminContext";
import { LoaderContext } from "../../../contexts/loaderContext";
import { UserInterface } from "../../../utils/objectFormat";
import * as Styled from "./styles";

export default function IndividualDashboard() {
  const { admin } = useContext(AdminContext);
  const { setLoading } = useContext(LoaderContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<UserInterface | undefined>(undefined);

  async function getData() {
    setLoading(true);

    try {
      const requestUser = await getUserDetails(Number(id), admin.token);
      setUser({
        id: requestUser.id,
        name: requestUser.name,
        phone: requestUser.phone,
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  return (
    <Styled.PageContainer>
      <Styled.Content>
        <div>
          <Styled.BackButton onClick={() => navigate("/admin/dashboard")}>
            Voltar
          </Styled.BackButton>
          <h1>{user?.name} - Colaborador</h1>
        </div>
      </Styled.Content>

      <HistoryTable userId={Number(id)} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}
