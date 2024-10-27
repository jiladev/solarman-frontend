import { useState } from "react";

import CopyParagraph from "../../components/CopyParagraph";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import * as Styled from "./styles";
import { formatNumber } from "../../utils/inputFormat";

export default function Variables() {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [var3, setVar3] = useState("");
  const [var4, setVar4] = useState("");
  const [var5, setVar5] = useState("");

  function handleVar1(thisVar1: string) {
    setVar1(formatNumber(thisVar1));
  }
  
  function handleVar2(thisVar2: string) {
    setVar2(formatNumber(thisVar2));
  }
  
  function handleVar3(thisVar3: string) {
    setVar3(formatNumber(thisVar3));
  }
  
  function handleVar4(thisVar4: string) {
    setVar4(formatNumber(thisVar4));
  }
  
  function handleVar5(thisVar5: string) {
    setVar5(formatNumber(thisVar5));
  }  

  function handleVariableSubmit() {
    alert("Variáveis alteradas com sucesso!");
  }

  return (
    <Styled.PageContainer>
      <div>
        <h1>
          Defina as variáveis para o cálculo do <br /> relatório.
        </h1>
        <CopyParagraph />

        <Styled.InputContainer>
          <MainInput
            type="text"
            label="VARIÁVEL 1"
            placeholder="123,45"
            value={var1}
            setValue={handleVar1}
          />
          <MainInput
            type="text"
            label="VARIÁVEL 2"
            placeholder="123,45"
            value={var2}
            setValue={handleVar2}
          />
          <MainInput
            type="text"
            label="VARIÁVEL 3"
            placeholder="123,45"
            value={var3}
            setValue={handleVar3}
          />
          <MainInput
            type="text"
            label="VARIÁVEL 4"
            placeholder="123,45"
            value={var4}
            setValue={handleVar4}
          />
          <MainInput
            type="text"
            label="VARIÁVEL 5"
            placeholder="123,45"
            value={var5}
            setValue={handleVar5}
          />
        </Styled.InputContainer>

        <Styled.Warning>
          AO SALVAR AS INFORMAÇÕES O RESULTADO
          <br />
          DOS CÁLCULOS SERÁ ALTERADO!
        </Styled.Warning>

        <MainButton
          text="ALTERAR VARIÁVEIS"
          onClickFunction={handleVariableSubmit}
        />
      </div>
      <RightsFooter />
    </Styled.PageContainer>
  );
}
