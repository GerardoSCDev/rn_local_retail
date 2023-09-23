import {
    Image,
    Text,
    View,
} from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'

const {
    card,
    elevation,
    containerImageProduct,
    imageProduct
} = NewProductsStyles

export const NewProductCell = () => {
    return (
        <View style={[card, elevation]}>
            <View style={containerImageProduct}>

                <Image
                    style={imageProduct}
                    source={require('../../../../assets/inventory/empty-products.png')}
                />
            </View>
            <View>
                <Text>Producto: Laptop Mac Book pro</Text>
                <Text>Codigo: 1234567890</Text>
                <Text>Cantidad: 20</Text>
            </View>
        </View>
    )
}