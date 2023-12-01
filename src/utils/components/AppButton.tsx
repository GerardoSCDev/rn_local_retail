import { ColorValue, Pressable, StyleSheet, Text } from "react-native"
import { IAppButton } from "./interfaces/AppComponentsIntefaces"
import { AppComponentsStyles } from "./styles/AppComponentsStyles"
import AppColors from "../../assets/colors/AppColors"

const AppButton = ({ title, type, style, onPress }: IAppButton) => {
    const { cancelButtonColor, succesButtonColor, succesDissableButtonColor } = AppColors

    const getBackgroundColor = (): ColorValue => {
        switch (type) {
            case 'cancel': return cancelButtonColor
            case 'success': return succesButtonColor
            case 'successDisable': return succesDissableButtonColor
            default: return ''
        }
    }

    const getTextButtonColor = (): ColorValue => {
        switch (type) {
            case 'cancel': return '#FFFFFF'
            case 'success': return '#FFFFFF'
            case 'successDisable': return '#DADADA'
            default: return ''
        }
    }

    const stylesButton = StyleSheet.create({
        backgroundColorType: {
            backgroundColor: getBackgroundColor(),
        }
    })
    const stylesButtonTitle = StyleSheet.create({
        titleColor: {
            color: getTextButtonColor(),
        }
    })

    const { backgroundColorType } = stylesButton
    const { defaultAppButton, textTitleAppButton } = AppComponentsStyles
    const { titleColor } = stylesButtonTitle

    return (
        <Pressable onPress={onPress} style={[defaultAppButton, backgroundColorType, style]}>
            <Text style={[textTitleAppButton, titleColor]}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AppButton