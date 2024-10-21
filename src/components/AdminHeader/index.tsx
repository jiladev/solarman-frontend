import { useState } from "react";

import LeaveButton from "../LeaveButton";
import * as Styled from "./styles";

export default function AdminHeader() {
  const [user, setUser] = useState("[user]");

  return (
    <Styled.Container>
      <h1>Olá, <span>{user}</span>!</h1>
      <LeaveButton />
    </Styled.Container>
  )
}