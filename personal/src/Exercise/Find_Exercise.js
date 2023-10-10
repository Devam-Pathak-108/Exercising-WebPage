import React, { useEffect, useState } from 'react';
import "./Find_Exercise.css"
import ExersiceApi from '../Exercise/Exercise_api';
import temp from "../Components/temp_data.json"
import { useNavigate } from 'react-router-dom';
import Loader from './loader';
import { useDispatch, useSelector } from 'react-redux';
import { StoreExercise } from '../reducers/actions/ExerciseAction';
const Find_Exercise = () => {
  const navigator = useNavigate()
  const [exer, setExer] = useState([{}])
  const getData = (data) => {
    setExer(data)
    console.log(data)
  }

  //pagination start
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 12
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = exer.slice(firstIndex, lastIndex)
  const nPages = Math.ceil(exer.length / recordsPerPage)


  console.log(firstIndex, lastIndex, currentPage)
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  const perPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  // pagination end

  const handleExer = (e) => {
    dispatch(StoreExercise(e))
    navigator("/exercise_details")
  }
  return (
    <div className='exer-main '>
      <ExersiceApi onSubmitHandler={getData} />
      <div className='row exer-out'>
        <Loader isLoading={records.length < 2}>
          {records.map((e, i) =>

            <div className='col col-xl-3 col-sm-6 col-12 card-outer-exer' key={i}>
              <div className='card-inner-exer' onClick={() => handleExer(e)}>
                <center>
                  <h3> <b> Exercise : </b>{e.name}</h3>
                  <img src={e.gifUrl} alt='Not again!!' />
                  <p><b>BodyPart :</b>{e.bodyPart}</p>
                  <p><b>Equipment :</b>{e.equipment}</p>
                </center>

              </div>
            </div>
          )}
        </Loader>
        <center>
          <a href='#' onClick={perPage}> <button className='Pagination_btn'> &lt;-PREV</button></a>
          <a href='#' onClick={nextPage}><button className='Pagination_btn'> next-&gt;</button></a>
        </center>
      </div>

    </div>
  );
}

export default Find_Exercise;