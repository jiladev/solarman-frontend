import * as Styled from "./styles";

interface ModalProps {
  variant: string;
  message: string;
  setModal: (value: any) => void;
}

export default function MainModal(props: ModalProps) {
  return (
    <Styled.Modal message={props.message}>
      <Styled.Background />
      <Styled.Container variant={props.variant}>
        <Styled.ModalTitle variant={props.variant}>
          {props.variant === "warning" ? (
            <>
              <Styled.WarningIcon />
              <>Aviso!</>
            </>
          ) : (
            ""
          )}
          {props.variant === "success" ? (
            <>
              <Styled.SuccessIcon />
              <>Sucesso!</>
            </>
          ) : (
            ""
          )}
        </Styled.ModalTitle>
        <Styled.ModalMessage>{props.message}</Styled.ModalMessage>
        <Styled.CloseButton
          onClick={() =>
            props.setModal({
              variant: "",
              message: "",
            })
          }
        >
          FECHAR
        </Styled.CloseButton>
      </Styled.Container>
    </Styled.Modal>
  );
}
