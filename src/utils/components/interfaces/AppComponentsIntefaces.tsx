import { GestureResponderEvent, KeyboardTypeOptions, StyleProp, TextStyle } from "react-native"

export interface IAppButton {
    onPress: ((event: GestureResponderEvent) => void)
    title: string
    type: 'success' | 'cancel' | 'successDisable'
    style?: StyleProp<TextStyle>
}

export interface IAppTextInput {
    label: string
    error?: boolean
    style?: StyleProp<TextStyle>
    onChangeText?: (((text: string) => void) & Function)
    keyboardType?: KeyboardTypeOptions
    value?: string | undefined
    disabled?: boolean
}