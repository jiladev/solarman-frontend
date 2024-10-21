import CompleteLogoWhite from "../../assets/complete-logo-white.svg";
import * as Styled from "./styles";

export default function AdminSidebar() {
  return (
    <Styled.Container>
      <Styled.Logo src={CompleteLogoWhite} />
      <h1>Hello world!</h1>
    </Styled.Container>
  )
}