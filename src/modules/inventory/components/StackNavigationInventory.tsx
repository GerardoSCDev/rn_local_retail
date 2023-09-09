import { Button } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InventoryView } from "../views/InventoryView";
import { NewProductsForm } from "../views/NewProductsForm";

const StackNavigator = createNativeStackNavigator()

export const StackNavigationInventory = ({ }) => {
    return (
        <StackNavigator.Navigator initialRouteName='InventarioScreen'>
            <StackNavigator.Screen
                name='InventarioScreen'
                component={InventoryView}
                options={({ navigation, route }) => ({
                    headerRight: () => <Button title='Add' onPress={() => {
                        navigation.push('NewComponentForm')
                    }} />
                })}
            />
            <StackNavigator.Screen name='NewComponentForm' component={NewProductsForm} />
        </StackNavigator.Navigator>
    )
}