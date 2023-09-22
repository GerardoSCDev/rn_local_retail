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
})

export default NewProductsStyles