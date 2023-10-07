import React, { useContext, useLayoutEffect } from "react"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View } from "react-native"
import { InventoryContext } from "../../context/InventoryContext"


interface IAddProdcutsScreen {
    navigation: any
}

const AddProdcutsScreen = ({ navigation = null }: IAddProdcutsScreen) => {

    const inventoryContext = useContext(InventoryContext)

    useLayoutEffect(() => {

        navigation.setOptions({
            title: 'Nuevos productos',
            animation: 'flip',
            headerRight: () => (
                <MaterialCommunityIcons
                    name="barcode-scan"
                    size={30}
                    onPress={() => {
                        inventoryContext?.setShowScan((state) => !state)
                        console.log(inventoryContext?.showScan)

                    }} />
            )
        })

    }, [])

    return <View><Text>{`Show camera: ${inventoryContext?.showScan}`}</Text></View>
}

export default AddProdcutsScreen