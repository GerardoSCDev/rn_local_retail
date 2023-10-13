/* -------------- Library Imports ------------- */
import { GestureResponderEvent, ListRenderItemInfo, Text, TouchableHighlight, View } from "react-native"
import { RowMap } from "react-native-swipe-list-view"
import { useContext } from "react"
/* --------------- LocalImports --------------- */
import { AddProductsStyle } from "../styles/AddProductsStyle"
import { IProduct } from "../../../../../storage/models/interfaces"
import { InventoryContext } from "../../../context/InventoryContext"


interface NewProductCellOptions {
    data: ListRenderItemInfo<IProduct>
    rowMap: RowMap<IProduct>
}

const NewProductCellOptions = ({ data }: NewProductCellOptions) => {

    const inventoryContext = useContext(InventoryContext)
    const { cellOptionsContainer, cellDeleteContainer, cellDeleteText } = AddProductsStyle

    const onPressDelete = ({ }: GestureResponderEvent) => {
        const newProducts = inventoryContext?.newProducts.filter((item) => item !== data.item)
        inventoryContext?.setNewProducts(newProducts ?? [])
    }

    return (
        <View style={cellOptionsContainer} >
            <TouchableHighlight
                underlayColor={'white'}
                onPress={onPressDelete} >

                <View style={cellDeleteContainer}>
                    <Text style={cellDeleteText}>Borrar</Text>
                </View>

            </TouchableHighlight>
        </View>
    )

}

export default NewProductCellOptions