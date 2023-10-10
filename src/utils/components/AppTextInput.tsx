import { TextInput } from "react-native-paper"
import AppColors from "../../assets/colors/AppColors"
import { IAppTextInput } from "./interfaces/AppComponentsIntefaces"

const AppTextInput = ({ label, error, style, onChangeText }: IAppTextInput) => {
    const { primaryColor, accentColor } = AppColors
    return (
        <TextInput
            mode="outlined"
            activeOutlineColor={accentColor}
            outlineColor={primaryColor}
            onChangeText={onChangeText}
            label={label}
            style={[style]}
            error={error}
        />
    )
}

export default AppTextInput