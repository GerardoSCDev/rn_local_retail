import { Image, Text, View } from "react-native"
import { AddProductsStyle } from "../styles/AddProductsStyle"
import { INewProductCell } from "../interfaces/AddProductsInterfaces"

const NewProductCell = ({ product }: INewProductCell) => {

    const {
        newProductCellImage,
        newProductCellContainer,
        newProductCellContainerElevation,
        newProductCellContainerImage
    } = AddProductsStyle

    const {
        barcode,
        nombre
    } = product

    return (
        <View style={[newProductCellContainer, newProductCellContainerElevation]}>
            <View style={newProductCellContainerImage}>
                <Image
                    style={newProductCellImage}
                    source={require('../../../../../../assets/inventory/empty-products.png')} />
            </View>

            <View>
                <Text>{`Nombre: ${nombre}`}</Text>
                <Text>{`Codigo: ${barcode}`}</Text>
            </View>
        </View>
    )
}

export default NewProductCell