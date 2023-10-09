import { StyleSheet } from "react-native";

export const AddProductsStyle = StyleSheet.create({
    addProductsSafeArea: {
        flex: 1,
        padding: 10,
        marginBottom: 50,
        overflow: 'hidden'
    },
    cameraContainer: {
        elevation: 13,
        shadowColor: '#112731',
        width: '100%',
        height: 300,
        flex: 1,
        padding: 10,
        borderRadius: 8,
    },
    cameraSubContainer: {
        width: '100%',
        height: '100%'
    },
    cameraTextInstruction: {
        color: 'white',
        bottom: 40,
        textAlign: 'center'
    }
})