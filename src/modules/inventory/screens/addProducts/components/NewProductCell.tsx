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
        nombre,
        quantity
    } = product

    return (
        <View style={[newProductCellContainer, newProductCellContainerElevation]}>
            <View style={newProductCellContainerImage}>
                <Image
                    style={newProductCellImage}
                    source={require('../../../../../assets/inventory/addProducts/empty-products.png')} />
            </View>

            <View>
                <Text>{`Nombre: ${nombre}`}</Text>
                <Text>{`Codigo: ${barcode}`}</Text>
                <Text>{`Cantidad: ${quantity}`}</Text>
            </View>
        </View>
    )
}

export default NewProductCell