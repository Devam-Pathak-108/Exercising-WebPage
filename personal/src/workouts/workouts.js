import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch}  from "react-redux"
import "./workouts.css"
import { UpdateUserWorkouts, UpdateUserWorkoutsDelete } from '../reducers/actions/actionsMiddleware';
import { useNavigate} from "react-router-dom"
import {  storeWorkoutsInitial } from '../reducers/actions/workoutAction';
const Workouts = () => {

    const navigator = useNavigate()
    const [addDisp, setAddDisp] = useState(false)
    const [newAddedWorkout,setNewAddedWorkout]=useState('')
    const userData = useSelector((store)=>store.userData) 
    const dispatch = useDispatch()

    const handleAddSubmit=(e)=>{
        e.preventDefault()
        dispatch(UpdateUserWorkouts( { title : newAddedWorkout , details:[] }))
    }

    const addExerForm = () => {
        if (addDisp) {
            return (
                <div className='workAddMain'>
                    <form onSubmit={(e)=>{handleAddSubmit(e)}}>
                        <input type="text" onChange={(e)=>setNewAddedWorkout(e.target.value)} /><br></br>
                        <button type='Submit' className="workAddBtn" >Add</button>
                    </form>
                </div>
            )
        }
    }

    const handleCardClick=(info)=>{
        dispatch(storeWorkoutsInitial(info))
        navigator("/workoutDetails")
    }

    const handleDeleteClick=(info)=>{
        dispatch(UpdateUserWorkoutsDelete(info))
    }
    return (
        <div className='container '>
        <center>
            <div className="workOutMain">
                <div>
                    <button onClick={() => setAddDisp(!addDisp)} className="workAddBtn" >Add New workout</button>
                </div>
                {addExerForm()}
            </div>
        </center>
        <div className='row'>
        {
            userData.userData.workouts.map((info)=>{
                return(
                    <div className="cardWorkout col col-4 m-5">
                        <div className="card-detailsWorkout">
                            <p className="text-titleWorkout">{info.title}</p>
                            <button className="btn btn-primary " onClick={()=>{handleCardClick(info)}}>More info</button>
                            <p className="text-bodyWorkout "></p>
                        </div>  
                        <button className='card-buttonWorkout' onClick={()=>{handleDeleteClick(info)}}>Delete</button>
                        
                    </div>
                )
            })
        }
        </div>
        </div>
    );
}

export default Workouts;
