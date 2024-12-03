import { useState, useContext } from "react";

import ReportIcon from "../../../assets/report-icon.png";
import MainModal from "../../MainModal";
import { AdminContext } from "../../../contexts/adminContext";
import { deleteReportById } from "../../../api/reportsRoutes/deleteReport";
import { printReportById } from "../../../api/reportsRoutes/getReports";
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
  getData: () => void;
}

export default function TableItem({ data, getData }: ItemProps) {
  const { admin } = useContext(AdminContext);

  const [modal, setModal] = useState({
    variant: "",
    message: "",
  });

  async function handleReportDeletion(id: number) {
    try {
      const request = await deleteReportById(id, admin.token);

      if (request === 200) {
        setModal({
          variant: "success",
          message: "Relatório deletado com sucesso!",
        });

        getData();
      } else {
        setModal({
          variant: "warning",
          message: "Não foi possível deletar o relatório!",
        });
      }
    } catch (err) {
      console.log(err);
      setModal({
        variant: "warning",
        message: "Ocorreu um erro ao deletar o relatório!",
      });
    }
  }

  async function handleReportRedownload(id: number) {
    try {
      await printReportById(id, admin.token);

      setModal({
        variant: "success",
        message: "Baixando relatório...",
      });
    } catch (err) {
      console.log(err);
      setModal({
        variant: "warning",
        message: "Não foi possível imprimir o relatório! Tente novamente!",
      });
    }
  }

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
        <Styled.TrashIcon onClick={() => handleReportDeletion(data.id)} />
        <Styled.PrinterIcon onClick={() => handleReportRedownload(data.id)} />
      </Styled.IconsCell>

      <MainModal
        variant={modal.variant}
        message={modal.message}
        setModal={setModal}
      />
    </Styled.TableRow>
  );
}
