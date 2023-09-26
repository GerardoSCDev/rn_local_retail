
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { InventoryView } from "../views/InventoryView";
import { NewProductsView } from "../views/NewProductsView";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { InventoryStrings } from "../strings/InventoryStrings"

const StackNavigator = createNativeStackNavigator()


export const StackNavigationInventory = ({ }) => {

    const { navBar } = InventoryStrings

    return (
        <StackNavigator.Navigator
            initialRouteName='InventarioScreen'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#112731',
                },
                headerTintColor: '#FFF'
            }}>
            <StackNavigator.Screen
                name='InventarioScreen'
                component={InventoryView}
                options={({ navigation }) => ({
                    title: navBar.inventoryTitle,
                    headerRight: () => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={30}
                            color='#7A8EA1'
                            onPress={() => { navigation.push('NewComponentForm') }} />
                    ),
                })}
            />
            <StackNavigator.Screen
                name='NewComponentForm'
                component={NewProductsView}
                options={({ navigation }) => ({
                    title: navBar.newProductTitle,
                    headerRight: () => (
                        <MaterialCommunityIcons
                            name="barcode-scan"
                            size={30}
                            color='#7A8EA1'
                            onPress={() => { console.log('Show scan') }} />
                    ),
                })}
            />
        </StackNavigator.Navigator>
    )
}