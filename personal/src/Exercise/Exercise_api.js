import React, { useState } from 'react';
import axios from 'axios'
import "./Exercise_api.css"
const ExersiceApi = (props) => {

    const [exercise, setExercise] = useState([{}])
    const [search, setSearch] = useState("")
    const Get_Exercise = async () => {
        var url_str = 'https://exercisedb.p.rapidapi.com/exercises/' + search
        console.log(url_str)
        const options = {
            method: 'GET',
            url: url_str,
            headers: {
                'X-RapidAPI-Key': '8d8a93ff7bmsh42f2e25bdaa4d77p12ea3ejsn546e44fce257',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };
        try {
            const response = await axios.request(options);
            setExercise(response.data)
            console.log('api went well')
        } catch (error) {
            console.error(error.response.data);
        }
    }

    const OnSubmitData = (e) => {
        e.preventDefault()
        Get_Exercise()
        props.onSubmitHandler(exercise)
    }
    const AllExerciseParts=[
        "back",
        "cardio",
        "chest",
        "lower arms",
        "lower legs",
        "neck",
        "shoulders",
        "upper arms",
        "upper legs",
        "waist"
      ]
    return (
        <div className='container'>
            <form className='.exer-form' onSubmit={OnSubmitData}>
                <center>
                    <input type='text' className='exer-form-ip' onChange={(e)=> {setSearch("name/"+e.target.value)}}/>
                </center>
                {AllExerciseParts.map((parts)=>{
                return(
                    <>
                    <button className="nav-btn1" type="submit" onClick={(e)=>{setSearch("bodyPart/"+parts)}}>{parts}</button>
                    </>
                )
            })}
            </form>
            
        </div>
    );
}

export default ExersiceApi;



