import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";

interface ItemProps {
  user: {
    id: number;
    name: string;
    phone: string;
  };
  numReports: number;
}

export default function TableItem(props: ItemProps) {
  const navigate = useNavigate();

  return (
    <Styled.TableRow>
      <Styled.TableCell className="client">
        <div>
          <p>{props.user.name}</p>
          <p>
            <span>{props.user.phone}</span>
          </p>
        </div>
      </Styled.TableCell>

      <Styled.TableCell className="reports">
        <p>{props.numReports}</p>
      </Styled.TableCell>

      <button onClick={() => navigate(`/admin/dashboard/${props.user.id}`)}>
        Analisar
      </button>
    </Styled.TableRow>
  );
}
