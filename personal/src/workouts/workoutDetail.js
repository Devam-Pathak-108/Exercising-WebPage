import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AddExercise, DeleteExercise, MoveDownExercise, MoveUpExercise } from '../reducers/actions/workoutAction';
import { UpdateUserWorkoutsDetails } from '../reducers/actions/actionsMiddleware';
import { Link, useNavigate } from 'react-router-dom';
const WorkoutDetail = () => {
    const Workouts = useSelector((store) => store.Workouts)
    const [exerciseName, setExerciseName] = useState("")
    const [exerciseSets, setExerciseSets] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(AddExercise({ uid: Date.now() ,exercise: exerciseName, sets: exerciseSets }))
    }

    const SaveWorkouts = (e) => {
        console.log(Workouts.Workouts)
        dispatch(UpdateUserWorkoutsDetails(Workouts.Workouts))
    }
    useEffect(() => {
        if (Workouts.Workouts === "Started") {
            navigate("/workouts")
        }
    })

    const deleteWorkoutExer=(data)=>{
        console.log(data)
        dispatch(DeleteExercise(data))
    }
    const moveDownWorkoutExer=(data)=>{
        console.log(data)
        dispatch(MoveDownExercise(data))
    }
    const moveUpWorkoutExer=(data)=>{
        dispatch(MoveUpExercise(data))
    }

    if (Workouts.Workouts !== "Started") {
        return (
            <div>
                <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-9 col-xl-7">
                                <div className="card rounded-3">
                                    <div className="card-body p-4">
                                        <h4 className="text-center my-3 pb-3">{Workouts.Workouts.title}</h4>
                                        <form onSubmit={handleSubmit} className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                            <div className="col-12">
                                                <div className="form-outline">
                                                    <input type="text" id="form1" required className="form-control" onChange={(e) => { setExerciseName(e.target.value) }} value={exerciseName} />
                                                    <input type="text" id="form1" required className="form-control" onChange={(e) => { setExerciseSets(e.target.value) }} value={exerciseSets} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-primary">
                                                    ADD Exercise
                                                </button>
                                            </div>

                                        </form>
                                        <table className="table mb-4">
                                            <thead>
                                                <tr>

                                                    <th scope="col">Exercise</th>
                                                    <th scope="col">Sets/Time</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Workouts.Workouts.details.map((info) => {
                                                    return (
                                                        <tr>

                                                            <td>{info.exercise}</td>
                                                            <td>{info.sets}</td>
                                                            <td>
                                                                <button type="submit" className="btn btn-danger" onClick={()=>{deleteWorkoutExer(info)}}>
                                                                    Delete
                                                                </button>
                                                                <button type="submit" className="btn btn-success ms-1 "  onClick={()=>{moveUpWorkoutExer(info)}}>
                                                                ⮴
                                                                </button>
                                                                <button type="submit" className="btn btn-warning ms-1 "  onClick={()=>{moveDownWorkoutExer(info)}}>
                                                                ⮷
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <td><center> <button className="btn btn-primary" onClick={SaveWorkouts} >Save</button></center></td>
                                                    <td></td>
                                                    <td><center><Link to="/workouts"><button className="btn btn-warning">Cancel</button></Link></center></td>
                                                </tr>

                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default WorkoutDetail;
