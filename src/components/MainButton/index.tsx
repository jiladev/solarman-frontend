import { useContext } from "react";

import Loader from "../Loader";
import { LoaderContext } from "../../contexts/loaderContext";
import * as Styled from "./styles";

interface ButtonProps {
  disabled: boolean;
  text: string;
  onClickFunction: (...args: any[]) => any;
}

export default function MainButton(props: ButtonProps) {
  const { loading } = useContext(LoaderContext);

  return (
    <Styled.ConfirmButton
      disabled={props.disabled || loading}
      onClick={() => props.onClickFunction()}
    >
      {loading ? <Loader /> : props.text}
    </Styled.ConfirmButton>
  );
}
