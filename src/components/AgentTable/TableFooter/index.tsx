import * as Styled from "./styles";

interface FooterProps {
  currentPage: number;
  endPage: number;
}

export default function TableFooter(props: FooterProps) {
  return (
    <Styled.TableFooter>
      <button>Página Anterior</button>
      <p>Página {props.currentPage} de {props.endPage}</p>
      <button>Próxima Página</button>
    </Styled.TableFooter>
  );
}
