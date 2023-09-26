import {
    Text,
    TouchableHighlight,
    View
} from "react-native"

import NewProductsStyles from "../styles/NewProductsStyles"

const {
    cellOptionsContainer,
    cellDeleteContainer,
    cellDeleteText
} = NewProductsStyles

export const HiddenNewProductCellOptions = () => {
    return (
        <View style={cellOptionsContainer} >
            <TouchableHighlight
                underlayColor={'white'}
                onPress={() => { console.log('delete cell') }}>

                <View style={cellDeleteContainer}>
                    <Text style={cellDeleteText}>Borrar</Text>
                </View>

            </TouchableHighlight>
        </View>
    )

}