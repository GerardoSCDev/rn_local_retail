/* -------------- Import Library -------------- */
import React from 'react'
import { MaterialIcons, Foundation } from '@expo/vector-icons'

/* --------------- Local Imports -------------- */
import { ITabIcon } from '../interfaces/HomeIntefaces'
import AppColors from '../../../assets/colors/AppColors'

export const TabIcon = ({ route, focused }: ITabIcon) => {

    const { focusedColor, unFocusedColor } = AppColors

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
}