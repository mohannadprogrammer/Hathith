const actions = require("../action/index")
const loginstat = {
    loading: true,
    login: false
}

export default login = (state = loginstat, action) => {
    switch (action.type) {
        case actions.login:
            console.log(action.payload)
            state.login = action.payload;
            state.loading = false;
            return { ...state }
        default:
            return state
    }
}
