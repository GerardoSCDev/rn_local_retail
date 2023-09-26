import {
    Image,
    Text,
    View,
} from 'react-native'

import NewProductsStyles from '../styles/NewProductsStyles'

const emptyProducstImage = require('../../../../assets/inventory/empty-products.png')

const {
    emptyProductView,
    emptyContinaerImage,
    emptyImage,
    emptyMessageText
} = NewProductsStyles


export const NewProductsEmpty = () => {
    return (
        <View style={emptyProductView}>
            <View style={emptyContinaerImage}>
                <Image
                    style={emptyImage}
                    source={emptyProducstImage} />
            </View>
            <Text style={emptyMessageText}>
                Agrega nuevos productos a tu inventario
            </Text>
        </View>
    )
}