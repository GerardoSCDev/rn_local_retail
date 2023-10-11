import { Pressable, StyleSheet, Text } from "react-native"
import { IAppButton } from "./interfaces/AppComponentsIntefaces"
import { AppComponentsStyles } from "./styles/AppComponentsStyles"
import AppColors from "../../assets/colors/AppColors"

const AppButton = ({ title, type, style, onPress }: IAppButton) => {
    const { cancelButtonColor, succesButtonColor } = AppColors
    const styles = StyleSheet.create({
        backgroundColorType: {
            backgroundColor: type === 'success' ? succesButtonColor : cancelButtonColor,
            color: '#FFFFFF'
        }
    })

    const { backgroundColorType } = styles
    const { defaultAppButton } = AppComponentsStyles

    return (
        <Pressable onPress={onPress}>
            <Text style={[defaultAppButton, backgroundColorType, style]}>
                {title}
            </Text>
        </Pressable>
    )
}

export default AppButton