import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    rowBlock: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    block: {
        backgroundColor: '#eee',
        width: '45%',
        height: 168,
        margin: 8,
        padding: 8,
        alignContent: 'space-around',
        justifyContent: 'space-around',
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
        backgroundColor: '#fa744f',
        borderRadius: 16,
        padding: 16,
        paddingLeft: 32,
        paddingRight: 32,
    },
})