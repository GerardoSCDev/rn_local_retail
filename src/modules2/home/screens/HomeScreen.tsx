
/* ------------ Dependency imports ------------ */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
/* --------------- Local imports -------------- */
import { TabStyles } from "../styles/TabStyles"
import { TabStrings } from "../strings/TabStrings"
import { TabIcon } from "@home/components/TabIcon"

const { tabNavigation } = TabStyles
const {
    inventoryTitle,
    summaryTitle,
    salesTitle
} = TabStrings
const Tab = createBottomTabNavigator()

/* --------------- Setup screen --------------- */

const HomeScreen = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator
                initialRouteName='Inventario'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        return <TabIcon route={route} focused={focused} />
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: tabNavigation,
                    headerShown: false
                })} >

                <Tab.Screen
                    name='Inventario'
                    component={Inventory}
                    options={{ title: inventoryTitle }} />

                <Tab.Screen
                    name='Resumen'
                    component={Inventory}
                    options={{ title: summaryTitle }} />

                <Tab.Screen
                    name='Ventas'
                    component={Inventory}
                    options={{ title: salesTitle }} />

            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default HomeScreen

const Inventory = () => {
    return (
        <View></View>
    )
}