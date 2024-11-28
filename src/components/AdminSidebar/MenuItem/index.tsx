import { useNavigate } from "react-router-dom";

import * as Styled from "./styles";
import { PageInfo } from "../";

interface MenuItemProps {
  title: string;
  icon: React.ReactElement;
  selected: boolean;
  redirectTo: string;
  pageInfo: PageInfo[];
  setPageInfo: React.Dispatch<React.SetStateAction<PageInfo[]>>;
}

export default function MenuItem(props: MenuItemProps) {
  const navigate = useNavigate();

  function handlePageChange() {
    props.setPageInfo(
      props.pageInfo.map((page) =>
        page.title === props.title
          ? { ...page, selected: true }
          : { ...page, selected: false }
      )
    );

    navigate(`/admin${props.redirectTo}`);
  }

  return (
    <Styled.Container
      selected={props.selected}
      onClick={() => handlePageChange()}
    >
      <Styled.Selected selected={props.selected} />
      <span className="icon">{props.icon}</span>
      <h1>{props.title}</h1>
      <Styled.MenuIcon selected={props.selected} />
    </Styled.Container>
  );
}
