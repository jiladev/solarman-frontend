import * as Styled from "./styles";

interface CheckboxProps {
  label: string;
  checked: boolean;
  underline: boolean;
  onChange: () => void;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <Styled.CheckboxContainer underline={props.underline}>
      <Styled.HiddenCheckbox
        checked={props.checked}
        onChange={props.onChange}
      />
      <Styled.Checkmark />
      <label>{props.label}</label>
    </Styled.CheckboxContainer>
  );
}
