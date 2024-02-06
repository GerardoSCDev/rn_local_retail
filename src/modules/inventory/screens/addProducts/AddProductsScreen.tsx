/* ------------ Dependency Imports ------------ */
import React, { useContext, useLayoutEffect } from "react"
import { SafeAreaView } from "react-native"

/* --------------- Local Imports -------------- */
import { InventoryContext } from "../../context/InventoryContext"
import { IAddProdcutsScreen } from "./interfaces/AddProductsInterfaces"
import { AddProductsStrings } from "./strings/AddProductsStrings"
import { AddProductsStyle } from "./styles/AddProductsStyle"
import ScanCameraCell from "./components/ScanCameraCell"
import NewProductsContainer from "./components/NewProductsContainer"
import ModalForm from "./components/ModalForm"
import EmptyProducts from "./components/NewProductsEmpty"
import ModalSuccess from "./components/ModalSuccess"

const AddProdcutsScreen = ({ navigation = null }: IAddProdcutsScreen) => {

    const { addProductsSafeArea } = AddProductsStyle
    const inventoryContext = useContext(InventoryContext)

    /* ------------ Auxiliar functions ------------ */

    useLayoutEffect(() => {
    }, [])

    const showEmptyImage = (inventoryContext?.newProducts.length === 0 && !inventoryContext.showScan && !inventoryContext.showForm)

    if (showEmptyImage) {
        return <EmptyProducts />
    } else {
        return (
            <SafeAreaView style={addProductsSafeArea}>
                {inventoryContext?.showScan && <ScanCameraCell />}
                <ModalForm
                    barcode={inventoryContext?.modalDataForm.barcode}
                    product={inventoryContext?.modalDataForm.product}
                    quantity={inventoryContext?.modalDataForm.quantity}
                    typeForm={inventoryContext?.modalDataForm.typeForm} />
                <ModalSuccess />
                <NewProductsContainer />
            </SafeAreaView>
        )

    }

}

export default AddProdcutsScreen