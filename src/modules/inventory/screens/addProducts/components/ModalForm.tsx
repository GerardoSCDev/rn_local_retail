
import { useContext } from "react"
import { Modal, View, Text, Pressable, GestureResponderEvent } from "react-native"
import { InventoryContext } from "../../../context/InventoryContext"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import AppButton from "../../../../../utils/components/AppButton"

const ModalForm = () => {

    const inventoryContext = useContext(InventoryContext)
    const { modalBackground, modalContainer, modalAppButton, modalContainerButtons } = AddProductsStyle

    const onPressSuccess = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowForm((oldState) => !oldState)
    }

    const onPressCancel = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowForm((oldState) => !oldState)
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
                    <Text>Hello World!</Text>
                    <View style={modalContainerButtons}>
                        <AppButton style={modalAppButton} title="Cancelar" type="cancel" onPress={onPressCancel} />
                        <AppButton style={modalAppButton} title="Guardar" type="success" onPress={onPressSuccess} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalForm