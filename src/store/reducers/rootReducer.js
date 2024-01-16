
const initState = {
    users: [
        { id: 1, name: 'Cuong1' },
        { id: 2, name: 'Cuong2' },
    ]
}

const rootReducer = (state, action) => {
    return initState;
}

export default rootReducer;