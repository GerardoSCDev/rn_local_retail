import { useContext, useEffect } from "react"
import { SafeAreaView, Text, Image, View, FlatList, StatusBar } from "react-native"
import { IProduct } from "../../../../storage/models/interfaces"
import LocalStorage from "../../../../storage/LocalStorage"
import { InventoryContext } from "../../context/InventoryContext"
import { ListProductStyles } from "./styles/ListProductsStyles"
import ProductCell from "./components/ProductCell"
import ListProductsEmpty from "./components/ListProductsEmpty"

const ListProductsScreen = () => {
    const { areaListView, containerListProduct } = ListProductStyles
    const inventoryContext = useContext(InventoryContext)

    useEffect(() => {

        getData()

    }, [])

    const getData = async () => {
        const localStorage = new LocalStorage()
        localStorage.getProductStorage()
            .then((products) => {
                inventoryContext?.setStockProducts(products)
            })
    }

    if (inventoryContext?.stockProducts.length === 0) {
        return <ListProductsEmpty />
    } else {
        return (

            <View style={containerListProduct} accessible={true}>
                <SafeAreaView style={areaListView}>
                    <FlatList
                        data={inventoryContext?.stockProducts}
                        numColumns={3}
                        renderItem={({ item }) => <ProductCell
                            barcode={item.barcode}
                            nombre={item.nombre}
                            quantity={item.quantity} />}
                        keyExtractor={item => item.barcode}
                    />
                </SafeAreaView>
            </View>
        )
    }


}

export default ListProductsScreen