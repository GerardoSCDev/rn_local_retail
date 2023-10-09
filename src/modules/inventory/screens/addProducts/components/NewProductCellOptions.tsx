import { Text, TouchableHighlight, View } from "react-native"
import { AddProductsStyle } from "../styles/AddProductsStyle"

const NewProductCellOptions = () => {

    const { cellOptionsContainer, cellDeleteContainer, cellDeleteText } = AddProductsStyle


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

export default NewProductCellOptions