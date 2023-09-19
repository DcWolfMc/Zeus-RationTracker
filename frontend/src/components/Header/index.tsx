import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewPurchaseButton } from "./styles";
import logoImage from "../../assets/logo.svg"
import { Plus } from "phosphor-react";
import { PurchaseFormModal } from "../PurchaseFormModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" onClick={()=> navigate("./")}/>
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <NewPurchaseButton>
              Nova Compra <Plus size={20} weight="bold"/>
            </NewPurchaseButton>
          </Dialog.Trigger>
            <PurchaseFormModal setOpenModal={setOpenModal}/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
