import React, { useEffect, useRef, useState } from 'react'
import { Alert, Dimensions, StyleSheet, View, SafeAreaView, Text } from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'
import { IProduct } from '../interfaces/Interfaces'
import { NewProductsEmpty } from '../components/NewProductsEmpty'
import { NewProductsContainer } from '../components/NewProductsContainer'
import { Camera, CameraType, PermissionStatus } from 'expo-camera'

const { containerView } = NewProductsStyles

interface INewProductsView {
    modalVisible: boolean
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

interface INewProductScanContainerCell {
    showContainer: boolean
}

const NewProductScanContainerCell = ({ showContainer }: INewProductScanContainerCell) => {

    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if (showContainer) {
                const cameraStatus = await Camera.requestCameraPermissionsAsync()
                setHasCameraPermission(cameraStatus.status === PermissionStatus.GRANTED)
            }
        })()
    }, [])

    if (showContainer && hasCameraPermission) {
        return (
            <View style={{
                elevation: 13,
                shadowColor: '#112731',
                width: '100%',
                height: 300,
                flex: 1,
                padding: 10,
                borderRadius: 8,
            }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <Camera
                        autoFocus={true}
                        onBarCodeScanned={({ data }) => {
                            Alert.alert('Valor:', data)
                        }}
                        ratio='16:9'
                        style={StyleSheet.absoluteFillObject}
                        onCameraReady={() => { }}
                    />
                </View>
                <Text style={{ color: 'white', bottom: 40, textAlign: 'center' }}>
                    {`Captura el codigo de barras\ndel nuevo proudcto`}
                </Text>
            </View>
        )
    } else { return (<></>) }

}

export const NewProductsView = ({ modalVisible, setModalVisible }: INewProductsView) => {

    const newProducts: IProduct[] = ProductsMock
    const [dataProducts, setDataProducts] = useState<IProduct[]>(newProducts)

    useEffect(() => {
        setDataProducts(newProducts)
    }, [])

    return (
        <SafeAreaView style={containerView}>
            <NewProductScanContainerCell showContainer={modalVisible} />
            {
                dataProducts.length > 0 ?
                    <NewProductsContainer products={dataProducts} /> :
                    <NewProductsEmpty />
            }
        </SafeAreaView>
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
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
    {
        nombre: 'Gansito',
        barCode: '123456789',
        numberStock: 10,
        batches: [{ priceBuy: 100, priceSell: 120 }],
        providers: { nombre: '' }
    },
]
