import { useRouteError } from "react-router-dom";

import * as Styled from "./styles"

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <Styled.PageContainer>
      <h1>Poxa! :(</h1>
      <p>Desculpe, parece que ocorreu um erro ao carregar a página desejada...</p>
      <span>
        {error.statusText || error.message}
      </span>
    </Styled.PageContainer>
  )
}