import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
    TouchableHighlight
} from 'react-native'

const GridItemProduct = ({ nombre, numberStock }: IProduct) => {
    return (
        <TouchableHighlight onPress={() => { console.log(`-> ${nombre} ${numberStock}`) }}>
            <View
                style={
                    {
                        flex: 1,
                        height: 150,
                        backgroundColor: 'black',
                        borderWidth: 1,
                        borderColor: 'red'
                    }

                }>

                <Image
                    style={{ justifyContent: 'center', alignItems: 'center', height: 100 }}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                <Text style={{ color: 'red' }}>{nombre}</Text>
                <Text style={{ color: 'red' }}>En existencia: {numberStock}</Text>

            </View>
        </TouchableHighlight>
    )
}


export const InventoryView = () => {

    const [dataProducts, setDataProducts] = useState<IProduct[]>([])

    return (
        <View >
            <SafeAreaView >
                <FlatList
                    data={ProductsMock}
                    renderItem={({ item }) => <GridItemProduct {...item} />}
                    numColumns={2}
                />
            </SafeAreaView>
        </View>
    )
}

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
