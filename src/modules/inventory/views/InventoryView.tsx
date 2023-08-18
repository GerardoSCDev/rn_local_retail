import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    TouchableHighlight
} from 'react-native'
import InventoryStyles from '../styles/Inventory.styles'



const GridItemProduct = ({ nombre, numberStock }: IProduct) => {

    const { containerItem, imageItem, titleItem, subtitleItem } = InventoryStyles

    return (
        <View
            style={containerItem}>
            <TouchableHighlight onPress={() => { console.log(`-> ${nombre} ${numberStock}`) }}>
                <View>
                    <Image
                        style={imageItem}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={titleItem}>{nombre}</Text>
                    <Text style={subtitleItem}>En existencia: {numberStock}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}


export const InventoryView = () => {

    const [dataProducts, setDataProducts] = useState<IProduct[]>([])

    useEffect(() => {
        setDataProducts(dataProducts)
    }, [])

    return (
        <View >
            <SafeAreaView >
                <FlatList
                    data={ProductsMock}
                    renderItem={({ item }) => <GridItemProduct {...item} />}
                    numColumns={3}
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


interface IProduct {

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


