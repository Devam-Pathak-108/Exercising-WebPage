const {legacy_createStore } = require('redux')

const changeUserData=(state={data:""},action)=>{
    switch(action.type){
        case "CHANGE_USERDATA":
            return {...state,data:action.payload}
        case "FILTER_WORKOUTS":
            var data=state.data
            for (i=0;i<data.workouts.length;i++){
                if (data.workouts[i].title==action.payload.title){
                    data.workouts[i]=action.payload
                }
            }
            return{...state,data:data}
    }
}

const store = legacy_createStore(changeUserData)

module.exports = store