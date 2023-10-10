
import { useContext, useState } from "react"
import { Modal, View, GestureResponderEvent } from "react-native"
import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import AppButton from "../../../../../utils/components/AppButton"
import AppTextInput from "../../../../../utils/components/AppTextInput"
import { IProduct } from "../../../../../storage/models/interfaces"

const ModalForm = () => {

    const [barCodeText, setBarCodeText] = useState<string>('')
    const inventoryContext = useContext(InventoryContext)
    const { modalBackground, modalContainer, modalAppButton, modalContainerButtons, modalContainerForms, modalFormFlexBasis100 } = AddProductsStyle

    const onPressSuccess = ({ }: GestureResponderEvent) => {

        const existProduct = inventoryContext?.newProducts.find(({ barcode }) => barcode === barCodeText)

        if (!existProduct) {

            const newProduct: IProduct = { nombre: 'Producto 1', barcode: barCodeText, quantity: 1 }
            const setNewProduct = (oldProducts: IProduct[]) => [...oldProducts, newProduct]
            inventoryContext?.setNewProducts(setNewProduct)

        }

        if (existProduct) {

            const oldProductsMap = inventoryContext?.newProducts.map((item) => {
                const newQuantity = { ...item, quantity: (item.quantity += 1) }
                return (item.barcode === barCodeText) ? newQuantity : item
            })

            inventoryContext?.setNewProducts(oldProductsMap ?? [])
        }

        inventoryContext?.setShowForm((oldState) => !oldState)

    }

    const onPressCancel = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowForm((oldState) => !oldState)
    }

    const onChangeText = (text: string) => {
        setBarCodeText(text)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={inventoryContext?.showForm}
            onRequestClose={() => {
                inventoryContext?.setShowForm((oldState) => !oldState)
            }}>
            <View style={modalBackground}>
                <View style={modalContainer}>

                    <View style={modalContainerForms}>
                        <AppTextInput
                            label="Código de barra"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeText}
                            keyboardType="number-pad" />
                    </View>

                    <View style={modalContainerButtons}>
                        <AppButton
                            style={modalAppButton}
                            title="Cancelar"
                            type="cancel"
                            onPress={onPressCancel} />
                        <AppButton
                            style={modalAppButton}
                            title="Guardar"
                            type="success"
                            onPress={onPressSuccess} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalForm