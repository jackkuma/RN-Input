import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    block: {
        padding: 8,
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sightView: {
        height: 160,
        justifyContent: 'flex-end',
        position: 'relative',
    },
    cardView: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',    
    },
    seperator: {
        height: 1,
        backgroundColor: '#bac7a7',
    },
    photoImage: {
        flex: 2,
        width: '100%',
        height: 120,
    },
    more: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll: {
        height:224,
        marginHorizontal: 8,
        margin: 8,
    },
    summary: {
        color: '#333',
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 21,
        padding: 8,
    },
    photo: {
        borderRadius: 16,
        overflow: 'hidden',
        width: 120,
        height: 100,
    },
    info: {
        paddingLeft: 24,
        letterSpacing: 1,
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    geo: {
        backgroundColor: '#fd5e53',
        borderRadius: 16,
        padding: 5,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 10,
    },
    bookmark: {
        position: 'absolute',
        top: -1,
        right: 10,
    }
})