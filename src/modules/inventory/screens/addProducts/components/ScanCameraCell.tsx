import { Camera, PermissionStatus } from 'expo-camera'
import { useContext, useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from '../styles/AddProductsStyle'
import { AddProductsStrings } from '../strings/AddProductsStrings'
import { IProduct } from '../../../../../storage/models/interfaces'


const ScanCameraCell = () => {
    const { cameraContainer, cameraSubContainer, cameraTextInstruction } = AddProductsStyle
    const { scanCameraInstruction } = AddProductsStrings
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false)
    const inventoryContext = useContext(InventoryContext)

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(cameraStatus.status === PermissionStatus.GRANTED)
        })()
    }, [])

    return (
        <View style={cameraContainer}>
            <View style={cameraSubContainer}>
                {
                    hasCameraPermission &&
                    <Camera
                        autoFocus={true}
                        onBarCodeScanned={({ data }) => {
                            const newProduct: IProduct = { nombre: 'Producto 1', barcode: data }
                            inventoryContext?.setNewProducts((oldProducts) => [...oldProducts, newProduct])
                        }}
                        ratio='16:9'
                        style={StyleSheet.absoluteFillObject} />
                }

            </View>
            <Text style={cameraTextInstruction}>
                {scanCameraInstruction}
            </Text>
        </View>
    )

}

export default ScanCameraCell