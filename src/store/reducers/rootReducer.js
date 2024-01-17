
const initState = {
    users: [
        { id: 1, name: 'Cuong1' },
        { id: 2, name: 'Cuong2' },
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let user_id = Math.floor(Math.random() * 1000)
            let user = { id: user_id, name: `random - ${user_id}` };
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;