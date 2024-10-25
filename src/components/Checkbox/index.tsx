import * as Styled from "./styles";

interface CheckboxProps {
  label: string;
  checked: boolean;
  underlined: boolean;
  onChange: () => void;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <Styled.CheckboxContainer underlined={props.underlined}>
      <Styled.HiddenCheckbox
        checked={props.checked}
        onChange={props.onChange}
      />
      <Styled.Checkmark />
      <label>{props.label}</label>
    </Styled.CheckboxContainer>
  );
}
