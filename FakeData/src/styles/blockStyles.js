import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    block: {
        padding: 10,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slightView: {
        height: 150,
        justifyContent: 'flex-end',
    },
    cardView: {
        height: 125,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',    
    },
    seperator: {
        height: 1,
        backgroundColor: '#ddd',
    },
    photoImage: {
        flex: 2,
        width: '100%',
        height: 125,
    },
    btnArea: {
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
})