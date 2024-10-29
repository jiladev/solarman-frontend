import * as Styled from "./styles";

export default function TableHeader() {
  return (
    <Styled.TableHeader>
      <Styled.TableHeaderCell className="client">
        <h2>Colaborador</h2>
        <Styled.ArrowDown />
      </Styled.TableHeaderCell>

      <Styled.TableHeaderCell className="reports">
        <h2>Relatórios Gerados</h2>
        <Styled.ArrowDown />
      </Styled.TableHeaderCell>
    </Styled.TableHeader>
  );
}
