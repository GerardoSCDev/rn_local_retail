import { StyleSheet } from "react-native";
import AppColors from "../../../assets/colors/AppColors";
const { primaryColor } = AppColors
export const TabStyles = StyleSheet.create({
    tabNavigation: {
        backgroundColor: primaryColor,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginLeft: 15,
        marginRight: 15,
        position: 'absolute',
    }
})