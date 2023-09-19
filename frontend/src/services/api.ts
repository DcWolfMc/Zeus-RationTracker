import axios, {  } from "axios";
import { NewPurchaseData, } from "../@types/purchaseData";

export const api = axios.create({
    baseURL: "http://localhost:3001",
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
export const editPurchase = async(id:string, purchaseData:NewPurchaseData)=>{
    return api.put(`/purchase/${id}`,purchaseData)
}
export const DeletePurchaseById = async (id:string) => {
    return (await api.delete(`/purchase/${id}`))
}