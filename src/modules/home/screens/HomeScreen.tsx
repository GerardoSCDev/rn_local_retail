
/* ------------ Dependency imports ------------ */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { LayoutChangeEvent, View } from "react-native"
/* --------------- Local imports -------------- */
import { TabStyles } from "../styles/TabStyles"
import { TabStrings } from "../strings/TabStrings"
import { TabIcon } from "../components/TabIcon"
import InventoryStack from "../../inventory/stackNavigation/InventoryStack"
import AppColors from "../../../assets/colors/AppColors"

const { tabNavigation } = TabStyles
const {
    inventoryTitle,
    summaryTitle,
    salesTitle
} = TabStrings
const Tab = createBottomTabNavigator()

/* --------------- Setup screen --------------- */
interface IHomeScreen {
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}
const HomeScreen = ({ }: IHomeScreen) => {

    const { unFocusedColor, focusedColor } = AppColors

    return (
        <NavigationContainer>

            <Tab.Navigator
                initialRouteName='Inventario'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => <TabIcon route={route} focused={focused} />,
                    tabBarActiveTintColor: focusedColor,
                    tabBarInactiveTintColor: unFocusedColor,
                    tabBarStyle: tabNavigation,
                    headerShown: false
                })} >

                <Tab.Screen
                    name='Inventario'
                    component={InventoryStack}
                    options={{ title: inventoryTitle }} />

            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default HomeScreen
