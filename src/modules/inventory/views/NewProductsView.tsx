import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'
import { IProduct } from '../interfaces/Interfaces'
import { NewProductsEmpty } from '../components/NewProductsEmpty'
import { NewProductsContainer } from '../components/NewProductsContainer'

const { containerView } = NewProductsStyles

export const NewProductsView = () => {

    const newProducts: IProduct[] = ProductsMock

    const [dataProducts, setDataProducts] = useState<IProduct[]>(newProducts)

    useEffect(() => {
        setDataProducts(newProducts)
    }, [])


    return (
        <View style={containerView}>
            {
                dataProducts.length > 0 ?
                    <NewProductsContainer products={dataProducts} /> :
                    <NewProductsEmpty />
            }
        </View>
    )
}

const ProductsMock: IProduct[] = [
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    }
]
