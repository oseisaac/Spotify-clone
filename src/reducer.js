export const initialState = {
    // token: "BQBRh6R2MBKhw6vopbxjaXFWXBLwvPuvXAvrvhs8hr1vdf7du2…qNiuXRoeEtcWfOyupC8G-akQtmQ1ujRMjCiAow3_hzijCDryu",
    token: null,
    user: null,
    playlists: [],
    playing: false,
    item: null
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }

}


export default reducer;