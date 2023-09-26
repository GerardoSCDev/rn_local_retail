import { Image, Text, View } from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'
import { IProduct } from '../interfaces/Interfaces'

const {
    card,
    elevation,
    containerImageProduct,
    imageProduct
} = NewProductsStyles

interface INewProductCellProps {
    product: IProduct
}

export const NewProductCell = ({
    product
}: INewProductCellProps) => {

    const { barCode, nombre, numberStock } = product

    return (
        <View style={[card, elevation]}>
            <View style={containerImageProduct}>
                <Image
                    style={imageProduct}
                    source={require('../../../../assets/inventory/empty-products.png')}
                />
            </View>
            <View>
                <Text>Producto: {nombre}</Text>
                <Text>Codigo: {barCode}</Text>
                <Text>Cantidad: {numberStock}</Text>
            </View>
        </View>
    )
}