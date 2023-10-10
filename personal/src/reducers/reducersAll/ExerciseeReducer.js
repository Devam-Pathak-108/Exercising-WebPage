
const initialValue = {
    exercise: {}
}

const Exercise =    (state = initialValue, action) => {
    switch (action.type) {

        case "EXER_STORE":
            // console.log(action.payload, state)
            
            return { ...state, exercise: action.payload };

        default: return state;
    }
}

export { Exercise } 