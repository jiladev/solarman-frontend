import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 56px;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #212121;
    margin-bottom: 20px;

    span {
      color: #003674;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  gap: 40px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EnergyInputDiv = styled.div`
  position: relative;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  margin: 20px 0;
`;

export const KvParagraph = styled.p`
  font-size: 16px;
  color: #757575;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;
