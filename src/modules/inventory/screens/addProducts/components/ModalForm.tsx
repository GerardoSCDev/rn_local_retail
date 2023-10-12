
import { useContext, useState } from "react"
import { Modal, View, GestureResponderEvent, Text } from "react-native"

import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import AppButton from "../../../../../utils/components/AppButton"
import AppTextInput from "../../../../../utils/components/AppTextInput"
import { IProduct } from "../../../../../storage/models/interfaces"
import { IModalDataForm } from "../interfaces/AddProductsInterfaces"

const ModalForm = () => {

    const initialDataFormState = {
        barcode: { value: '', error: false },
        product: { value: '', error: false },
        quantity: { value: '', error: false },
    }
    const [modalDataForm, setModalDataForm] = useState<IModalDataForm>(initialDataFormState)

    const inventoryContext = useContext(InventoryContext)
    const { modalBackground, modalContainer, modalAppButton, modalContainerButtons, modalContainerForms, modalFormFlexBasis100 } = AddProductsStyle

    /* ------------ Auxiliar Functions ------------ */

    const hasTextErrors = (): boolean => {

        const isBarcodeEmpty = (modalDataForm.barcode?.value === '')

        setModalDataForm((form) => ({
            ...form,
            barcode: { ...form.barcode, error: isBarcodeEmpty }
        }))

        return isBarcodeEmpty
    }

    /* -------------- Event Functions ------------- */

    const onPressSuccess = ({ }: GestureResponderEvent) => {

        const hasErrors = hasTextErrors()

        if (hasErrors) {
            return
        }

        const { barcode: barcodeText, product, quantity } = modalDataForm


        const existProduct = inventoryContext?.newProducts.find(({ barcode }) => barcode === barcodeText?.value)

        if (!existProduct) {

            const quantityValue = (quantity?.value === '') ? 1 : Number(quantity?.value ?? '1')
            const newProduct: IProduct = {
                nombre: product?.value ?? '',
                barcode: barcodeText?.value ?? '',
                quantity: quantityValue
            }
            const setNewProduct = (oldProducts: IProduct[]) => [...oldProducts, newProduct]
            inventoryContext?.setNewProducts(setNewProduct)

        }

        if (existProduct) {

            const oldProductsMap = inventoryContext?.newProducts.map((item) => {
                const newQuantity = { ...item, quantity: (item.quantity += 1) }
                return (item.barcode === barcodeText?.value) ? newQuantity : item
            })

            inventoryContext?.setNewProducts(oldProductsMap ?? [])
        }

        setModalDataForm(initialDataFormState)
        inventoryContext?.setShowForm((oldState) => !oldState)

    }

    const onPressCancel = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowForm((oldState) => !oldState)
    }

    const onChangeBarcodeText = (text: string) => {
        setModalDataForm((form) => ({
            ...form,
            barcode: { value: text, error: (text === '') }
        }))
    }
    const onChangeProductText = (text: string) => {
        setModalDataForm((form) => ({
            ...form,
            product: { value: text }
        }))
    }
    const onChangeQuantityText = (text: string) => {
        setModalDataForm((form) => ({
            ...form,
            quantity: { value: text }
        }))
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
                            onChangeText={onChangeBarcodeText}
                            keyboardType="number-pad"
                            error={modalDataForm.barcode?.error}
                            value={modalDataForm.barcode?.value} />
                        <AppTextInput
                            label="Producto"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeProductText}
                            keyboardType="default"
                            value={modalDataForm.product?.value} />
                        <AppTextInput
                            label="Cantidad"
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeQuantityText}
                            keyboardType="number-pad"
                            value={modalDataForm.quantity?.value} />
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