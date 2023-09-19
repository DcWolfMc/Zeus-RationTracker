import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { TextField } from "@mui/material";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;
export const Title = styled(Dialog.Title)`
  color: ${(props) => props.theme.gray_700};
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
  outline: 0;
  border-radius: 8px;
  background-color: ${(props) => props.theme.gray_300};
  overflow: auto;
  //centralizando elemento
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 8px;
      border: 0;
      background-color: ${(props) => props.theme.gray_400};
      color: ${(props) => props.theme.gray_700};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme.gray_500};
      }
    }
    button[type="submit"] {
      margin-top: 1.5rem;
      height: 58px;
      border: 0;
      background-color: ${(props) => props.theme.green_300};
      color: ${(props) => props.theme.gray_200};
      font-weight: bold;
      padding: 1.25rem;
      border-radius: 6px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme.green_500};
        transition: background-color 200ms;
        cursor: pointer;
      }
      &:disabled {
        opacity: 0, 6%;
        cursor: not-allowed;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.gray_500};
`;
export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

export const BaseInput = styled(TextField).attrs({})`
  border-radius: 8px;
  border: 0;
  background-color: ${(props) => props.theme.gray_400};
  color: ${(props) => props.theme.gray_700};

  &::placeholder {
    color: ${(props) => props.theme.gray_500};
    text-align: center;
  }

  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;
export const TextInput = styled(BaseInput).attrs({})``;
