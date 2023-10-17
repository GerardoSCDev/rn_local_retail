import { StatusBar, StyleSheet } from "react-native";

export const ListProductStyles = StyleSheet.create({
    containerListProduct: {
        flex: 1
    },
    areaListView: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        marginHorizontal: 2
    },
    containerCell: {
        flex: 1,
        height: 180,
        maxWidth: '33.33%'
    },
    containerCard: {
        flex: 1,
        margin: 2,
        padding: 5,
        elevation: 3,
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    imageProduct: {
        maxWidth: '100%',
        height: 80
    },
    titlesProduct: {
        textAlign: 'justify'
    }
})