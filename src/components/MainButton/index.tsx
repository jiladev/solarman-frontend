import * as Styled from "./styles";

interface ButtonProps {
  disabled: boolean;
  text: string;
  onClickFunction: (...args: any[]) => any;
}

export default function MainButton(props: ButtonProps) {
  return (
    <Styled.ConfirmButton disabled={props.disabled} onClick={() => props.onClickFunction()}>
      {props.text}
    </Styled.ConfirmButton>
  );
}
