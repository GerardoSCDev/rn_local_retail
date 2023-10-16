
/* -------------- Library Imports ------------- */
import { useContext, useState, useEffect } from "react"
import { Modal, View, GestureResponderEvent, Text } from "react-native"
/* --------------- Local Imports -------------- */
import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import AppButton from "../../../../../utils/components/AppButton"
import AppTextInput from "../../../../../utils/components/AppTextInput"
import { IProduct } from "../../../../../storage/models/interfaces"
import { IModalDataForm } from "../interfaces/AddProductsInterfaces"
import { AddProductsStrings } from "../strings/AddProductsStrings"

const ModalForm = ({ barcode, product, quantity, typeForm = 'add' }: IModalDataForm) => {

    const {
        modalFormAddTitle,
        modalFormEditTitle,
        inputBarcodeTitle,
        inputProductTitle,
        inputQuantityTitle,
        buttonFormCancel,
        buttonFormSuccess
    } = AddProductsStrings

    const {
        modalBackground,
        modalContainer,
        modalAppButton,
        modalContainerButtons,
        modalContainerForms,
        modalFormFlexBasis100
    } = AddProductsStyle

    const initialDataFormState: IModalDataForm = {
        barcode: { error: false, value: '' },
        product: { error: false, value: '' },
        quantity: { error: false, value: '' },
        typeForm: 'add'
    }
    const [modalDataForm, setModalDataForm] = useState<IModalDataForm>({})

    const inventoryContext = useContext(InventoryContext)


    useEffect(() => {
        setModalDataForm({ barcode, product, quantity, typeForm })
    }, [barcode, product, quantity, typeForm])

    /* ------------ Auxiliar Functions ------------ */

    const addDataProducts = () => {
        const { barcode: barcodeText, product, quantity } = modalDataForm
        const quantityValue = (quantity?.value === '') ? 1 : Number(quantity?.value ?? '1')
        const newProduct: IProduct = {
            nombre: product?.value ?? '',
            barcode: barcodeText?.value ?? '',
            quantity: quantityValue
        }
        const setNewProduct = (oldProducts: IProduct[]) => [...oldProducts, newProduct]
        inventoryContext?.setNewProducts(setNewProduct)
    }

    const editDataProducts = () => {
        const { barcode: barcodeText, product, quantity: quantityText } = modalDataForm
        const oldProductsMap = inventoryContext?.newProducts.map((item) => {
            const newQuantity = {
                ...item,
                nombre: product?.value ?? '',
                quantity: Number(quantityText?.value ?? '0')
            }
            return (item.barcode === barcodeText?.value) ? newQuantity : item
        })

        inventoryContext?.setNewProducts(oldProductsMap ?? [])
    }

    const addQuantityToProduct = () => {
        const { barcode: barcodeText } = modalDataForm
        const oldProductsMap = inventoryContext?.newProducts.map((item) => {
            const newQuantity = {
                ...item,
                quantity: (item.quantity += 1)
            }
            return (item.barcode === barcodeText?.value) ? newQuantity : item
        })

        inventoryContext?.setNewProducts(oldProductsMap ?? [])
    }

    const hasTextErrors = (): boolean => {

        const isBarcodeEmpty = (modalDataForm.barcode?.value === '')

        setModalDataForm((form) => ({
            ...form,
            barcode: { ...form.barcode, error: isBarcodeEmpty }
        }))

        return isBarcodeEmpty
    }

    const finishModalForm = () => {
        inventoryContext?.setModalDataForm(initialDataFormState)
        inventoryContext?.setShowForm((oldState) => !oldState)
    }

    /* -------------- Event Functions ------------- */

    const onPressSuccess = ({ }: GestureResponderEvent) => {

        const hasErrors = hasTextErrors()

        if (hasErrors) {
            return
        }

        const { barcode: barcodeText } = modalDataForm

        const existProduct = inventoryContext?.newProducts.find(({ barcode }) => barcode === barcodeText?.value)

        if (!existProduct) {
            addDataProducts()
        }

        if (existProduct) {
            editDataProducts()
        }

        finishModalForm()

    }

    const onPressCancel = ({ }: GestureResponderEvent) => {
        finishModalForm()
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

    console.log([typeForm])

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
                    <Text style={{ marginBottom: 15 }}>
                        {(typeForm === 'add') ? modalFormAddTitle : modalFormEditTitle}
                    </Text>

                    <View style={modalContainerForms}>
                        <AppTextInput
                            label={inputBarcodeTitle}
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeBarcodeText}
                            keyboardType="number-pad"
                            error={modalDataForm.barcode?.error}
                            value={modalDataForm.barcode?.value}
                            disabled={(typeForm === 'edit')} />
                        <AppTextInput
                            label={inputProductTitle}
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeProductText}
                            keyboardType="default"
                            value={modalDataForm.product?.value} />
                        <AppTextInput
                            label={inputQuantityTitle}
                            style={[modalFormFlexBasis100]}
                            onChangeText={onChangeQuantityText}
                            keyboardType="number-pad"
                            value={modalDataForm.quantity?.value} />
                    </View>

                    <View style={modalContainerButtons}>
                        <AppButton
                            style={modalAppButton}
                            title={buttonFormCancel}
                            type="cancel"
                            onPress={onPressCancel} />
                        <AppButton
                            style={modalAppButton}
                            title={buttonFormSuccess}
                            type="success"
                            onPress={onPressSuccess} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalForm