import * as Styled from "./styles";
import RightsFooter from "../../components/RightsFooter";
import HistoryTable from "../../components/HistoryTable";

export default function History() {
  return (
    <Styled.PageContainer>
      <HistoryTable />
      <RightsFooter />
    </Styled.PageContainer>
  );
}
