import { useState } from "react";

import CopyParagraph from "../../components/CopyParagraph";
import MainInput from "../../components/MainInput";
import RightsFooter from "../../components/RightsFooter";
import Checkbox from "../../components/Checkbox";
import MainButton from "../../components/MainButton";
import { formatPhone, formatBill, formatNumber } from "../../utils/inputFormat";
import * as Styled from "./styles";

interface PhasesInterface {
  monofasica: boolean;
  bifasica: boolean;
  trifasica: boolean;
}

export default function Budget() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [lastBill, setLastBill] = useState("");
  const [publicLight, setPublicLight] = useState("");
  const [energyUsage, setEnergyUsage] = useState("");
  const [phases, setPhases] = useState<PhasesInterface>({
    monofasica: false,
    bifasica: false,
    trifasica: false,
  });

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

  function handlePhaseCheckboxes(thisPhase: keyof PhasesInterface) {
    const newPhases: PhasesInterface = Object.keys(phases).reduce(
      (att, key) => {
        att[key as keyof PhasesInterface] = false;
        return att;
      },
      {} as PhasesInterface
    );

    newPhases[thisPhase] = true;

    setPhases(newPhases);
  }

  function handleReportSubmit() {
    console.log(name, phone, lastBill, publicLight, energyUsage, phases);
  }

  return (
    <Styled.PageContainer>
      <div>
        <h1>
          Olá, <span>[user]</span>.<br />
          Insira os dados para gerar o relatório.
        </h1>
        <CopyParagraph />

        <Styled.FormContainer>
          <Styled.InputContainer>
            <MainInput
              label="NOME COMPLETO DO CLIENTE"
              type="text"
              placeholder="Nome aqui"
              value={name}
              setValue={setName}
            />

            <MainInput
              label="CELULAR DO CLIENTE"
              type="text"
              placeholder="(12) 9 3456-7890 ou (12) 3456-7890"
              value={phone}
              setValue={handlePhone}
            />

            <MainInput
              label="VALOR FINAL DA ÚLTIMA FATURA DE ENERGIA COPEL - CLIENTE"
              type="text"
              placeholder="R$ 123,45"
              value={lastBill}
              setValue={handleLastBill}
            />

            <MainInput
              label="ILUMINAÇÃO PÚBLICA - CLIENTE"
              type="text"
              placeholder="R$ 123,45"
              value={publicLight}
              setValue={handlePublicLight}
            />

            <Styled.EnergyInputDiv>
              <MainInput
                label="CONSUMO KV - COPEL"
                type="text"
                placeholder="123"
                value={energyUsage}
                setValue={handleEnergyUsage}
              />
              <p>kv</p>
            </Styled.EnergyInputDiv>
          </Styled.InputContainer>
          <Styled.ConfirmContainer>
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
                    underlined={false}
                    onChange={() =>
                      handlePhaseCheckboxes(phase as keyof PhasesInterface)
                    }
                  />
                );
              })}
            </Styled.SelectContainer>

            <MainButton
              text="BAIXAR RELATÓRIO"
              onClickFunction={() => handleReportSubmit()}
            />
          </Styled.ConfirmContainer>
        </Styled.FormContainer>
      </div>
      <RightsFooter />
    </Styled.PageContainer>
  );
}
