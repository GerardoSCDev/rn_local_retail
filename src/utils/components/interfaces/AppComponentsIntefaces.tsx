import { GestureResponderEvent, StyleProp, TextStyle } from "react-native"

export interface IAppButton {
    onPress: ((event: GestureResponderEvent) => void)
    title: string
    type: 'success' | 'cancel'
    style?: StyleProp<TextStyle>
}

export interface IAppTextInput {
    label: string
    error?: boolean
    style?: StyleProp<TextStyle>
    onChangeText?: (((text: string) => void) & Function)
}