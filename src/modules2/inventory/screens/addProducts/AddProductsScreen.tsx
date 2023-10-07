/* ------------ Dependency Imports ------------ */
import React, { useContext, useLayoutEffect } from "react"
import { Text, View } from "react-native"

/* --------------- Local Imports -------------- */
import HeaderRightIcon from "./components/HeaderRightIcon"
import { InventoryContext } from "../../context/InventoryContext"
import { IAddProdcutsScreen } from "./interfaces/AddProductsInterfaces"

const AddProdcutsScreen = ({ navigation = null }: IAddProdcutsScreen) => {

    const inventoryContext = useContext(InventoryContext)

    useLayoutEffect(() => {
        setupNavigation()
    }, [])

    /* ------------ Auxiliar functions ------------ */
    const setupNavigation = () => {
        navigation.setOptions({
            title: 'Nuevos productos',
            animation: 'flip',
            headerRight: HeaderRightIcon
        })
    }


    return <View><Text>{`Show camera: ${inventoryContext?.showScan}`}</Text></View>
}

export default AddProdcutsScreen