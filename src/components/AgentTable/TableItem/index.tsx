import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

interface ItemProps {
  data: {
    user: {
      id: number;
      name: string;
      phone: string;
    };
    numReports: number;
  };
}

export default function TableItem({ data }: ItemProps) {
  const navigate = useNavigate();

  return (
    <Styled.TableRow>
      <Styled.TableCell className="client">
        <div>
          <p>{data.user.name}</p>
          <p>
            <span>{data.user.phone}</span>
          </p>
        </div>
      </Styled.TableCell>

      <Styled.TableCell className="reports">
        <p>{data.numReports}</p>
      </Styled.TableCell>

      <button onClick={() => navigate(`/admin/dashboard/${data.user.id}`)}>
        Analisar
      </button>
    </Styled.TableRow>
  );
}
