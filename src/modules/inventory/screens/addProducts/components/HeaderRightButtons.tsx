import { View } from "react-native"
import HeaderRightIcon from "./HeaderRightIcon"
import HeaderRightManualIcon from "./HeaderRightManualIcon"
import HeaderRightSaveButton from "./HeaderRightSaveButton"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import { useContext } from "react"
import { InventoryContext } from "../../../context/InventoryContext"

const HeaderRightButtons = () => {
    const { headersButtonContainer, headersButtonTwoSpace, headersButtonThreeSpace } = AddProductsStyle
    const inventoryContext = useContext(InventoryContext)
    const showSaveButton = inventoryContext?.newProducts.length ?? 0 >= 1
    const containerStyle = [headersButtonContainer, showSaveButton ? headersButtonThreeSpace : headersButtonTwoSpace]
    return (
        <View style={containerStyle}>
            <HeaderRightIcon />
            <HeaderRightManualIcon />
            <HeaderRightSaveButton />
        </View>
    )
}

export default HeaderRightButtons