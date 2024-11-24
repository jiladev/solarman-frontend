import { useState, useContext } from "react";

import CopyParagraph from "../../components/CopyParagraph";
import MainInput from "../../components/MainInput";
import RightsFooter from "../../components/RightsFooter";
import Checkbox from "../../components/Checkbox";
import MainButton from "../../components/MainButton";
import MainModal from "../../components/MainModal";
import { AdminContext } from "../../contexts/adminContext";
import { VariableContext } from "../../contexts/variablesContext";
import { formatPhone, formatBill, formatNumber } from "../../utils/inputFormat";
import { postNewReport } from "../../api/reportsRoutes/postNewReport";
import * as Styled from "./styles";

interface PhasesInterface {
  monofasica: boolean;
  bifasica: boolean;
  trifasica: boolean;
}

export default function Budget() {
  const { admin } = useContext(AdminContext);
  const { variables } = useContext(VariableContext);

  const [modal, setModal] = useState({
    variant: "",
    message: "",
  });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastBill, setLastBill] = useState("");
  const [publicLight, setPublicLight] = useState("");
  const [energyUsage, setEnergyUsage] = useState("");
  const [percentage, setPercentage] = useState("");
  const [phases, setPhases] = useState<PhasesInterface>({
    monofasica: false,
    bifasica: false,
    trifasica: false,
  });
  const [validInputs, setValidInputs] = useState<boolean[]>([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  function handlePhone(thisPhone: string) {
    setPhone(formatPhone(thisPhone));
  }

  function handleLastBill(thisBill: string) {
    setLastBill(formatBill(thisBill));
  }

  function handlePublicLight(thisPublicLight: string) {
    setPublicLight(formatBill(thisPublicLight));
  }

  function handleEnergyUsage(thisEnergyUsage: string) {
    setEnergyUsage(formatNumber(thisEnergyUsage));
  }

  function handlePercentage(thisPercentage: string) {
    setPercentage(formatNumber(thisPercentage));
  }

  function handlePhaseCheckboxes(thisPhase: keyof PhasesInterface) {
    const newPhases = Object.keys(phases).reduce((att, key) => {
      att[key as keyof PhasesInterface] = false;
      return att;
    }, {} as PhasesInterface);

    newPhases[thisPhase] = true;

    setPhases(newPhases);
  }

  async function handleReportSubmit() {
    const requestName = name.trim();
    const requestPhone = phone
      .trim()
      .replace("(", "")
      .replace(")", "")
      .replace(/\s+/g, "")
      .replace("-", "");
    const requestLastBill = Number(
      lastBill.trim().replace("R$ ", "").replace(",", ".")
    );
    const requestPublicLight = Number(
      publicLight.trim().replace("R$ ", "").replace(",", ".")
    );
    const requestEnergyUsage = Number(energyUsage.trim().replace(",", "."));
    const requestPercentage = Number(percentage.trim().replace(",", ".")) / 100;

    const validName = requestName.length > 2;
    const validPhone = requestPhone.length > 9;
    const validLastBill = requestLastBill > 0;
    const validPublicLight = requestPublicLight > 0;
    const validEnergyUsage = requestEnergyUsage > 0;
    const validPercentage = requestPercentage > 0 && requestPercentage < 1;

    const newValidInputs = [
      validName,
      validPhone,
      validLastBill,
      validPublicLight,
      validEnergyUsage,
      validPercentage,
    ];

    setValidInputs(newValidInputs);

    if (newValidInputs.indexOf(false) !== -1) {
      return;
    }

    let fasicValue = -1;

    if (phases.monofasica) fasicValue = variables[0].value;
    if (phases.bifasica) fasicValue = variables[1].value;
    if (phases.trifasica) fasicValue = variables[2].value;

    if (fasicValue === -1) {
      return;
    }

    try {
      const body = {
        phone_client: requestPhone,
        consume_kv_copel: requestEnergyUsage,
        public_light: requestPublicLight,
        fatura_copel: requestLastBill,
        min_tax: fasicValue,
        percentage_value: requestPercentage,
      };

      const response = await postNewReport(body, admin.token);

      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.pdf";

      link.click();

      setModal({
        variant: "success",
        message: "Sucesso ao gerar o relatório! Baixando-o...",
      });
    } catch (err) {
      console.error(err);
      setModal({
        variant: "warning",
        message: "Erro ao gerar o relatório: " + err,
      });
    }
  }

  return (
    <Styled.PageContainer>
      <div>
        <h1>
          Olá, <span>{admin.name}</span>.<br />
          Insira os dados para gerar o relatório.
        </h1>
        <CopyParagraph />

        <Styled.FormContainer>
          <Styled.ContentContainer>
            <MainInput
              label="NOME COMPLETO DO CLIENTE"
              type="text"
              placeholder="Nome aqui"
              value={name}
              setValue={setName}
              validInput={validInputs[0]}
              validMessage="Insira o nome do cliente!"
            />

            <MainInput
              label="CELULAR DO CLIENTE"
              type="text"
              placeholder="(12) 9 3456-7890 ou (12) 3456-7890"
              value={phone}
              setValue={handlePhone}
              validInput={validInputs[1]}
              validMessage="Insira um número de telefone válido!"
            />

            <MainInput
              label="VALOR FINAL DA ÚLTIMA FATURA DE ENERGIA COPEL - CLIENTE"
              type="text"
              placeholder="R$ 123,45"
              value={lastBill}
              setValue={handleLastBill}
              validInput={validInputs[2]}
              validMessage="Insira um valor maior que zero!"
            />

            <MainInput
              label="ILUMINAÇÃO PÚBLICA - CLIENTE"
              type="text"
              placeholder="R$ 123,45"
              value={publicLight}
              setValue={handlePublicLight}
              validInput={validInputs[3]}
              validMessage="Insira um valor maior que zero!"
            />

            <Styled.InputWithUnitDiv>
              <MainInput
                label="CONSUMO KV - COPEL"
                type="text"
                placeholder="123"
                value={energyUsage}
                setValue={handleEnergyUsage}
                validInput={validInputs[4]}
                validMessage="Insira um valor maior que zero!"
              />
              <Styled.UnitParagraph>kv</Styled.UnitParagraph>
            </Styled.InputWithUnitDiv>
          </Styled.ContentContainer>
          <Styled.ContentContainer>
            <Styled.InputWithUnitDiv>
              <MainInput
                label="TAXA PERCENTUAL DE DESCONTO"
                type="text"
                placeholder="123"
                value={percentage}
                setValue={handlePercentage}
                validInput={validInputs[5]}
                validMessage="Insira um valor maior que zero e menor que 100%!"
              />
              <Styled.UnitParagraph>%</Styled.UnitParagraph>
            </Styled.InputWithUnitDiv>
            <h3>
              Selecione o tipo fásico do <span>cliente</span>:
            </h3>
            <Styled.SelectContainer>
              {Object.keys(phases).map((phase, index) => {
                return (
                  <Checkbox
                    key={index}
                    label={phase.toUpperCase()}
                    checked={phases[phase as keyof PhasesInterface]}
                    underline={false}
                    onChange={() =>
                      handlePhaseCheckboxes(phase as keyof PhasesInterface)
                    }
                  />
                );
              })}
            </Styled.SelectContainer>

            <MainButton
              disabled={false}
              text="BAIXAR RELATÓRIO"
              onClickFunction={() => handleReportSubmit()}
            />
          </Styled.ContentContainer>
        </Styled.FormContainer>
      </div>
      <RightsFooter />
      <MainModal
        variant={modal.variant}
        message={modal.message}
        setModal={setModal}
      />
    </Styled.PageContainer>
  );
}
