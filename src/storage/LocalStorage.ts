import AsyncStorage from "@react-native-async-storage/async-storage"
import { IProduct } from "./models/interfaces"


class LocalStorage {

    private productsKey: string = 'products_key'
    private privacyConfirmKey: string = 'privacy_confirm_key'

    setPrivacyConfirm = async (confirm: boolean,
        successHandler: () => void,
        errorHandler: (error: string) => void) => {

        try {
            await AsyncStorage.setItem(this.privacyConfirmKey, `${confirm}`)
            successHandler()
        } catch (error) {
            errorHandler(`${error}`)
        }

    }

    getPrivacyConfirm = async (): Promise<boolean> => {
        try {
            const confirmStorage = await AsyncStorage.getItem(this.privacyConfirmKey)
            const confir = Boolean(confirmStorage)

            return confir ?? false
        } catch (error) {
            return false
        }
    }

    setProdcutsStorage = async (newProducts: IProduct[],
        successHandler: () => void,
        errorHandler: (error: string) => void) => {

        try {
            const jsonNewProducts = JSON.stringify(newProducts)
            await AsyncStorage.setItem(this.productsKey, jsonNewProducts)
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