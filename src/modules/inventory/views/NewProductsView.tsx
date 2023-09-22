import React, { useEffect, useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'
import { IProduct } from '../interfaces/Interfaces'

const emptyProducstImage = require('../../../../assets/inventory/empty-products.png')

const { card, elevation, containerView } = NewProductsStyles

const NewProductCell = () => {
    return (
        <View style={[card, elevation]}>
            <View style={{ justifyContent: 'center' }}>

                <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../../../../assets/inventory/empty-products.png')}
                />
            </View>
            <View>
                <Text>Producto: Laptop Mac Book pro</Text>
                <Text>Codigo: 1234567890</Text>
                <Text>Cantidad: 20</Text>
            </View>
        </View>
    )
}

const NewProductsContainer = () => {
    return (
        <>
            <NewProductCell />
            <NewProductCell />
        </>
    )
}

const NewProductsEmpty = () => {
    return (
        <View style={
            {
                flex: 1,
                marginBottom: 45,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 50
            }
        }>
            <View style={{ backgroundColor: '#DCDCDC', padding: 30, borderRadius: 130 }}>
                <Image
                    style={{ maxHeight: 200, maxWidth: 200 }}
                    source={emptyProducstImage} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 15, color: '#7A8EA1' }}>
                Agrega nuevos productos a tu inventario
            </Text>
        </View>
    )
}

export const NewProductsView = () => {

    const newProducts: IProduct[] = []

    const [dataProducts, setDataProducts] = useState<IProduct[]>(newProducts)

    useEffect(() => {
        setDataProducts(newProducts)
    }, [])


    return (
        <View style={containerView}>
            {dataProducts.length > 0 ? <NewProductsContainer /> : <NewProductsEmpty />}
        </View>
    )
}