import { SafeAreaView, View, Image } from "react-native"
import { SwipeListView } from "react-native-swipe-list-view"
import { useContext } from "react"

import { AddProductsStyle } from "../styles/AddProductsStyle"
import { InventoryContext } from "../../../context/InventoryContext"
import NewProductCell from "./NewProductCell"
import NewProductCellOptions from "./NewProductCellOptions"

const NewProductsContainer = () => {

    const { newProductsContainer } = AddProductsStyle
    const inventoryContext = useContext(InventoryContext)

    return (
        <View style={newProductsContainer}>
            <SafeAreaView>
                <SwipeListView
                    data={inventoryContext?.newProducts}
                    numColumns={1}
                    renderItem={({ item }) => <NewProductCell product={item} />}
                    renderHiddenItem={(data, rowMap) => <NewProductCellOptions data={data} rowMap={rowMap} />}
                    rightOpenValue={-95}
                    disableRightSwipe={true} />

            </SafeAreaView>
        </View>
    )
}

export default NewProductsContainer