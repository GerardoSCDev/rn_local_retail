/* ------------ Dependency imports ------------ */
import React, { useContext, useState } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

/* --------------- Local Imports -------------- */
import ListProductsScreen from "../screens/listProducts/ListProductsScreen"
import AddProdcutsScreen from "../screens/addProducts/AddProductsScreen"
import { IInventoryContext, InventoryContext } from "../context/InventoryContext"
import { IProduct } from "../../../storage/models/interfaces"
import AppColors from "../../../assets/colors/AppColors"
import { IModalDataForm } from "../screens/addProducts/interfaces/AddProductsInterfaces"
import { View } from "react-native"
import HeaderRightIcon from "../screens/addProducts/components/HeaderRightIcon"
import HeaderRightManualIcon from "../screens/addProducts/components/HeaderRightManualIcon"
import HeaderRightSaveButton from "../screens/addProducts/components/HeaderRightSaveButton"
import { AddProductsStrings } from "../screens/addProducts/strings/AddProductsStrings"
import { AddProductsStyle } from "../screens/addProducts/styles/AddProductsStyle"

const StackNavigator = createNativeStackNavigator()

const InventoryStack = ({ }) => {

    const { addProductsNavTitle } = AddProductsStrings
    const { headersButtonContainer, headersButtonTwoSpace, headersButtonThreeSpace } = AddProductsStyle
    const inventoryContext = useContext(InventoryContext)
    const showSaveButton = inventoryContext?.newProducts.length ?? 0 >= 1
    const containerStyle = [headersButtonContainer, showSaveButton ? headersButtonThreeSpace : headersButtonTwoSpace]
    const [showScan, setShowScan] = useState<boolean>(true)
    const [newProducts, setNewProducts] = useState<IProduct[]>([])
    const [showForm, setShowForm] = useState<boolean>(false)
    const [modalDataForm, setModalDataForm] = useState<IModalDataForm>({})
    const [showSuccessModal, setSuccessShowModal] = useState<boolean>(false)
    const [stockProducts, setStockProducts] = useState<IProduct[]>([])

    const contextValues: IInventoryContext = {
        showScan,
        setShowScan,
        newProducts,
        setNewProducts,
        showForm,
        setShowForm,
        modalDataForm,
        setModalDataForm,
        showSuccessModal,
        setSuccessShowModal,
        stockProducts,
        setStockProducts
    }

    const { focusedColor, primaryColor } = AppColors

    return (
        <InventoryContext.Provider value={contextValues} >

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
                    name="AddProductScreen"
                    component={AddProdcutsScreen}
                    options={({ navigation }) => ({
                        title: addProductsNavTitle,
                        animation: 'flip',
                        headerRight: () => (
                            <View style={containerStyle}>
                                <HeaderRightIcon />
                                <HeaderRightManualIcon />
                                <HeaderRightSaveButton navigation={navigation} />
                            </View>
                        )
                    })}
                />

            </StackNavigator.Navigator>
        </InventoryContext.Provider>
    )
}

export default InventoryStack