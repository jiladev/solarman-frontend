import * as Styled from "./styles";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

export default function MainInput(props: InputProps) {
  return (
    <Styled.InputDiv>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      ></input>
    </Styled.InputDiv>
  );
}
