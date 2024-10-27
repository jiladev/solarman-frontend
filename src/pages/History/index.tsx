import { useState } from "react";

import ReportIcon from "../../assets/report-icon.png";
import RightsFooter from "../../components/RightsFooter";
import SearchBar from "../../components/SearchBar";
import * as Styled from "./styles";

export default function History() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dataPreview);

  return (
    <Styled.PageContainer>
      <Styled.HistoryTable>
        <SearchBar value={search} setValue={setSearch} />
        <Styled.TableHeader>
          <Styled.TableHeaderCell className="client">
            <h2>Cliente</h2>
            <Styled.ArrowDown />
          </Styled.TableHeaderCell>

          <Styled.TableHeaderCell className="datetime">
            <h2>Dia/Hora</h2>
            <Styled.ArrowDown />
          </Styled.TableHeaderCell>

          <Styled.TableHeaderCell className="value">
            <h2>Valor Inserido</h2>
            <Styled.ArrowDown />
          </Styled.TableHeaderCell>

          <Styled.TableHeaderCell className="value">
            <h2>Valor Com Desconto</h2>
            <Styled.ArrowDown />
          </Styled.TableHeaderCell>
        </Styled.TableHeader>

        {data.map((row, index) => {
          return (
            <Styled.TableRow key={index}>
              <Styled.TableCell className="client">
                <img src={ReportIcon} />
                <div>
                  <p>{row.client.name}</p>
                  <p>
                    <span>{row.client.phone}</span>
                  </p>
                </div>
              </Styled.TableCell>

              <Styled.TableCell className="datetime">
                <p>{row.datetime}</p>
              </Styled.TableCell>

              <Styled.TableCell className="value">
                <p>{row.originalValue}</p>
              </Styled.TableCell>

              <Styled.TableCell className="value">
                <p>{row.discountedValue}</p>
              </Styled.TableCell>

              <Styled.IconsCell>
                <Styled.TrashIcon />
                <Styled.PrinterIcon />
              </Styled.IconsCell>
            </Styled.TableRow>
          );
        })}

        <Styled.TableFooter>
          <button>Página Anterior</button>
          <p>Página 1 de 10</p>
          <button>Próxima Página</button>
        </Styled.TableFooter>
      </Styled.HistoryTable>
      <RightsFooter />
    </Styled.PageContainer>
  );
}

const dataPreview = [
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
];
