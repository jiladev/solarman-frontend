import WelcomeOption from "../../components/WelcomeOption";
import BaseHeader from "../../components/BaseHeader";
import RightsFooter from "../../components/RightsFooter";
import * as Styled from "./styles";

export default function Welcome() {
  return (
    <Styled.PageContainer>
      <BaseHeader variant="return" />
      <Styled.Options>
        {optionsInfo.map((option, index) => {
          return (
            <WelcomeOption
              key={index}
              title={option.title}
              description={option.description}
              buttonTitle={option.buttonTitle}
              redirectTo={option.redirectTo}
            />
          );
        })}
      </Styled.Options>
      <RightsFooter />
    </Styled.PageContainer>
  );
}

const optionsInfo = [
  {
    title: "Sou um cliente",
    description:
      "Quero verificar quanto desconto<br />consigo com a Cooperativa<br />SolarMan",
    buttonTitle: "VERIFICAR DESCONTO",
    redirectTo: "/cliente",
  },
  {
    title: "Sou um agente",
    description:
      "Acesso restrito.<br />Sistema para funcionários e<br />agentes da Cooperativa.",
    buttonTitle: "ACESSAR SISTEMA",
    redirectTo: "/login",
  },
];
