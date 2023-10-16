/* -------------- Library Imports ------------- */
import { useContext } from "react"
import { GestureResponderEvent, Image, Text, TouchableHighlight, View } from "react-native"
/* --------------- Local Imports -------------- */
import { AddProductsStyle } from "../styles/AddProductsStyle"
import { IModalDataForm, INewProductCell } from "../interfaces/AddProductsInterfaces"
import { InventoryContext } from "../../../context/InventoryContext"

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

    const inventoryContext = useContext(InventoryContext)

    const onPressEdit = ({ }: GestureResponderEvent) => {
        const newProduct: IModalDataForm = {
            barcode: { value: product.barcode },
            product: { value: product.nombre },
            quantity: { value: `${product.quantity}` },
            typeForm: 'edit'
        }
        inventoryContext?.setModalDataForm(newProduct)
        inventoryContext?.setShowForm(true)
    }

    return (
        <TouchableHighlight
            underlayColor={'white'}
            onPress={onPressEdit}>
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
        </TouchableHighlight>
    )
}

export default NewProductCell