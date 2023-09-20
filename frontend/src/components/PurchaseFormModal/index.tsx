import { FormEvent, FunctionComponent, useEffect, useState } from "react";
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
import { NewPurchaseData, PurchaseData } from "../../@types/purchaseData";
import {
  currencyMask,
  currencyMaskToNumber,
  onlyNumbersMask,
  weightMask,
  weightMaskToNumber,
} from "../../utils/masks";
import { InputAdornment } from "@mui/material";
import { AxiosError } from "axios";
import { editPurchase, addPurchase } from "../../services/api";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface NewPurchaseModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "create" | "edit";
  purchaseData?: PurchaseData;
}
export const PurchaseFormModal: FunctionComponent<NewPurchaseModalProps> = ({
  setOpenModal,
  type,
  purchaseData,
}) => {
  console.log("purchaseData", purchaseData ? purchaseData : "");

  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [observations, setObservations] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (purchaseData && type === "edit") {
      setName(purchaseData?.name);
      setQuantity(purchaseData?.quantity.toString());
      setPrice(currencyMask(purchaseData?.ration_price.toString()));
      setDate(format(new Date(purchaseData?.date_of_purchase), "yyyy-MM-dd"));
      setWeight(weightMask(purchaseData?.ration_weight.toString()));
      setPlace(purchaseData?.place_of_purchase !=="não definido"? purchaseData.place_of_purchase:"");
      setBrand(purchaseData?.ration_brand&&purchaseData.ration_brand !=="não definido"? purchaseData.ration_brand: "");
      setObservations(
        purchaseData?.observations ? purchaseData?.observations : ""
      );
    }
  }, [purchaseData, type]);

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
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
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
    console.log("data:", data);

    if (type === "edit" && purchaseData) {
      editPurchase(purchaseData?._id, data)
        .then((res) => {
          toast.success("Compra Editada!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          clearAllStates();
          console.log("editPurchase: ", res.data);
          setOpenModal((state) => !state);
          setTimeout(() => {
            navigate(0);
          }, 3500);
        })
        .catch((error: AxiosError) => {
          toast.error("Não foi possível editar a compra", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("editPurchase: ", error.response?.data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      addPurchase(data)
        .then((res) => {
          toast.success("Compra Adicionada!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          clearAllStates();
          console.log("addPurchase: ", res.data);
          setOpenModal((state) => !state);
          setTimeout(() => {
            navigate(0);
          }, 3500);
        })
        .catch((error: AxiosError) => {
          toast.error("Não foi possível adicionar a compra", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log("addPurchase: ", error.response?.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>{type === "edit" ? "Editar Compra" : "Nova Compra"}</Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit}>
          <TextInput
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            label="Nome"
            variant="outlined"
            inputProps={{ maxlength: 35 }}
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
              inputProps={{ maxlength: 4 }}
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
                  <InputAdornment position="start">R$</InputAdornment>
                ),
              }}
              inputProps={{ maxlength: 10 }}
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
              InputProps={{
                inputProps: {
                  min: "2000-05-04",
                  max: format(new Date(), "yyyy-MM-dd"),
                },
              }}
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
              inputProps={{ maxlength: 10 }}
            />
          </InputsWrapper>
          <TextInput
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            label="Local da compra"
            variant="outlined"
            inputProps={{ maxlength: 50 }}
          />
          <TextInput
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            type="text"
            label="Marca"
            variant="outlined"
            inputProps={{ maxlength: 20 }}
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
            inputProps={{ maxlength: 200 }}
          />

          <button type="submit" disabled={loading}>
            Concluir
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
};
