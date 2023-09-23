import { StyleSheet } from 'react-native'

const NewProductsStyles = StyleSheet.create({
    containerView: {
        flex: 1,
        padding: 10,
    },
    containerCell: {
        height: 60,
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 10
    },
    card: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 3,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 2.5,
        shadowColor: '#000',
    },
    containerImageProduct: {
        justifyContent: 'center'
    },
    imageProduct: {
        height: 50,
        width: 50
    },
    emptyProductView: {
        flex: 1,
        marginBottom: 45,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50
    },
    emptyContinaerImage: {
        backgroundColor: '#DCDCDC',
        padding: 30,
        borderRadius: 130
    },
    emptyImage: {
        maxHeight: 200,
        maxWidth: 200
    },
    emptyMessageText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        color: '#7A8EA1'
    }
})

export default NewProductsStyles