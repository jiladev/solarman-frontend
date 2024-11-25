import { useState, useContext } from "react";

import BaseHeader from "../../components/BaseHeader";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import CopyParagraph from "../../components/CopyParagraph";
import Checkbox from "../../components/Checkbox";
import MainModal from "../../components/MainModal";
import { LoaderContext } from "../../contexts/loaderContext";
import {
  formatPhone,
  formatBill,
  revertPhone,
  revertToNumber,
} from "../../utils/inputFormat";
import { postClientEstimate } from "../../api/clientsRoutes/postClientEstimate";
import * as Styled from "./styles";

export default function Customer() {
  const { setLoading } = useContext(LoaderContext);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bill, setBill] = useState<string>("");
  const [validInputs, setValidInputs] = useState<boolean[]>([true, true, true]);
  const [agreed, isAgreed] = useState<boolean>(false);
  const [modal, setModal] = useState({
    variant: "",
    message: "",
  });

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
      setModal({
        variant: "warning",
        message: "Você precisa concordar com os termos!",
      });
      return;
    }

    const requestName = name.trim();
    const requestPhone = revertPhone(phone.trim());
    const requestBill = Number(revertToNumber(bill.trim()));

    const validName = requestName !== "";
    const validPhone = requestPhone.length > 9;
    const validBill = requestBill > 0;

    const newValidInputs = [validName, validPhone, validBill];
    setValidInputs(newValidInputs);

    if (!validName || !validPhone || !validBill) {
      setModal({
        variant: "warning",
        message: "Preencha todos os campos corretamente!",
      });
      return;
    }

    const requestBody = {
      name: requestName,
      phone: requestPhone,
      fatura_copel: requestBill,
    };

    setLoading(true);

    try {
      const request = await postClientEstimate(requestBody);

      if (request === 200) {
        setModal({
          variant: "success",
          message:
            "Suas informações foram enviadas com sucesso! Aguarde o contato com um de nossos agentes.",
        });
      } else {
        setModal({
          variant: "warning",
          message: "Erro ao enviar informações. Tente novamente!",
        });
      }
    } catch (err) {
      console.log(err);
      setModal({
        variant: "warning",
        message: "Erro ao enviar informações. Tente novamente mais tarde!",
      });
    }

    setLoading(false);
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
          validMessage="Insira o seu nome!"
        />

        <MainInput
          label="CELULAR PARA CONTATO"
          type="text"
          placeholder="(12) 9 3456-7890 ou (12) 3456-7890"
          value={phone}
          setValue={handlePhone}
          validInput={validInputs[1]}
          validMessage="Insira um número de telefone válido!"
        />

        <MainInput
          label="VALOR DA SUA ÚLTIMA FATURA DE ENERGIA COPEL"
          type="text"
          placeholder="R$ 123,45"
          value={bill}
          setValue={handleBill}
          validInput={validInputs[2]}
          validMessage="O valor da fatura deve ser maior que zero!"
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
          disabled={false}
          text="CALCULAR"
          onClickFunction={handleEconomyCalculationRequest}
        />
      </Styled.ContentContainer>

      <RightsFooter />
      <MainModal
        variant={modal.variant}
        message={modal.message}
        setModal={setModal}
      />
    </Styled.PageContainer>
  );
}
