import axios, { AxiosResponse } from "axios";
import { NewPurchaseData, PurchaseData } from "../@types/purchaseData";

export const api = axios.create({
    baseURL: "http://172.18.9.170:3001",
    headers:{'Content-Type': 'application/json',}
});

export const getPurchases = async () => {
    return (await api.get("/purchase"))
}
export const getPurchaseById = async (id:string) => {
    return (await api.get(`/purchase/${id}`))
}
export const addPurchase = async(purchaseData:NewPurchaseData)=>{
    return api.post(`/purchase`,purchaseData)
}
export const EditPurchase = async(id:string, purchaseData:NewPurchaseData)=>{
    return api.put(`/purchase/${id}`,purchaseData)
}
export const DeletePurchaseById = async (id:string) => {
    return (await api.delete(`/purchase/${id}`))
}