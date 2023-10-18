/* ------------ Dependency Imports ------------ */
import { MaterialIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { GestureResponderEvent } from 'react-native'

/* --------------- Local imports -------------- */
import { InventoryContext } from '../../../context/InventoryContext'
import LocalStorage from '../../../../../storage/LocalStorage'

const HeaderRightSaveButton = () => {

    const inventoryContext = useContext(InventoryContext)
    const showSaveButton = inventoryContext?.newProducts.length ?? 0 >= 1

    /* ------------ Auxiliar functions ------------ */
    const setProdcutsStorage = async () => {
        const newProducts = inventoryContext?.newProducts
        const localStorage = new LocalStorage()
        localStorage.setProdcutsStorage(newProducts ?? [], successHandler, errorHandler)
    }

    const successHandler = () => {
        inventoryContext?.setSuccessShowModal(true)
        setTimeout(() => {
            inventoryContext?.setSuccessShowModal(false)
            inventoryContext?.setNewProducts([])
        }, 5000)
    }

    const errorHandler = (error: string) => {

    }

    /* -------------- Event function -------------- */
    const onPressIcon = ({ }: GestureResponderEvent) => {
        setProdcutsStorage()
    }

    return (
        <MaterialIcons
            name="save"
            size={showSaveButton ? 30 : 0}
            color={'white'}
            onPress={onPressIcon} />
    )
}

export default HeaderRightSaveButton