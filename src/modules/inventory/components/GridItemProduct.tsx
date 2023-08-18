import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableHighlight
} from 'react-native'
import InventoryStyles from '../styles/Inventory.styles'
import { IProduct } from '../interfaces/Interfaces'

export const GridItemProduct = ({ nombre, numberStock }: IProduct) => {

    const { containerItem, imageItem, titleItem, subtitleItem } = InventoryStyles

    return (
        <View
            style={containerItem}>
            <TouchableHighlight onPress={() => { console.log(`-> ${nombre} ${numberStock}`) }}>
                <View>
                    <Image
                        style={imageItem}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text style={titleItem}>{nombre}</Text>
                    <Text style={subtitleItem}>En existencia: {numberStock}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}
