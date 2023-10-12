import { IProduct } from "../../../../../storage/models/interfaces"

export interface IAddProdcutsScreen {
    navigation: any
}

export interface INewProductCell {
    product: IProduct
}

export interface IModalDataForm {
    barcode?: IModalInputs
    product?: IModalInputs
    quantity?: IModalInputs
}

export interface IModalInputs {
    value?: string
    error?: boolean
}