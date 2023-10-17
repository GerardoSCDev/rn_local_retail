import { View, Image, Text } from "react-native"
import { IProduct } from "../../../../../storage/models/interfaces"
import { ListProductStyles } from "../styles/ListProductsStyles"

const ProductCell = ({ barcode, nombre, quantity }: IProduct) => {

    const { containerCell, containerCard, imageProduct, titlesProduct } = ListProductStyles

    return (
        <View style={containerCell}>
            <View style={containerCard}>
                <Image
                    style={imageProduct}
                    resizeMode="contain"
                    source={require('../../../../../../assets/icon.png')} />
                <Text style={titlesProduct}>CB: {barcode}</Text>
                <Text style={titlesProduct}>N: {nombre}</Text>
                <Text style={titlesProduct}>C: {quantity}</Text>
            </View>
        </View>
    )
}

export default ProductCell