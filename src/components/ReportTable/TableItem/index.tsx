import ReportIcon from "../../../assets/report-icon.png";
import * as Styled from "./styles";

interface ItemProps {
  client: {
    name: string;
    phone: string;
  };
  datetime: string;
  originalValue: string;
  discountedValue: string;
}

export default function TableItem(props: ItemProps) {
  return (
    <Styled.TableRow>
      <Styled.TableCell className="client">
        <img src={ReportIcon} />
        <div>
          <p>{props.client.name}</p>
          <p>
            <span>{props.client.phone}</span>
          </p>
        </div>
      </Styled.TableCell>

      <Styled.TableCell className="datetime">
        <p>{props.datetime}</p>
      </Styled.TableCell>

      <Styled.TableCell className="value">
        <p>{props.originalValue}</p>
      </Styled.TableCell>

      <Styled.TableCell className="value">
        <p>{props.discountedValue}</p>
      </Styled.TableCell>

      <Styled.IconsCell>
        <Styled.TrashIcon />
        <Styled.PrinterIcon />
      </Styled.IconsCell>
    </Styled.TableRow>
  );
}
