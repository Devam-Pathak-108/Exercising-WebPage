
const initialValue = {
    Workouts: "Started"
}

const Workouts = (state = initialValue, action) => {
    switch (action.type) {

        case "STORE_WORKOUT_INITIAL":
            console.log(action.payload, state)

            return { ...state, Workouts: { title: action.payload.title, details: action.payload.details } };

        case "ADD_EXERCISE":
            console.log(action.payload, state)

            return { ...state, Workouts: { ...state.Workouts, details: [...state.Workouts.details, { uid: action.payload.uid, exercise: action.payload.exercise, sets: action.payload.sets }] } };

        case "DELETE_EXERCISE":
            console.log(action.payload, state)
            var data = []
            for (var i = 0; i < state.Workouts.details.length; i++) {
                if (state.Workouts.details[i].uid != action.payload.uid) {
                    data.push(state.Workouts.details[i])
                }
            }
            return { ...state, Workouts: { ...state.Workouts, details: data } };

        case "MOVE_UP_EXERCISE":
            console.log(action.payload, state)
            var data = state.Workouts.details
            var temp
            for (var i = 0; i < state.Workouts.details.length; i++) {
                if (state.Workouts.details[i].uid == action.payload.uid && i != 0) {
                    temp = data[i - 1]
                    data[i - 1] = data[i]
                    data[i] = temp
                }
            }
            return { ...state, Workouts: { ...state.Workouts, details: data } };

        case "MOVE_DOWN_EXERCISE":
            var data = state.Workouts.details
            var temp
            console.log(data)
            for (var i = 0; i < state.Workouts.details.length; i++) {
                if (state.Workouts.details[i].uid == action.payload.uid && i != state.Workouts.details.length - 1) {
                    temp = data[i + 1]
                    data[i + 1] = data[i]
                    data[i] = temp
                }
            }
            return { ...state, Workouts: { ...state.Workouts, details: data } };
        default: return state;

    }
}

export { Workouts } 