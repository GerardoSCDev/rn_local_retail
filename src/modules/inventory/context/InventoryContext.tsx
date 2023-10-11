import { createContext } from "react";
import { IProduct } from "../../../storage/models/interfaces";

export interface IInventoryContext {
    showScan: boolean
    setShowScan: React.Dispatch<React.SetStateAction<boolean>>
    newProducts: IProduct[]
    setNewProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
    showForm: boolean
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>
}

export const InventoryContext = createContext<IInventoryContext | null>(null)
