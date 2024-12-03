import * as Styled from "./styles";

export default function BackButton() {
  function handleRedirect() {
    window.location.href = "https://cooperativasolarman.com.br";
  }

  return (
    <Styled.LogoutButton onClick={() => handleRedirect()}>
      VOLTAR
    </Styled.LogoutButton>
  );
}
