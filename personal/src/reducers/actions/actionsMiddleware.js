
import { NotificationChange } from "./NotificAction"
import { storeNewUser } from "./actions"
import axios from "axios"

const InsertNewUser = (args)=>{
    return async function (dispatch){
    args.profilePic='Default.png'
    var data_1 = JSON.stringify(args)
    await axios.post("http://localhost:5000/api",
        data_1, {
        headers: {
            "content-type": "application/json"
        }
    }).then((response)=>{
        if(response.data === "user already exist"){
            const notify = { data: response.data , from : "Sign_Up" }
            dispatch(NotificationChange(notify))
        }
        else{
            dispatch(storeNewUser(response.data))
            localStorage.setItem("userData",JSON.stringify(response.data))
        }
    }).catch((err)=>{
        dispatch(NotificationChange({ data: "Something happend" , from : "Sign_Up" }))
    })
    
}
}

const GetUserData=(args)=>{
    return async (dispatch)=>{
        var data_1 = JSON.stringify(args)
        axios.post("http://localhost:5000/getData",
            data_1, {
            headers: {
                "content-type": "application/json"
            }
        }
        ).then(response => {
            if (response.data==="User Not found"){
                const notify = { data: response.data , from : "Sign_In" }
                dispatch(NotificationChange(notify))
            }
            else{
                dispatch(storeNewUser(response.data))
                localStorage.setItem("userData",JSON.stringify(response.data))
            }
        }).catch(e => {
            dispatch(NotificationChange({ data: "Something happend" , from : "Sign_In" }))
        })
    }
      
}

const UpdateUserData =(args)=>{
    return async (dispatch)=>{
        var data_1 = JSON.stringify(args)
        axios.post("http://localhost:5000/updateProfile",
            data_1, {
            headers: {
                "content-type": "application/json"
            }
        }
        ).then(response => {
            if (response.data==="User Not found"){
                const notify = { data: response.data , from : "Update" }
                dispatch(NotificationChange(notify))
            }
            else{
                dispatch(storeNewUser(response.data))
                localStorage.setItem("userData",JSON.stringify(response.data))
            }
        }).catch(e => {
            dispatch(NotificationChange({ data: "Something happend" , from : "Update" }))
        })
    }
}

const UpdateUserWorkouts = (args) =>{
    return async (dispatch)=>{
        var data_1 = JSON.stringify(args)
        axios.post("http://localhost:5000/WorkoutUpdate",
        data_1, {
        headers: {
            "content-type": "application/json"
        }
    }
    ).then(response => {
        dispatch(storeNewUser(response.data))
        localStorage.setItem("userData",JSON.stringify(response.data))

    }).catch(e => {
        dispatch(NotificationChange({ data: "Something happend" , from : "Workouts" }))
    })
    }
}

const UpdateUserWorkoutsDetails = (args) =>{
    return async (dispatch)=>{
        var data_1 = JSON.stringify(args)
        axios.post("http://localhost:5000/WorkoutUpdateDetails",
        data_1, {
        headers: {
            "content-type": "application/json"
        }
    }
    ).then(response => {
        dispatch(storeNewUser(response.data))
        localStorage.setItem("userData",JSON.stringify(response.data))

    }).catch(e => {
        dispatch(NotificationChange({ data: "Something happend" , from : "Workouts" }))
    })
    }
}

const UpdateUserWorkoutsDelete = (args) =>{
    return async (dispatch)=>{
        var data_1 = JSON.stringify(args)
        axios.post("http://localhost:5000/WorkoutUpdateDelete",
        data_1, {
        headers: {
            "content-type": "application/json"
        }
    }
    ).then(response => {
        dispatch(storeNewUser(response.data))
        localStorage.setItem("userData",JSON.stringify(response.data))

    }).catch(e => {
        dispatch(NotificationChange({ data: "Something happend" , from : "Workouts" }))
    })
    }
}

export { InsertNewUser,  GetUserData, UpdateUserData , UpdateUserWorkouts,  UpdateUserWorkoutsDetails, UpdateUserWorkoutsDelete}