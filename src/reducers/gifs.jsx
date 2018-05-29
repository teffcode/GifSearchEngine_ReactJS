function gifs(state, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalIsOpen: true,
                selectedGif: action.gif.selectedGif
            };
        default:
            return state;
    }
}