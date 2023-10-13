import { BarCodeScanningResult, Camera, PermissionStatus } from 'expo-camera'
import { useContext, useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from '../styles/AddProductsStyle'
import { AddProductsStrings } from '../strings/AddProductsStrings'
import { IProduct } from '../../../../../storage/models/interfaces'
import { IModalDataForm } from '../interfaces/AddProductsInterfaces'


const ScanCameraCell = () => {
    const { cameraContainer, cameraSubContainer, cameraTextInstruction, cameraCenter } = AddProductsStyle
    const { scanCameraInstruction } = AddProductsStrings
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false)
    const inventoryContext = useContext(InventoryContext)

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(cameraStatus.status === PermissionStatus.GRANTED)
        })()
    }, [])

    const onBarCodeScanned = ({ data }: BarCodeScanningResult) => {

        const existProduct = inventoryContext?.newProducts.find(({ barcode }) => barcode === data)

        if (!existProduct) {
            const newProduct: IModalDataForm = { barcode: { value: data } }
            inventoryContext?.setModalDataForm(newProduct)
            inventoryContext?.setShowForm(true)
        }

        if (existProduct) {
            const oldProductsMap = inventoryContext?.newProducts.map((item) => {
                const newQuantity = { ...item, quantity: (item.quantity += 1) }
                return (item.barcode === data) ? newQuantity : item
            })
            inventoryContext?.setNewProducts(oldProductsMap ?? [])
        }

        inventoryContext?.setShowScan(false)

    }

    return (
        <View style={cameraContainer}>
            <View style={cameraSubContainer}>
                {
                    hasCameraPermission &&
                    <Camera
                        autoFocus={true}
                        onBarCodeScanned={onBarCodeScanned}
                        ratio='16:9'
                        style={StyleSheet.absoluteFillObject} />
                }

                <View style={cameraCenter}></View>
            </View>
            <Text style={cameraTextInstruction}>
                {scanCameraInstruction}
            </Text>
        </View>
    )

}

export default ScanCameraCell