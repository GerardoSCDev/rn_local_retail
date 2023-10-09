/* ------------ Dependency Imports ------------ */
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { GestureResponderEvent } from 'react-native'

/* --------------- Local Imports -------------- */
import { InventoryContext } from '../../../context/InventoryContext'

const HeaderRightIcon = () => {

    const inventoryContext = useContext(InventoryContext)

    /* ------------ Auxiliar functions ------------ */
    const onPressIcon = ({ }: GestureResponderEvent) => {
        inventoryContext?.setShowScan((oldState) => !oldState)
    }

    return (
        <MaterialCommunityIcons
            name="barcode-scan"
            size={30}
            onPress={onPressIcon} />
    )
}

export default HeaderRightIcon