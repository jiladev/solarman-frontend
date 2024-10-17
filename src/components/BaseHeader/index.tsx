import CompleteLogo from "../../assets/complete-logo.svg";
import * as Styled from "./styles";

export default function BaseHeader() {
  return (
    <Styled.Header>
      <Styled.Logo src={CompleteLogo} />
      <Styled.LogoutButton>SAIR</Styled.LogoutButton>
    </Styled.Header>
  );
}
