
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InventoryView } from "../views/InventoryView";
import { NewProductsForm } from "../views/NewProductsForm";
import { MaterialIcons } from '@expo/vector-icons'

const StackNavigator = createNativeStackNavigator()


export const StackNavigationInventory = ({ }) => {
    return (
        <StackNavigator.Navigator initialRouteName='InventarioScreen'>
            <StackNavigator.Screen
                name='InventarioScreen'
                component={InventoryView}
                options={({ navigation, route }) => ({
                    headerRight: () => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={30}
                            color='#7A8EA1'
                            onPress={() => { navigation.push('NewComponentForm') }} />
                    )
                })}
            />
            <StackNavigator.Screen name='NewComponentForm' component={NewProductsForm} />
        </StackNavigator.Navigator>
    )
}