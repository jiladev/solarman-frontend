import { useState } from "react";

import BaseHeader from "../../components/BaseHeader";
import * as Styled from "./styles";

interface UserCredentials {
  email: string;
  password: string;
}

export default function Login() {
  const [showPassword, isShowPassword] = useState<Boolean>(false);
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  function toggleShowPassword() {
    isShowPassword(!showPassword);
  }

  function handleLogin() {
    console.log(credentials);
    alert("Logado!");
  }

  return (
    <Styled.PageContainer>
      <BaseHeader />

      <Styled.InputPanel>
        <h1>Acesse o sistema</h1>
        <h3>Cooperativa Solarman</h3>

        <Styled.InputDiv>
          <label>USUÁRIO</label>
          <input
            type="text"
            placeholder="email@exemplo.com"
            value={credentials.email}
            onChange={(e) => {
              setCredentials({
                ...credentials,
                email: e.target.value,
              });
            }}
          ></input>
        </Styled.InputDiv>

        <Styled.InputDiv>
          <label>SENHA</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha aqui"
            value={credentials.password}
            onChange={(e) => {
              setCredentials({
                ...credentials,
                password: e.target.value,
              });
            }}
          ></input>
          {showPassword ? (
            <Styled.EyeIcon onClick={() => toggleShowPassword()} />
          ) : (
            <Styled.ClosedEyeIcon onClick={() => toggleShowPassword()} />
          )}
        </Styled.InputDiv>

        <Styled.ConfirmButton onClick={() => handleLogin()}>
          ENTRAR
        </Styled.ConfirmButton>
      </Styled.InputPanel>

      <Styled.RightsReserved>
        &copy; 2024 - Cooperativa SolarMan. Todos os direitos reservados.
      </Styled.RightsReserved>
    </Styled.PageContainer>
  );
}
