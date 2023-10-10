import { TextInput } from "react-native-paper"
import AppColors from "../../assets/colors/AppColors"
import { IAppTextInput } from "./interfaces/AppComponentsIntefaces"



const AppTextInput = ({ label, error, style }: IAppTextInput) => {
    const { primaryColor, accentColor } = AppColors
    return (
        <TextInput
            mode="outlined"
            activeOutlineColor={accentColor}
            outlineColor={primaryColor}

            label={label}
            style={[style]}
            error={error}
        />
    )
}

export default AppTextInput