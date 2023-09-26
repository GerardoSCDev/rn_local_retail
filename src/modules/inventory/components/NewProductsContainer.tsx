import { Text, SafeAreaView, View } from "react-native"
import { IProduct } from "../interfaces/Interfaces"
import { NewProductCell } from "./NewProductCell"
import { SwipeListView } from "react-native-swipe-list-view"
import { HiddenNewProductCellOptions } from "./HiddenNewProductCellOptions"

interface NewProductsContainerProps {
    products: IProduct[]
}

export const NewProductsContainer = ({ products }: NewProductsContainerProps) => {
    return (
        <View>
            <SafeAreaView>
                <SwipeListView
                    data={products}
                    numColumns={1}
                    renderItem={({ item }) => <NewProductCell product={item} />}
                    renderHiddenItem={(data, rowMap) => <HiddenNewProductCellOptions />}
                    rightOpenValue={-95}
                    disableRightSwipe={true}

                />
            </SafeAreaView>
        </View>
    )
}