import {StyleSheet} from 'react-native';

const def = {
    backgroundColor: '#28282B',
    fontColor: 'white'
}
export const container = StyleSheet.create({
    common: {
        width: '100%',
        height: '100%',
        backgroundColor: def.backgroundColor,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: def.backgroundColor,
    },
})

export const font = StyleSheet.create({
    common: {
        color: def.fontColor
    }
})

