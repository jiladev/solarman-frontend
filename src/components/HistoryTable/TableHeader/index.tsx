import * as Styled from "./styles";

interface TableHeaderProps {
  sortOptions: number[];
  setSortOptions: (value: number[]) => void;
}

export default function TableHeader({
  sortOptions,
  setSortOptions,
}: TableHeaderProps) {
  function handleSortOptions(index: number) {
    const newSortOptions = sortOptions.map(() => 0);

    if (sortOptions[index] === 1) {
      newSortOptions[index] = 2;
    } else {
      newSortOptions[index] = 1;
    }
    
    setSortOptions(newSortOptions);
  }

  return (
    <Styled.TableHeader>
      <Styled.TableHeaderCell className="client">
        <h2>Cliente</h2>
        {sortOptions[0] === 1 ? (
          <Styled.ArrowDown selected onClick={() => handleSortOptions(0)} />
        ) : sortOptions[0] === 2 ? (
          <Styled.ArrowUp selected onClick={() => handleSortOptions(0)} />
        ) : (
          <Styled.ArrowDown selected={false} onClick={() => handleSortOptions(0)} />
        )}
      </Styled.TableHeaderCell>

      <Styled.TableHeaderCell className="datetime">
        <h2>Dia/Hora</h2>
        {sortOptions[1] === 1 ? (
          <Styled.ArrowDown selected onClick={() => handleSortOptions(1)} />
        ) : sortOptions[1] === 2 ? (
          <Styled.ArrowUp selected onClick={() => handleSortOptions(1)} />
        ) : (
          <Styled.ArrowDown selected={false} onClick={() => handleSortOptions(1)} />
        )}
      </Styled.TableHeaderCell>

      <Styled.TableHeaderCell className="value">
        <h2>Valor Inserido</h2>
        {sortOptions[2] === 1 ? (
          <Styled.ArrowDown selected onClick={() => handleSortOptions(2)} />
        ) : sortOptions[2] === 2 ? (
          <Styled.ArrowUp selected onClick={() => handleSortOptions(2)} />
        ) : (
          <Styled.ArrowDown selected={false} onClick={() => handleSortOptions(2)} />
        )}
      </Styled.TableHeaderCell>

      <Styled.TableHeaderCell className="value">
        <h2>Valor Com Desconto</h2>
        {sortOptions[3] === 1 ? (
          <Styled.ArrowDown selected onClick={() => handleSortOptions(3)} />
        ) : sortOptions[3] === 2 ? (
          <Styled.ArrowUp selected onClick={() => handleSortOptions(3)} />
        ) : (
          <Styled.ArrowDown selected={false} onClick={() => handleSortOptions(3)} />
        )}
      </Styled.TableHeaderCell>
    </Styled.TableHeader>
  );
}