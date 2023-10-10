import React, { useEffect } from 'react';
import "./exercise.css"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';
const Exercise = () => {

    const respExer = useSelector((store)=>store.Exercise)
    return (
        <div className="ExerMain">
            <div className=' row'>
                <div className='col col-lg-6 ExerImgContainer'>
                    <img className=" ExerImg" src={respExer.exercise.gifUrl} alt='Something went wrong!' />
                </div>
                <div className='col col-lg-6'>
                    <div className='ExerName'>Name <br /> {respExer.exercise.name} </div><br /><br />
                    <div className='ExerEqui'>Equipments <br /> {respExer.exercise.equipment} </div><br/>
                    <div className='ExerEqui'>Body Part <br /> {respExer.exercise.bodyPart} </div>
                    <br/>
                    <br/>
                    <div className="ExerAdd">
                        <Link to="/workouts">
                        <button className='ExerAddBtn'> Add to workout! </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exercise;
