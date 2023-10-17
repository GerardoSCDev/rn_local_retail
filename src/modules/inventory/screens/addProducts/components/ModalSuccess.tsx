/* -------------- Library Imports ------------- */
import { Modal, Image, Text, View } from "react-native"
import { useContext, useEffect, useState } from "react"
/* --------------- Local Imports -------------- */
import { AddProductsStyle } from "../styles/AddProductsStyle"
import { AddProductsStrings } from "../strings/AddProductsStrings"
import { IModalSuccess } from "../interfaces/AddProductsInterfaces"
import { InventoryContext } from "../../../context/InventoryContext"

const ModalSuccess = () => {

    const { modalSuccessBackground, modalSuccessContainer, modalSuccessImage, modalSuccessText } = AddProductsStyle
    const { modalSuccessMsg } = AddProductsStrings
    const inventoryContext = useContext(InventoryContext)

    useEffect(() => {

    }, [])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={inventoryContext?.showSuccessModal}>

            <View style={modalSuccessBackground}>
                <View style={modalSuccessContainer}>
                    <Image
                        style={modalSuccessImage}
                        source={require('../../../../../assets/inventory/addProducts/success_gif.gif')} />
                    <Text style={modalSuccessText}>
                        {modalSuccessMsg}
                    </Text>
                </View>
            </View>

        </Modal>
    )

}

export default ModalSuccess