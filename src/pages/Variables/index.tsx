import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CopyParagraph from "../../components/CopyParagraph";
import MainInput from "../../components/MainInput";
import MainButton from "../../components/MainButton";
import RightsFooter from "../../components/RightsFooter";
import * as Styled from "./styles";
import { formatNumber } from "../../utils/inputFormat";
import { AdminContext } from "../../contexts/adminContext";
import { VariableContext } from "../../contexts/variablesContext";
import { updateVariable } from "../../api/variablesRoutes/updateVariable";
import { getVariables } from "../../api/variablesRoutes/getVariables";

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

  useEffect(() => {
    if (variables.length === 0) {
      navigate("/login");
    } else {
      setVarMono(formatNumber(String(variables[0].value)));
      setVarBi(formatNumber(String(variables[1].value)));
      setVarTri(formatNumber(String(variables[2].value)));
      setVarKvCopel(formatNumber(String(variables[3].value)));
      setVarTaxaTusd(formatNumber(String(variables[4].value)));
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
    const requestVarMono = Number(varMono.replace(",", "."));
    const requestVarBi = Number(varBi.replace(",", "."));
    const requestVarTri = Number(varTri.replace(",", "."));
    const requestVarKvCopel = Number(varKvCopel.replace(",", "."));
    const requestVarTaxaTusd = Number(varTaxaTusd.replace(",", "."));

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

    if (
      !validVarMono ||
      !validVarBi ||
      !validVarTri ||
      !validVarKvCopel ||
      !validVarTaxaTusd
    ) {
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
          text="ALTERAR VARIÁVEIS"
          onClickFunction={handleVariableSubmit}
        />
      </div>
      <RightsFooter />
    </Styled.PageContainer>
  );
}
