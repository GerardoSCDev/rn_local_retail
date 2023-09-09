import React, { useEffect, useState } from 'react'
import {
    View,
    SafeAreaView,
    FlatList,
} from 'react-native'
import { GridItemProduct } from '../components/GridItemProduct'
import { IProduct } from '../interfaces/Interfaces'

interface IInventoryView {
    navigation: any
}

export const InventoryView = ({ navigation }: IInventoryView) => {

    const [dataProducts, setDataProducts] = useState<IProduct[]>(ProductsMock)

    useEffect(() => {
        setDataProducts(dataProducts)
    }, [])

    return (
        <View >
            <SafeAreaView >
                <FlatList
                    data={dataProducts}
                    numColumns={3}
                    renderItem={({ item }) => <GridItemProduct {...item} />}
                />
            </SafeAreaView>
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
    },
    {
        nombre: 'Submarino',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Sabritas',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Doritos',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Cocacola',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Leche lala',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
]


