import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { Text, View } from "react-native"
import { IProduct } from "../../../../storage/models/interfaces"
import LocalStorage from "../../../../storage/LocalStorage"

const ListProductsScreen = () => {


    useEffect(() => {

        getData()

    }, [])

    const getData = async () => {
        const localStorage = new LocalStorage()
        localStorage.getProductStorage()
            .then((products) => {

            })
    }

    return <View><Text>ListProductsScreenee</Text></View>
}

export default ListProductsScreen