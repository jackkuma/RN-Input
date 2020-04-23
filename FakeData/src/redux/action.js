export const CHANGE_NAME = 'CHANGE_NAME'

export function changeNickName(nickName) {
    return {
        type: CHANGE_NAME,
        payload: { nickName: nickName }
    }
}