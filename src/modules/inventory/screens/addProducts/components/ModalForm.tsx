
import { useContext, useState } from "react"
import { Modal, View, GestureResponderEvent, Text } from "react-native"

import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import AppButton from "../../../../../utils/components/AppButton"
import AppTextInput from "../../../../../utils/components/AppTextInput"
import { IProduct } from "../../../../../storage/models/interfaces"
import { IModalDataForm } from "../interfaces/AddProductsInterfaces"

const ModalForm = () => {

    const [barCodeText, setBarCodeText] = useState<string>('')
    const [barCodeTextError, setBarCodeTextError] = useState<boolean>(false)

    const [modalDataForm, setModalDataForm] = useState<IModalDataForm>({
        barcode: { value: '', error: false },
        product: { value: '', error: false },
        quantity: { value: '', error: false },
    })

    const inventoryContext = useContext(InventoryContext)
    const { modalBackground, modalContainer, modalAppButton, modalContainerButtons, modalContainerForms, modalFormFlexBasis100 } = AddProductsStyle

    /* ------------ Auxiliar Functions ------------ */

    const validateFields = () => {

    }

    /* -------------- Event Functions ------------- */

    const onPressSuccess = ({ }: GestureResponderEvent) => {

        if (barCodeText === '') {
            setBarCodeTextError(true)
            return
        }

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

        setBarCodeText('')
        setBarCodeTextError(false)
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
                    <Text style={{ marginBottom: 15 }}>Ingresa nuevo producto</Text>

                    <View style={modalContainerForms}>
                        <AppTextInput
                            label="Código de barra"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeText}
                            keyboardType="number-pad"
                            error={modalDataForm.barcode?.error} />
                        <AppTextInput
                            label="Producto"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeText}
                            keyboardType="number-pad"
                            error={modalDataForm.product?.error} />
                        <AppTextInput
                            label="Cantidad"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeText}
                            keyboardType="number-pad"
                            error={modalDataForm.quantity?.error} />
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