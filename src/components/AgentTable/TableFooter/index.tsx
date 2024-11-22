import * as Styled from "./styles";

interface FooterProps {
  changePage: (newPage: number) => void;
  currentPage: number;
  endPage: number;
}

export default function TableFooter(props: FooterProps) {
  return (
    <Styled.TableFooter>
      <button onClick={() => props.changePage(props.currentPage - 1)}>Página Anterior</button>
      <p>Página {props.currentPage} de {props.endPage}</p>
      <button onClick={() => props.changePage(props.currentPage + 1)}>Próxima Página</button>
    </Styled.TableFooter>
  );
}
