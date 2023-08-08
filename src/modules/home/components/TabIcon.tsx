// Import Library
import React from 'react'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { MaterialIcons, Foundation } from '@expo/vector-icons'

interface ITabIcon {
    route: RouteProp<ParamListBase, string>,
    focused: boolean
}

export const TabIcon = ({ route, focused }: ITabIcon) => {
    const focusedColor = '#A9B6C3'
    const unFocusedColor = '#7A8EA1'

    const currentColor = focused ? focusedColor : unFocusedColor

    if (route.name === 'Inventario') {
        return <MaterialIcons name="inventory" size={24} color={currentColor} />
    }
    if (route.name === 'Resumen') {
        return <Foundation name="graph-trend" size={24} color={currentColor} />
    }
    if (route.name === 'Ventas') {
        return <MaterialIcons name="attach-money" size={24} color={currentColor} />
    }
    return <></>
}