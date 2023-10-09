/* ------------ Dependency Imports ------------ */
import React, { useContext, useLayoutEffect } from "react"
import { Text, View, SafeAreaView } from "react-native"

/* --------------- Local Imports -------------- */
import HeaderRightIcon from "./components/HeaderRightIcon"
import { InventoryContext } from "../../context/InventoryContext"
import { IAddProdcutsScreen } from "./interfaces/AddProductsInterfaces"
import { AddProductsStrings } from "./strings/AddProductsStrings"
import { AddProductsStyle } from "./styles/AddProductsStyle"
import ScanCameraCell from "./components/ScanCameraCell"
import NewProductsContainer from "./components/NewProductsContainer"


const AddProdcutsScreen = ({ navigation = null }: IAddProdcutsScreen) => {

    const { addProductsNavTitle } = AddProductsStrings
    const { addProductsSafeArea } = AddProductsStyle
    const inventoryContext = useContext(InventoryContext)

    /* ------------ Auxiliar functions ------------ */
    const setupNavigation = () => {
        navigation.setOptions({
            title: addProductsNavTitle,
            animation: 'flip',
            headerRight: HeaderRightIcon
        })
    }

    useLayoutEffect(() => {
        setupNavigation()
    }, [])

    return (
        <SafeAreaView style={addProductsSafeArea}>
            {inventoryContext?.showScan && <ScanCameraCell />}
            <NewProductsContainer />
        </SafeAreaView>
    )
}

export default AddProdcutsScreen