// Import libraries
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import local
import { TabIcon } from './TabIcon'
import { SalesView } from '@modules/sales/views/SalesView'
import { SummaryView } from '@modules/summary/views/SummaryView'
import { StackNavigationInventory } from '@modules/inventory/components/StackNavigationInventory';
import { HomeStrings } from '../strings/HomeStrings'


const Tab = createBottomTabNavigator()


export const TabNavigator = () => {

    const { tabBar } = HomeStrings

    return (
        <Tab.Navigator
            initialRouteName='Resumen'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    return <TabIcon route={route} focused={focused} />
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#112731',
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    marginLeft: 15,
                    marginRight: 15,
                    position: 'absolute',
                },
                headerShown: false
            })}
        >

            <Tab.Screen
                name='Inventario'
                component={StackNavigationInventory}
                options={{ title: tabBar.inventoryTitle }}
            />
            <Tab.Screen
                name='Resumen'
                component={SummaryView}
                options={{ title: tabBar.summaryTitle }}
            />
            <Tab.Screen
                name='Ventas'
                component={SalesView}
                options={{ title: tabBar.salesTitle }}
            />

        </Tab.Navigator>
    )
}