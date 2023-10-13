/* ------------ Dependency Imports ------------ */
import { MaterialIcons } from '@expo/vector-icons'
import { useContext } from 'react'
import { GestureResponderEvent } from 'react-native'

/* --------------- Local imports -------------- */
import { InventoryContext } from '../../../context/InventoryContext'

const HeaderRightSaveButton = () => {

    /* ------------ Auxiliar functions ------------ */
    const onPressIcon = ({ }: GestureResponderEvent) => {

    }

    const inventoryContext = useContext(InventoryContext)
    const showSaveButton = inventoryContext?.newProducts.length ?? 0 >= 1

    return (
        <MaterialIcons
            name="save"
            size={showSaveButton ? 30 : 0}
            color={'white'}
            onPress={onPressIcon} />
    )
}

export default HeaderRightSaveButton