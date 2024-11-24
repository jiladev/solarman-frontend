import ReportIcon from "../../../assets/report-icon.png";
import * as Styled from "./styles";

interface ItemProps {
  data: {
    id: number;
    client: {
      id: number;
      name: string;
      phone: string;
    };
    datetime: string;
    originalValue: string;
    discountedValue: string;
  };
}

export default function TableItem({ data }: ItemProps) {
  return (
    <Styled.TableRow>
      <Styled.TableCell className="client">
        <img src={ReportIcon} />
        <div>
          <p>{data.client.name}</p>
          <p>
            <span>{data.client.phone}</span>
          </p>
        </div>
      </Styled.TableCell>

      <Styled.TableCell className="datetime">
        <p>{data.datetime}</p>
      </Styled.TableCell>

      <Styled.TableCell className="value">
        <p>{data.originalValue}</p>
      </Styled.TableCell>

      <Styled.TableCell className="value">
        <p>{data.discountedValue}</p>
      </Styled.TableCell>

      <Styled.IconsCell>
        <Styled.TrashIcon />
        <Styled.PrinterIcon />
      </Styled.IconsCell>
    </Styled.TableRow>
  );
}
