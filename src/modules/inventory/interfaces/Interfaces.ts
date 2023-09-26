export interface IGroupProductsBarcode {
    barCode: string
    products: IProduct[]
}

export interface IProduct {
    nombre: string
    barCode: string
    numberStock: number
    batches: IProductBatch[]
    providers: IProductProvider
}

interface IProductBatch {
    priceBuy: number
    priceSell: number
}

interface IProductProvider {
    nombre: string
}