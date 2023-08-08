// Import libraries
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './TabNavigator';

// Import local


const RootNavigator = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator