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
    },
    newProductsContainer: {
        flex: 1
    },
    newProductCellContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 3,
    },
    newProductCellContainerElevation: {
        elevation: 2.5,
        shadowColor: '#000',
    },
    newProductCellContainerImage: {
        justifyContent: 'center'
    },
    newProductCellImage: {
        height: 50,
        width: 50
    },
    cellOptionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cellDeleteContainer: {
        marginRight: 5,
        backgroundColor: '#112731',
        width: 80,
        height: 55,
        borderRadius: 8
    },
    cellDeleteText: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: '100%'
    },
})