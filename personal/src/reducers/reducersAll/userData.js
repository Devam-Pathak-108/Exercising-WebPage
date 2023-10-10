
const initialValue = {
    userData: JSON.parse(localStorage.getItem('userData'))
}

const userData =    (state = initialValue, action) => {
    switch (action.type) {

        case "STORE_USER":
            console.log(action.payload, state)
            
            return { ...state, userData: action.payload };

        default: return state;
    }
}

export { userData } 