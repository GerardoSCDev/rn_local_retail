import { View, Image, Text } from "react-native"
import { ListProductStyles } from "../styles/ListProductsStyles"
import { ListProductsStrings } from "../strings/ListProductsStrings"

const ListProductsEmpty = () => {

    const { emptyListProductsTitle } = ListProductsStrings
    const { emptyContainer, emptyImage, emptyImageTitle } = ListProductStyles

    return (
        <View style={emptyContainer}>
            <Image
                style={emptyImage}
                resizeMode="contain"
                source={require('../../../../../assets/inventory/addProducts/empty-products.png')} />
            <Text style={emptyImageTitle}>{emptyListProductsTitle}</Text>
        </View>
    )
}

export default ListProductsEmpty