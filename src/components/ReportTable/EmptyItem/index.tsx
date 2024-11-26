import { ReactNode } from "react";

import * as Styled from "./styles";

interface ItemProps {
  children?: ReactNode;
}

export default function EmptyItem({ children }: ItemProps) {
  return <Styled.TableRow>{children}</Styled.TableRow>;
}
