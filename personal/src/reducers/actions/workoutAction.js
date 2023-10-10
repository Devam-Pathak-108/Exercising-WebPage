const storeWorkoutsInitial=(args)=>{
    return {
        type:"STORE_WORKOUT_INITIAL",
        payload:args,
    }
}

const AddExercise = (args)=>{
    return {
        type:"ADD_EXERCISE",
        payload:args,
    }
}

const DeleteExercise = (args)=>{
    return {
    type:"DELETE_EXERCISE",
    payload:args,
    }
}

const MoveUpExercise = (args)=>{
    return {
    type:"MOVE_UP_EXERCISE",
    payload:args,
    }
}

const MoveDownExercise = (args)=>{
    return {
    type:"MOVE_DOWN_EXERCISE",
    payload:args,
    }
}

export { storeWorkoutsInitial, AddExercise , MoveDownExercise, MoveUpExercise, DeleteExercise }