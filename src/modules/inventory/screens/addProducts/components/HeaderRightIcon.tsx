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
    }

    return (
        <MaterialCommunityIcons
            name="barcode-scan"
            size={30}
            color={inventoryContext?.showScan ? focusedColor : unFocusedColor}
            onPress={onPressIcon} />
    )
}

export default HeaderRightIcon