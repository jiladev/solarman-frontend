import { useNavigate } from "react-router-dom";

import CopyParagraph from "../CopyParagraph";
import MainButton from "../MainButton";
import * as Styled from "./styles";

interface OptionProps {
  title: string;
  description: string | Element;
  buttonTitle: string;
  redirectTo: string;
}

export default function WelcomeOption(props: OptionProps) {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <h1>{props.title}</h1>
      <Styled.Separator />
      <h6 dangerouslySetInnerHTML={{ __html: props.description }}></h6>
      <CopyParagraph />
      <MainButton
        disabled={false}
        text={props.buttonTitle}
        onClickFunction={() => navigate(props.redirectTo)}
      />
    </Styled.Container>
  );
}
