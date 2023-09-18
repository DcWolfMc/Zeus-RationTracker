import { Divider, Modal } from "@mui/material";
import styled from "styled-components";

export const PurchaseDetailsContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 1.5rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.gray_300};
`;

export const PurchaseDetailsHeader = styled.header`
  width: 100%;
  padding-top: 3rem;
  padding: 3rem 2.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;
export const HeaderTextWrapper = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
`;

const BaseText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const TopText = styled(BaseText)`
  font-weight: bold;
  font-size: 2rem;
  color: ${(props) => props.theme.gray_700};
`;
export const MiddleText = styled(BaseText)`
  font-weight: bold;
  font-size: 2rem;
  color: ${(props) => props.theme.green_300};
`;
export const BottonText = styled(BaseText)`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray_600};
`;
export const ButtonWrapper = styled.footer`
  padding: 0px 1rem;
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;

const BaseIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  color: ${(props) => props.theme.gray_300};
  border: 0;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const EditButton = styled(BaseIconButton)`
  background-color: ${(props) => props.theme.gray_700};
  &:hover {
    background-color: ${(props) => props.theme.gray_900};
  }
`;

export const TrashButton = styled(BaseIconButton)`
  background-color: ${(props) => props.theme.red_500};
  &:hover {
    background-color: ${(props) => props.theme.red_700};
  }
`;
export const DetailsWrapper = styled.div`
  flex: 1;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  padding: 2rem 0 3.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.gray_400};

  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
export const DetailsTitle = styled(BaseText)`
  padding: 8px 0px;
  font-weight: bold;
  font-size: 24px;
  color: ${(props) => props.theme.gray_800};
  text-align: center;
`;
export const DetailsItemWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
`;
export const ItemTitle = styled(BaseText)`
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.gray_700};
`;
export const ItemValue = styled(BaseText)`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${(props) => props.theme.gray_900};
`;
export const ItemValueBold = styled(BaseText)`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${(props) => props.theme.gray_900};
`;
export const ItemDivider = styled(Divider).attrs({})`
  border-color: ${(props) => props.theme.gray_900};
`;

export const ModalContainer = styled(Modal).attrs({})`
  flex: 1;
  display: "flex";
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.gray_800}aa;
`;
export const ModalView = styled.div`
  //centralizando elemento
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 1rem 0.5rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: 8px;
  background-color: ${(props) => props.theme.gray_200};
`;
export const ModalText = styled(BaseText)`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme.gray_800};
`;

const BaseButton = styled.button`
  height: 50px;
  min-width: 120px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 0;
  &:hover{
    cursor: pointer;
  }
`;
export const OutlinedButton = styled(BaseButton)`
  border-color: ${(props) => props.theme.gray_700};
  border-width: 2px;
  border-style: solid;
  &:hover{
    background-color: ${props=>props.theme.gray_300};
  }
`;

export const FillButton = styled(BaseButton)`
    background-color: ${(props) => props.theme.red_500};
  &:hover {
    background-color: ${(props) => props.theme.red_700};
  }
`;

export const OutlinedButtonText = styled(BaseText)`
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.gray_700};
`;

export const FillButtonText = styled(BaseText)`
  font-weight: 500;
  font-size: 1rem;
  color: ${(props) => props.theme.gray_200};
`;
