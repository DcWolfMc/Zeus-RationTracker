export interface PurchaseData {
  _id: string;
  name: string;
  created_at: string
  date_of_purchase: string;
  place_of_purchase: string;
  quantity: number
  ration_weight: number;
  ration_price: number;
  observations?: string;
  ration_brand?: string;
  updated_at: string
}

export interface NewPurchaseData {
  name: string;
  date_of_purchase: string;
  place_of_purchase?: string;
  quantity: number
  ration_weight: number;
  ration_price: number;
  observations?: string;
  ration_brand?: string;
}

export const templatePurchaseData:PurchaseData ={
  _id: "",
  name: "DogChow - 10kgs",
  date_of_purchase: "2023-09-11T17:10:13.154Z",
  place_of_purchase: "São Luiz - Rio Mar",
  quantity: 1,
  ration_weight: 10,
  ration_price: 50.99,
  observations: "Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto MuiyotextoeMuiyo texto Muiyo texto Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto Muiyo textoeMuiyo texto Muiyo texto Muiyo texto Muiyo textoeMuiyo texto Muiyo texto",
  ration_brand: "DogChow",
  created_at:"",
  updated_at:"",
  
}