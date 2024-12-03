import CompleteLogo from "../../assets/complete-logo.svg";
import LeaveButton from "../LeaveButton";
import BackButton from "../BackButton";
import * as Styled from "./styles";

interface HeaderProps {
  variant?: string;
}

export default function BaseHeader(props: HeaderProps) {
  if (props.variant === "return") {
    return (
      <Styled.Header>
        <Styled.Logo src={CompleteLogo} />
        <BackButton />
      </Styled.Header>
    );
  }

  return (
    <Styled.Header>
      <Styled.Logo src={CompleteLogo} />
      <LeaveButton />
    </Styled.Header>
  );
}
