import { useState } from "react";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import CopyParagraph from "../../components/CopyParagraph";
import Checkbox from "../../components/Checkbox";
import { formatPhone, formatBill } from "../../utils/inputFormat";
import * as Styled from "./styles";

export default function Customer() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bill, setBill] = useState<string>("");
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

  function handleEconomyCalculationRequest() {
    if (agreed) {
      console.log({ name, phone, bill });
      alert("Parabéns, você ganhou R$1.000.000,00!!!!!");
    } else {
      alert("Concorde com os termos!");
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
        />
        <MainInput
          label="CELULAR PARA CONTATO"
          type="text"
          placeholder="(12) 9 3456-7890 ou (12) 3456-7890"
          value={phone}
          setValue={handlePhone}
        />
        <MainInput
          label="VALOR DA SUA ÚLTIMA FATURA DE ENERGIA COPEL"
          type="text"
          placeholder="R$ 123,45"
          value={bill}
          setValue={handleBill}
        />

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
