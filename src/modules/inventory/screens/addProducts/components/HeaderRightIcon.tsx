/* ------------ Dependency Imports ------------ */
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { GestureResponderEvent } from 'react-native'

/* --------------- Local Imports -------------- */
import { InventoryContext } from '../../../context/InventoryContext'
import AppColors from '../../../../../assets/colors/AppColors'

const HeaderRightIcon = () => {

    const inventoryContext = useContext(InventoryContext)
    const { focusedColor, unFocusedColor } = AppColors

    /* ------------ Auxiliar functions ------------ */
    const onPressIcon = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowScan((oldState) => !oldState)
        if (inventoryContext?.showForm) {
            inventoryContext?.setShowForm((oldState) => false)
        }
    }

    const getColorIcon = (): string => {
        return inventoryContext?.showScan ? focusedColor : unFocusedColor
    }

    return (
        <MaterialCommunityIcons
            name="barcode-scan"
            size={30}
            color={getColorIcon()}
            onPress={onPressIcon} />
    )
}

export default HeaderRightIcon