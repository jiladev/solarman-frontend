import { useState } from "react";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import CopyParagraph from "../../components/CopyParagraph";
import * as Styled from "./styles";

export default function Customer() {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bill, setBill] = useState<string>("");
  const [agreed, isAgreed] = useState<boolean>(false);

  function formatPhone(phone: string) {
    phone = phone.replace(/\D/g, "");
    let formattedString = "";

    if (phone.length > 0) {
      formattedString = "(";
    }

    formattedString += phone.slice(0, 2);

    if (phone.length > 2) {
      formattedString += ") ";
    }

    if (phone.length > 2) {
      formattedString += phone.slice(2, 6);
    }

    if (phone.length > 6) {
      formattedString += "-";
      formattedString += phone.slice(6, 10);
    }

    if (phone.length === 11) {
      formattedString =
        formattedString.slice(0, 5) +
        phone.slice(2, 3) +
        " " +
        phone.slice(3, 7) +
        "-" +
        phone.slice(7, 11);
    }

    setPhone(formattedString);
  }

  function formatBill(bill: string) {
    bill = bill.replace(/\./g, ",");
    const firstCommaIndex = bill.indexOf(",");
    if (firstCommaIndex !== -1) {
      bill =
        bill.substring(0, firstCommaIndex + 1) +
        bill
          .substring(firstCommaIndex + 1)
          .replace(/,/g, "")
          .slice(0, 2);
    }
    bill = bill.replace(/[^\d,]/g, "");
    let formattedString = "";
    if (bill.length > 0) {
      formattedString = "R$ ";
    }
    formattedString += bill;
    setBill(formattedString);
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
          placeholder="(12) 9 3456-7890"
          value={phone}
          setValue={formatPhone}
        />
        <MainInput
          label="VALOR DA SUA ÚLTIMA FATURA DE ENERGIA COPEL"
          type="text"
          placeholder="R$ 123,45"
          value={bill}
          setValue={formatBill}
        />

        <Styled.CheckboxContainer>
          <Styled.HiddenCheckbox
            checked={agreed}
            onChange={() => handleCheckboxChange()}
          />
          <Styled.Checkmark />
          <label>CONCORDO COM O TERMO DE ENVIO DE DADOS.</label>
        </Styled.CheckboxContainer>

        <MainButton
          text="CALCULAR"
          onClickFunction={handleEconomyCalculationRequest}
        />
      </Styled.ContentContainer>

      <RightsFooter />
    </Styled.PageContainer>
  );
}
