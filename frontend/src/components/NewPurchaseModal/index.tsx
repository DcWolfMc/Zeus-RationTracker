import { FunctionComponent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  InputsWrapper,
  Overlay,
  TextInput,
  Title,
} from "./styles";
import { X } from "phosphor-react";
import { NewPurchaseData } from "../../@types/purchaseData";
import {
  currencyMask,
  currencyMaskToNumber,
  onlyNumbersMask,
  weightMask,
  weightMaskToNumber,
} from "../../utils/masks";
import { InputAdornment } from "@mui/material";
import { AxiosError } from "axios";
import { addPurchase } from "../../services/api";
import { defaultTheme } from "../../styles/themes/default";
import { format } from "date-fns";
interface NewPurchaseModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NewPurchaseModal: FunctionComponent<NewPurchaseModalProps> = ({
  setOpenModal,
}) => {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [observations, setObservations] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleFormatPrice(number: string) {
    setPrice(currencyMask(number));
  }
  function handleFormatQuantity(text: string) {
    setQuantity(onlyNumbersMask(text));
  }
  function handleFormatWeight(text: string) {
    setWeight(weightMask(text));
  }
  function clearAllStates() {
    setName("");
    setQuantity("");
    setPrice("");
    setPlace("");
    setBrand("");
    setObservations("");
    setDate("");
    setWeight("");
  }
  async function handleNewPurchase() {
    setLoading(true);
    const data: NewPurchaseData = {
      name: name,
      quantity: Number(quantity),
      ration_price: currencyMaskToNumber(price),
      date_of_purchase: new Date(date).toISOString(),
      ration_weight: Number(weightMaskToNumber(weight)),
      place_of_purchase: place,
      ration_brand: brand,
      observations: observations,
    };
    console.log("newPurchase:", data);

    // addPurchase(data)
    //   .then((res) => {
    //     // ToastMassageSuccess("Compra adicionada!");
    //     clearAllStates();
    //     console.log("addPurchase: ", res.data);
    //     setOpenModal((state)=>!state);
    //   })
    //   .catch((error:AxiosError) => {

    //     //ToastMassageError("Não foi possível adicionar uma compra");
    //     console.log("addPurchase: ", error.response?.data);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Nova Compra</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleNewPurchase}>
          <TextInput
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            label="Nome"
            variant="outlined"
          />
          <InputsWrapper>
            <TextInput
              required
              fullWidth
              value={quantity}
              onChange={(e) => {
                handleFormatQuantity(e.target.value);
              }}
              type="text"
              label="Quantidade"
              variant="outlined"
            />
            <TextInput
              required
              fullWidth
              value={price}
              onChange={(e) => {
                handleFormatPrice(e.target.value);
              }}
              type="text"
              label="Preço"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$R</InputAdornment>
                ),
              }}
            />
          </InputsWrapper>

          <InputsWrapper>
            <TextInput
              required
              fullWidth
              value={date}
              onChange={(e) => {
                setDate(() => e.target.value);
              }}
              type="date"
              variant="outlined"
              InputProps={{inputProps: { min: "2000-05-04", max: format(new Date(), "yyyy-MM-dd")} }}
            />
            <TextInput
              required
              fullWidth
              value={weight}
              onChange={(e) => {
                handleFormatWeight(e.target.value);
              }}
              type="text"
              label="Peso"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Kg</InputAdornment>
                ),
              }}
            />
          </InputsWrapper>
          <TextInput
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            label="Local da compra"
            variant="outlined"
          />
          <TextInput
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            type="text"
            label="Marca"
            variant="outlined"
          />
          <TextInput
            value={observations}
            onChange={(e) => setObservations(e.target.value)}
            multiline
            type="text"
            minRows={2}
            maxRows={4}
            label="Observações"
            variant="outlined"
          />

          <button type="submit" disabled={loading}>
            Concluir
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
