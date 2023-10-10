/* ------------ Dependency imports ------------ */
import React, { useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

/* --------------- Local Imports -------------- */
import ListProductsScreen from "../screens/listProducts/ListProductsScreen"
import AddProdcutsScreen from "../screens/addProducts/AddProductsScreen"
import { InventoryContext } from "../context/InventoryContext"
import { IProduct } from "../../../storage/models/interfaces"
import AppColors from "../../../assets/colors/AppColors"

const StackNavigator = createNativeStackNavigator()

const InventoryStack = ({ }) => {

    const [showScan, setShowScan] = useState<boolean>(true)
    const [newProducts, setNewProducts] = useState<IProduct[]>([])
    const { focusedColor, primaryColor } = AppColors

    return (
        <InventoryContext.Provider value={{ showScan, setShowScan, newProducts, setNewProducts }} >

            <StackNavigator.Navigator screenOptions={{
                headerTintColor: focusedColor,
                headerStyle: {
                    backgroundColor: primaryColor,
                }
            }}>

                <StackNavigator.Screen
                    name='InventaryScreen'
                    component={ListProductsScreen}
                    options={({ navigation }) => ({
                        title: 'Inventario',
                        animation: 'flip',
                        headerRight: () => (
                            <MaterialIcons
                                name="add-circle-outline"
                                size={30}
                                color={focusedColor}
                                onPress={() => { navigation.push('AddProductScreen') }} />
                        )
                    })} />

                <StackNavigator.Screen
                    name='AddProductScreen'
                    component={AddProdcutsScreen} />

            </StackNavigator.Navigator>
        </InventoryContext.Provider>
    )
}

export default InventoryStack