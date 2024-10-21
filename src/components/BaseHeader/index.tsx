import CompleteLogo from "../../assets/complete-logo.svg";
import LeaveButton from "../LeaveButton";
import * as Styled from "./styles";

export default function BaseHeader() {
  return (
    <Styled.Header>
      <Styled.Logo src={CompleteLogo} />
      <LeaveButton />
    </Styled.Header>
  );
}
