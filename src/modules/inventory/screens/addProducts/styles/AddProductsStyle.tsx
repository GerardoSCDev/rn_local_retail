import { StyleSheet } from "react-native";
import AppColors from "../../../../../assets/colors/AppColors";

const { primaryColor, unFocusedColor } = AppColors

export const AddProductsStyle = StyleSheet.create({
    headersButtonContainer: {
        flexDirection: 'row',
    },
    headersButtonTwoSpace: {
        columnGap: 15,
    },
    headersButtonThreeSpace: {
        columnGap: 10,
    },
    addProductsSafeArea: {
        flex: 1,
        padding: 10,
        marginBottom: 50,
        overflow: 'hidden'
    },
    cameraContainer: {
        elevation: 13,
        shadowColor: primaryColor,
        width: '100%',
        height: 300,
        flex: 1,
        padding: 10,
        borderRadius: 8,
    },
    cameraSubContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraTextInstruction: {
        color: 'white',
        bottom: 55,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: 10,
        width: '100%',
        backgroundColor: '#FFFFFF20',
        textAlign: 'center',
    },
    cameraCenter: {
        borderWidth: 3,
        borderColor: unFocusedColor,
        borderRadius: 20,
        width: '90%',
        height: 150,
        bottom: 10
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
        backgroundColor: primaryColor,
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000090'
    },
    modalContainer: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalContainerForms: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        maxHeight: 220,
        rowGap: 15
    },
    modalFormFlexBasis100: {
        flexBasis: '100%'
    },
    modalContainerButtons: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50,
        columnGap: 10
    },
    modalAppButton: {
        paddingVertical: 15,
        paddingHorizontal: 35
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyImage: {
        maxHeight: '50%',
        maxWidth: '80%'
    },
    emptyImageTitle: {
        textAlign: 'center'
    }
})