import * as Styled from "./styles";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  validInput: boolean;
  validMessage: string;
}

export default function MainInput(props: InputProps) {
  return (
    <Styled.InputDiv validstyle={props.validInput}>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value.slice(0, 60));
        }}
      />
      <Styled.Warning showWarning={!props.validInput}>
        {props.validMessage}
      </Styled.Warning>
    </Styled.InputDiv>
  );
}
