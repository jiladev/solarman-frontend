import * as Styled from "./styles";

interface SearchProps {
  value: string;
  setValue: (value: string) => void;
}

export default function SearchBar(props: SearchProps) {
  return (
    <Styled.Container>
      <div>
        <Styled.MagGlass />
        <input
          type="text"
          placeholder="Procurar"
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>
    </Styled.Container>
  );
}
