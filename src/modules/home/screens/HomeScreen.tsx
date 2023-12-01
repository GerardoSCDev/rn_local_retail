
/* ------------ Dependency imports ------------ */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { LayoutChangeEvent, View } from "react-native"
import React, { useEffect, useState } from "react"

/* --------------- Local imports -------------- */
import { TabStyles } from "../styles/TabStyles"
import { TabStrings } from "../strings/TabStrings"
import { TabIcon } from "../components/TabIcon"
import InventoryStack from "../../inventory/stackNavigation/InventoryStack"
import AppColors from "../../../assets/colors/AppColors"
import { PrivacyModal } from "../components/PrivacyModal"
import LocalStorage from "../../../storage/LocalStorage"


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

    const [showModal, setShowModal] = useState<boolean>(false)

    const { unFocusedColor, focusedColor } = AppColors

    useEffect(() => {
        verifyPrivacy()
    }, [])

    const verifyPrivacy = async () => {
        const localStorage = new LocalStorage()
        localStorage.getPrivacyConfirm()
            .then((confirm) => {
                setShowModal(!confirm)
            })
    }

    return (
        <View style={{ flex: 1 }}>
            <PrivacyModal showModal={showModal} setShowModal={setShowModal} />
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
        </View>
    )
}

export default HomeScreen
