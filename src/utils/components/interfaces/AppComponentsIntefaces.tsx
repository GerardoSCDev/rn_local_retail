import { GestureResponderEvent, StyleProp, TextStyle } from "react-native"

export interface IAppButton {
    onPress: ((event: GestureResponderEvent) => void)
    title: string
    type: 'success' | 'cancel'
    style?: StyleProp<TextStyle>
}