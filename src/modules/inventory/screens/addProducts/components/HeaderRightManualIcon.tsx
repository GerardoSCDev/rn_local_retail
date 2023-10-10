/* ------------ Dependency Imports ------------ */
import { MaterialIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { GestureResponderEvent } from 'react-native'

/* --------------- Local imports -------------- */
import AppColors from '../../../../../assets/colors/AppColors'
import { InventoryContext } from '../../../context/InventoryContext'

const HeaderRightManualIcon = () => {

    const inventoryContext = useContext(InventoryContext)
    const { unFocusedColor, focusedColor } = AppColors

    /* ------------ Auxiliar functions ------------ */
    const onPressIcon = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowForm((oldState) => !oldState)
        if (inventoryContext?.showScan) {
            inventoryContext?.setShowScan((oldState) => false)
        }
    }

    const getColorIcon = (): string => {
        return inventoryContext?.showForm ? focusedColor : unFocusedColor
    }

    return (
        <MaterialIcons
            name="keyboard"
            size={30}
            color={getColorIcon()}
            onPress={onPressIcon} />
    )
}

export default HeaderRightManualIcon