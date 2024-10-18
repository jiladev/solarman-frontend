import * as Styled from "./styles";

interface ButtonProps {
  text: string;
  onClickFunction: (...args: any[]) => any;
}

export default function MainButton(props: ButtonProps) {
  return (
    <Styled.ConfirmButton onClick={() => props.onClickFunction()}>
      {props.text}
    </Styled.ConfirmButton>
  );
}
