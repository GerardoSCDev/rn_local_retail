import { createContext } from "react";

export interface IInventoryContext {
    showScan: boolean
    setShowScan: React.Dispatch<React.SetStateAction<boolean>>
}

export const InventoryContext = createContext<IInventoryContext | null>(null)
