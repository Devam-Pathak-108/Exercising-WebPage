
const initialValue = {
    data: ""
}

const Notification =    (state = initialValue, action) => {
    switch (action.type) {

        case "CHANGE_NOTIFICATION":
            console.log(action.payload, state)
            return { ...state, data: action.payload };

        default: return state;
    }
}

export { Notification } 