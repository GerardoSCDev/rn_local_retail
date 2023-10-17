import AsyncStorage from "@react-native-async-storage/async-storage"
import { IProduct } from "./models/interfaces"


class LocalStorage {

    private productsKey: string = 'products_key'

    setProdcutsStorage = async (newProducts: IProduct[],
        successHandler: () => void,
        errorHandler: (error: string) => void) => {

        try {
            const jsonNewProducts = JSON.stringify(newProducts)
            await AsyncStorage.setItem('local_products', jsonNewProducts)
            successHandler()
        } catch (error) {
            errorHandler(`${error}`)
        }

    }

    getProductStorage = async (): Promise<IProduct[]> => {
        try {
            const jsonSotrage = await AsyncStorage.getItem(this.productsKey)
            const jsonParse = JSON.parse(jsonSotrage ?? '') as IProduct[]
            return jsonParse
        } catch (error) {
            return []
        }
    }

}

export default LocalStorage