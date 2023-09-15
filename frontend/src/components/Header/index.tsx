import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewPurchaseButton } from "./styles";
import logoImage from "../../assets/logo.svg"
import { Plus } from "phosphor-react";
import { NewPurchaseModal } from "../NewPurchaseModal";
import { useState } from "react";
export const Header = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt=""/>
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <NewPurchaseButton>
              Nova Compra <Plus size={20} weight="bold"/>
            </NewPurchaseButton>
          </Dialog.Trigger>
            <NewPurchaseModal setOpenModal={setOpenModal}/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
