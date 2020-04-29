import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    block: {
        backgroundColor: '#eee',
        width: '45%',
        height: 168,
        margin: 8,
        padding: 8,
    },
    photoImg: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    photo: {
        borderRadius: 120,
        overflow: 'hidden',
        width: 240,
        height: 240,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
    },
    btn: {
        backgroundColor: '#EF0424',
        borderRadius: 16,
        padding: 16,
        paddingLeft: 32,
        paddingRight: 32,
    },
})