import { useState } from "react";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import * as Styled from "./styles";

export default function Login() {
  const [showPassword, isShowPassword] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function toggleShowPassword() {
    isShowPassword(!showPassword);
  }

  function handleLogin() {
    console.log({ email, password });
    alert("Logado!");
  }

  return (
    <Styled.PageContainer>
      <BaseHeader />

      <Styled.InputPanel>
        <h1>Acesse o sistema</h1>
        <h3>Cooperativa Solarman</h3>

        <MainInput
          label="USUÁRIO"
          type="text"
          placeholder="email@exemplo.com"
          value={email}
          setValue={setEmail}
        />
        <Styled.PasswordInputDiv>
          <MainInput
            label="SENHA"
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha aqui"
            value={password}
            setValue={setPassword}
          />
          {showPassword ? (
            <Styled.EyeIcon onClick={() => toggleShowPassword()} />
          ) : (
            <Styled.ClosedEyeIcon onClick={() => toggleShowPassword()} />
          )}
        </Styled.PasswordInputDiv>

        <MainButton text="ENTRAR" onClickFunction={handleLogin} />
      </Styled.InputPanel>

      <RightsFooter />
    </Styled.PageContainer>
  );
}
