import React, { createContext } from "react";
import { IProduct } from "../../../storage/models/interfaces";
import { IModalDataForm } from "../screens/addProducts/interfaces/AddProductsInterfaces";

export interface IInventoryContext {
    showScan: boolean
    setShowScan: React.Dispatch<React.SetStateAction<boolean>>

    newProducts: IProduct[]
    setNewProducts: React.Dispatch<React.SetStateAction<IProduct[]>>

    showForm: boolean
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>

    modalDataForm: IModalDataForm
    setModalDataForm: React.Dispatch<React.SetStateAction<IModalDataForm>>

    showSuccessModal: boolean
    setSuccessShowModal: React.Dispatch<React.SetStateAction<boolean>>

    stockProducts: IProduct[]
    setStockProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export const InventoryContext = createContext<IInventoryContext | null>(null)
