// Import libraries
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Import local
import { InventoryView } from '@modules/inventory/views/InventoryView'
import { TabIcon } from './TabIcon'
import { SalesView } from '@modules/sales/views/SalesView'
import { SummaryView } from '@modules/summary/views/SummaryView'


const Tab = createBottomTabNavigator()

export const TabNavigator = () => {
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
                }
            })}
        >
            <Tab.Screen name='Inventario' component={InventoryView} />
            <Tab.Screen name='Resumen' component={SummaryView} />
            <Tab.Screen name='Ventas' component={SalesView} />
        </Tab.Navigator>
    )
}