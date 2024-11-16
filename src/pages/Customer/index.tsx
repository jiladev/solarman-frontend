import { useState } from "react";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import CopyParagraph from "../../components/CopyParagraph";
import Checkbox from "../../components/Checkbox";
import { formatPhone, formatBill } from "../../utils/inputFormat";
import * as Styled from "./styles";
import { postClientEstimate } from "../../api/clientsRoutes/postClientEstimate";

export default function Customer() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bill, setBill] = useState<string>("");
  const [validInputs, setValidInputs] = useState<boolean[]>([true, true, true]);
  const [agreed, isAgreed] = useState<boolean>(false);

  function handlePhone(thisPhone: string) {
    setPhone(formatPhone(thisPhone));
  }

  function handleBill(thisBill: string) {
    setBill(formatBill(thisBill));
  }

  function handleCheckboxChange() {
    isAgreed(!agreed);
  }

  async function handleEconomyCalculationRequest() {
    if (!agreed) {
      alert("Concorde com os termos!");
      return;
    }

    const requestName = name.trim();
    const requestPhone = phone
      .trim()
      .replace("(", "")
      .replace(")", "")
      .replace(" ", "")
      .replace("-", "");
    const requestBill = Number(
      bill.trim().replace("R$ ", "").replace(",", ".")
    );

    const validName = requestName !== "";
    const validPhone = requestPhone.length > 9;
    const validBill = requestBill > 0;

    const newValidInputs = [validName, validPhone, validBill];
    setValidInputs(newValidInputs);

    if (!validName || !validPhone || !validBill) {
      return;
    }

    const requestBody = {
      name: requestName,
      phone: requestPhone,
      fatura_copel: requestBill,
    };

    try {
      const request = await postClientEstimate(requestBody);

      if (request === 200) {
        alert(
          "Suas informações foram enviadas com sucesso! Aguarde o contato com um de nossos agentes."
        );
      } else {
        alert("Erro ao enviar informações!");
      }
    } catch (err) {
      alert("Erro ao enviar informações. Tente novamente mais tarde.");
    }
  }

  return (
    <Styled.PageContainer>
      <BaseHeader />

      <Styled.ContentContainer>
        <h1>
          Calcule sua economia <br /> com a Solar Man!
        </h1>

        <CopyParagraph />
        <MainInput
          label="NOME COMPLETO"
          type="text"
          placeholder="Seu nome aqui"
          value={name}
          setValue={setName}
          validInput={validInputs[0]}
        />
        <Styled.Warning showWarning={!validInputs[0]}>
          Insira o seu nome!
        </Styled.Warning>

        <MainInput
          label="CELULAR PARA CONTATO"
          type="text"
          placeholder="(12) 9 3456-7890 ou (12) 3456-7890"
          value={phone}
          setValue={handlePhone}
          validInput={validInputs[1]}
        />
        <Styled.Warning showWarning={!validInputs[1]}>
          Insira um número de telefone válido!
        </Styled.Warning>

        <MainInput
          label="VALOR DA SUA ÚLTIMA FATURA DE ENERGIA COPEL"
          type="text"
          placeholder="R$ 123,45"
          value={bill}
          setValue={handleBill}
          validInput={validInputs[2]}
        />
        <Styled.Warning showWarning={!validInputs[2]}>
          O valor da fatura deve ser maior que zero!
        </Styled.Warning>

        <Styled.CheckboxDiv>
          <Checkbox
            label="CONCORDO COM O TERMO DE ENVIO DE DADOS"
            checked={agreed}
            underline={true}
            onChange={() => handleCheckboxChange()}
          />
        </Styled.CheckboxDiv>

        <MainButton
          text="CALCULAR"
          onClickFunction={handleEconomyCalculationRequest}
        />
      </Styled.ContentContainer>

      <RightsFooter />
    </Styled.PageContainer>
  );
}
