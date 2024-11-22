import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CopyParagraph from "../../components/CopyParagraph";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import { formatNumber, revertToNumber } from "../../utils/inputFormat";
import { AdminContext } from "../../contexts/adminContext";
import { VariableContext } from "../../contexts/variablesContext";
import { updateVariable } from "../../api/variablesRoutes/updateVariable";
import { getVariables } from "../../api/variablesRoutes/getVariables";
import * as Styled from "./styles";

export default function Variables() {
  const navigate = useNavigate();

  const { admin } = useContext(AdminContext);
  const { variables, setVariables } = useContext(VariableContext);

  const [varMono, setVarMono] = useState("");
  const [varBi, setVarBi] = useState("");
  const [varTri, setVarTri] = useState("");
  const [varKvCopel, setVarKvCopel] = useState("");
  const [varTaxaTusd, setVarTaxaTusd] = useState("");
  const [validInputs, setValidInputs] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
  ]);

  if (variables.length === 0) {
    alert("Erro ao carregar variáveis. Faça login novamente.");
    navigate("/login");
  }

  useEffect(() => {
    if (variables.length >= 0) {
      setVarMono(formatNumber(variables[0].value.toFixed(2)));
      setVarBi(formatNumber(variables[1].value.toFixed(2)));
      setVarTri(formatNumber(variables[2].value.toFixed(2)));
      setVarKvCopel(formatNumber(variables[3].value.toFixed(2)));
      setVarTaxaTusd(formatNumber(variables[4].value.toFixed(2)));
    }
  }, []);

  function handleVarMono(thisVarMono: string) {
    setVarMono(formatNumber(thisVarMono));
  }

  function handleVarBi(thisVarBi: string) {
    setVarBi(formatNumber(thisVarBi));
  }

  function handleVarTri(thisVarTri: string) {
    setVarTri(formatNumber(thisVarTri));
  }

  function handleVarKvCopel(thisVarKvCopel: string) {
    setVarKvCopel(formatNumber(thisVarKvCopel));
  }

  function handleVarTaxaTusd(thisVarTaxaTusd: string) {
    setVarTaxaTusd(formatNumber(thisVarTaxaTusd));
  }

  async function handleVariableSubmit() {
    const requestVarMono = revertToNumber(varMono);
    const requestVarBi = revertToNumber(varBi);
    const requestVarTri = revertToNumber(varTri);
    const requestVarKvCopel = revertToNumber(varKvCopel);
    const requestVarTaxaTusd = revertToNumber(varTaxaTusd);

    const validVarMono = requestVarMono > 0;
    const validVarBi = requestVarBi > 0;
    const validVarTri = requestVarTri > 0;
    const validVarKvCopel = requestVarKvCopel > 0;
    const validVarTaxaTusd = requestVarTaxaTusd > 0;

    const newValidInputs = [
      validVarMono,
      validVarBi,
      validVarTri,
      validVarKvCopel,
      validVarTaxaTusd,
    ];

    setValidInputs(newValidInputs);

    if (newValidInputs.indexOf(false) !== -1) {
      return;
    }

    try {
      if (requestVarMono !== variables[0].value) {
        await updateVariable(
          { value: requestVarMono },
          variables[0].id,
          admin.token
        );
      }

      if (requestVarBi !== variables[1].value) {
        await updateVariable(
          { value: requestVarBi },
          variables[1].id,
          admin.token
        );
      }

      if (requestVarTri !== variables[2].value) {
        await updateVariable(
          { value: requestVarTri },
          variables[2].id,
          admin.token
        );
      }

      if (requestVarKvCopel !== variables[3].value) {
        await updateVariable(
          { value: requestVarKvCopel },
          variables[3].id,
          admin.token
        );
      }

      if (requestVarTaxaTusd !== variables[4].value) {
        await updateVariable(
          { value: requestVarTaxaTusd },
          variables[4].id,
          admin.token
        );
      }

      const newVariables = await getVariables(admin.token);
      setVariables(newVariables);
    } catch (err) {
      console.error(err);
    }
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
            label="TAXA MONOFÁSICA"
            placeholder="123,45"
            value={varMono}
            setValue={handleVarMono}
            validInput={validInputs[0]}
            validMessage="Insira um valor maior que zero!"
          />
          <MainInput
            type="text"
            label="TAXA BIFÁSICA"
            placeholder="123,45"
            value={varBi}
            setValue={handleVarBi}
            validInput={validInputs[1]}
            validMessage="Insira um valor maior que zero!"
          />
          <MainInput
            type="text"
            label="TAXA TRIFÁSICA"
            placeholder="123,45"
            value={varTri}
            setValue={handleVarTri}
            validInput={validInputs[2]}
            validMessage="Insira um valor maior que zero!"
          />
          <MainInput
            type="text"
            label="VALOR KV COPEL"
            placeholder="123,45"
            value={varKvCopel}
            setValue={handleVarKvCopel}
            validInput={validInputs[3]}
            validMessage="Insira um valor maior que zero!"
          />
          <MainInput
            type="text"
            label="TAXA TUSD"
            placeholder="123,45"
            value={varTaxaTusd}
            setValue={handleVarTaxaTusd}
            validInput={validInputs[4]}
            validMessage="Insira um valor maior que zero!"
          />
        </Styled.InputContainer>

        <Styled.Warning>
          AO SALVAR AS INFORMAÇÕES O RESULTADO
          <br />
          DOS CÁLCULOS SERÁ ALTERADO!
        </Styled.Warning>

        <MainButton
          disabled={
            varMono === formatNumber(variables[0].value.toFixed(2)) &&
            varBi === formatNumber(variables[1].value.toFixed(2)) &&
            varTri === formatNumber(variables[2].value.toFixed(2)) &&
            varKvCopel === formatNumber(variables[3].value.toFixed(2)) &&
            varTaxaTusd === formatNumber(variables[4].value.toFixed(2))}
          text="ALTERAR VARIÁVEIS"
          onClickFunction={handleVariableSubmit}
        />
      </div>
      <RightsFooter />
    </Styled.PageContainer>
  );
}
