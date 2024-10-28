import * as Styled from "./styles";

export default function TableHeader() {
  return (
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
  );
}
