import { View, Image, Text } from "react-native"
import { AddProductsStrings } from "../strings/AddProductsStrings"
import { AddProductsStyle } from "../styles/AddProductsStyle"

const EmptyProducts = () => {

    const { emptyNewProductsTitle } = AddProductsStrings
    const { emptyContainer, emptyImage, emptyImageTitle } = AddProductsStyle

    return (
        <View style={emptyContainer}>
            <Image
                style={emptyImage}
                resizeMode="contain"
                source={require('../../../../../assets/inventory/addProducts/empty-products.png')} />
            <Text style={emptyImageTitle}>{emptyNewProductsTitle}</Text>
        </View>
    )
}

export default EmptyProducts