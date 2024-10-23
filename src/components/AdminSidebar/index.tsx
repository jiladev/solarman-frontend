import { useState } from "react";
import { LuDollarSign, LuAward } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { BsSliders2Vertical } from "react-icons/bs";
import { CgUserAdd } from "react-icons/cg";

import CompleteLogoWhite from "../../assets/complete-logo-white.svg";
import * as Styled from "./styles";
import MenuItem from "../MenuItem";

export interface PageInfo {
  title: string;
  icon: React.ReactElement;
  selected: boolean;
  redirectTo: string;
}

export default function AdminSidebar() {
  const [pageInfo, setPageInfo] = useState<PageInfo[]>([
    {
      title: "Orcamento",
      icon: <LuDollarSign />,
      selected: true,
      redirectTo: "/orcamento",
    },
    {
      title: "Histórico",
      icon: <VscDebugRestart />,
      selected: false,
      redirectTo: "/historico",
    },
    {
      title: "Variáveis",
      icon: <BsSliders2Vertical />,
      selected: false,
      redirectTo: "/variaveis",
    },
    {
      title: "Dashboard",
      icon: <LuAward />,
      selected: false,
      redirectTo: "/dashboard",
    },
    {
      title: "Cadastro",
      icon: <CgUserAdd />,
      selected: false,
      redirectTo: "/cadastro",
    },
  ]);

  return (
    <Styled.Container>
      <Styled.Logo src={CompleteLogoWhite} />
      <Styled.MenuContainer>
        {pageInfo.map((page, index) => {
          return (
            <MenuItem
              key={index}
              title={page.title}
              icon={page.icon}
              selected={page.selected}
              redirectTo={page.redirectTo}
              pageInfo={pageInfo}
              setPageInfo={setPageInfo}
            />
          );
        })}
      </Styled.MenuContainer>
    </Styled.Container>
  );
}
