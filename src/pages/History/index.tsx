import { useState } from "react";

import ReportIcon from "../../assets/report-icon.png";
import RightsFooter from "../../components/RightsFooter";
import SearchBar from "../../components/SearchBar";
import * as Styled from "./styles";

export default function History() {
  const [search, setSearch] = useState("");

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

        <Styled.TableRow>
          <Styled.TableCell className="client">
            <img src={ReportIcon} />
            <div>
              <p>João da Silva</p>
              <p>
                <span>(12) 9 3456-7890</span>
              </p>
            </div>
          </Styled.TableCell>

          <Styled.TableCell className="datetime">
            <p>14-09-2024 13:00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 100,00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 80,00</p>
          </Styled.TableCell>

          <Styled.IconsCell>
            <Styled.TrashIcon />
            <Styled.PrinterIcon />
          </Styled.IconsCell>
        </Styled.TableRow>

        <Styled.TableRow>
          <Styled.TableCell className="client">
            <img src={ReportIcon} />
            <div>
              <p>João da Silva</p>
              <p>
                <span>(12) 9 3456-7890</span>
              </p>
            </div>
          </Styled.TableCell>

          <Styled.TableCell className="datetime">
            <p>14-09-2024 13:00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 100,00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 80,00</p>
          </Styled.TableCell>

          <Styled.IconsCell>
            <Styled.TrashIcon />
            <Styled.PrinterIcon />
          </Styled.IconsCell>
        </Styled.TableRow>

        <Styled.TableRow>
          <Styled.TableCell className="client">
            <img src={ReportIcon} />
            <div>
              <p>João da Silva</p>
              <p>
                <span>(12) 9 3456-7890</span>
              </p>
            </div>
          </Styled.TableCell>

          <Styled.TableCell className="datetime">
            <p>14-09-2024 13:00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 100,00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 80,00</p>
          </Styled.TableCell>

          <Styled.IconsCell>
            <Styled.TrashIcon />
            <Styled.PrinterIcon />
          </Styled.IconsCell>
        </Styled.TableRow>

        <Styled.TableRow>
          <Styled.TableCell className="client">
            <img src={ReportIcon} />
            <div>
              <p>João da Silva</p>
              <p>
                <span>(12) 9 3456-7890</span>
              </p>
            </div>
          </Styled.TableCell>

          <Styled.TableCell className="datetime">
            <p>14-09-2024 13:00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 100,00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 80,00</p>
          </Styled.TableCell>

          <Styled.IconsCell>
            <Styled.TrashIcon />
            <Styled.PrinterIcon />
          </Styled.IconsCell>
        </Styled.TableRow>

        <Styled.TableRow>
          <Styled.TableCell className="client">
            <img src={ReportIcon} />
            <div>
              <p>João da Silva</p>
              <p>
                <span>(12) 9 3456-7890</span>
              </p>
            </div>
          </Styled.TableCell>

          <Styled.TableCell className="datetime">
            <p>14-09-2024 13:00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 100,00</p>
          </Styled.TableCell>

          <Styled.TableCell className="value">
            <p>R$ 80,00</p>
          </Styled.TableCell>

          <Styled.IconsCell>
            <Styled.TrashIcon />
            <Styled.PrinterIcon />
          </Styled.IconsCell>
        </Styled.TableRow>

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
