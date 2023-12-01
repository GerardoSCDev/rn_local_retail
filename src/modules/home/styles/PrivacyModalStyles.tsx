import { StyleSheet } from "react-native";
import AppColors from "../../../assets/colors/AppColors";

export const PrivacyModalStyles = StyleSheet.create({
    modalBackgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000090'
    },

    modalContainer: {
        margin: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        rowGap: 10,
        width: '90%',
        height: '90%',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    detailPrivacyContainer: { flex: 1 },
    boldText: { fontWeight: 'bold' },
    justifyText: { textAlign: 'justify' },

    checkBoxArea: {
        flexDirection: 'row',
        marginBottom: 20
    },
    checkBoxMessage: { margin: 8 },

    modalButton: {
        paddingVertical: 15,
        paddingHorizontal: 35,
        width: '100%'
    }
})