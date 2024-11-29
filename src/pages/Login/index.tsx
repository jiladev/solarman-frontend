import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import MainModal from "../../components/MainModal";
import { postLogin } from "../../api/authRoutes/postLogin";
import { LoaderContext } from "../../contexts/loaderContext";
import { AdminContext } from "../../contexts/adminContext";
import * as Styled from "./styles";

export default function Login() {
  const { setAdmin } = useContext(AdminContext);
  const { setLoading } = useContext(LoaderContext);
  const navigate = useNavigate();

  const [showPassword, isShowPassword] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validInputs, setValidInputs] = useState<boolean[]>([true, true]);
  const [modal, setModal] = useState({
    variant: "",
    message: "",
  });

  function toggleShowPassword() {
    isShowPassword(!showPassword);
  }

  async function handleLogin() {
    const requestEmail = email.trim();
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validEmail = regexEmail.test(requestEmail);
    const validPassword = password.length > 0;

    const newValidInputs = [validEmail, validPassword];
    setValidInputs(newValidInputs);

    if (!validEmail || !validPassword) {
      return;
    }

    const requestBody = {
      email: requestEmail,
      password,
    };

    setLoading(true);

    try {
      const request = await postLogin(requestBody);

      setAdmin({
        ...request.user,
        token: request.token,
      });
      navigate("/admin/orcamento");
    } catch (err) {
      console.error(err);
      setModal({
        variant: "warning",
        message:
          "Erro ao enviar informações. Verifique os campos e tente novamente!",
      });
    }

    setLoading(false);
  }

  return (
    <Styled.PageContainer>
      <BaseHeader />

      <Styled.InputPanel>
        <h1>Acesse o sistema</h1>
        <h3>Cooperativa Solarmann</h3>

        <MainInput
          label="USUÁRIO"
          type="text"
          placeholder="email@exemplo.com"
          value={email}
          setValue={setEmail}
          validInput={validInputs[0]}
          validMessage="Insira um endereço de e-mail válido!"
        />
        <Styled.PasswordInputDiv>
          <MainInput
            label="SENHA"
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha aqui"
            value={password}
            setValue={setPassword}
            validInput={validInputs[1]}
            validMessage="Preencha este campo!"
          />
          {showPassword ? (
            <Styled.EyeIcon onClick={() => toggleShowPassword()} />
          ) : (
            <Styled.ClosedEyeIcon onClick={() => toggleShowPassword()} />
          )}
        </Styled.PasswordInputDiv>

        <MainButton
          disabled={false}
          text="ENTRAR"
          onClickFunction={handleLogin}
        />
      </Styled.InputPanel>

      <RightsFooter />
      <MainModal
        variant={modal.variant}
        message={modal.message}
        setModal={setModal}
      />
    </Styled.PageContainer>
  );
}
