import React from 'react';
import './Nav_bar.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import logo from '../Images/temp_logo.png'
import ExerciseLogo from "../Images/Exercisepng.png"
import LogoutLogo from "../Images/LogoutLogo.png"
import WorkoutLogo from "../Images/WorkoutLogo.png"
import SignInLogo from '../Images/SignInLogo.png';
import SignUpLogo from '../Images/NewUserLogo.png';
import Home from './Home'
import Contact from '../Forms/Contact_us'
import FindExercise from '../Exercise/Find_Exercise'
import SignIn from '../Forms/Sign_in'
import SignUp from '../Forms/Sign_up'
import contactUs from '../Images/contactUs.png';
import MyProfile from './MyProfile';
import Workouts from '../workouts/workouts';
import Exercise from '../Exercise/exercise';
import { useSelector } from 'react-redux';
import WorkoutDetail from '../workouts/workoutDetail';


const NavBar = (args) => {
    const userData = useSelector((store) => store.userData)
    const Login_text = (props) => {
        const onLogout = () => {
            localStorage.clear()
        }


        if (userData.userData !== null) {
            return (
                <>
                    <div>

                        <Link to="/myprofile">
                            <button className='nav-btn'><img className='ProfilePicNav' alt='work5' src={"ProfilePics/" + userData.userData.profilePic} />MyProfile</button></Link>
                    </div>
                    <div>
                        <Link to="/workouts"><button className='nav-btn'>Workouts</button></Link>
                    </div>
                    <div>
                        <a href="/"><button className='nav-btn' onClick={onLogout}>Logout</button></a>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div>
                        <Link to="/Sign_in"><button className='nav-btn'>Sign in</button></Link>
                    </div>
                    <div>
                        <Link to='Sign_up'><button className='nav-btn'>Sign Up</button></Link>
                    </div>
                </>
            )
        }
    }
    const Login_text_resp=()=>{
        const onLogout = () => {
            localStorage.clear()
        }


        if (userData.userData !== null) {
            return (
                <>
                    <div>

                        <Link to="/myprofile">
                            <img className='ProfilePicNav' alt='work2' src={"ProfilePics/" + userData.userData.profilePic}style={{width:"40px", borderRadius:"50%",margin:"10px"}} /></Link>
                    </div>
                    <div>
                        <Link to="/workouts"><img  src={WorkoutLogo} alt='work1' style={{width:"40px", borderRadius:"50%",margin:"10px"}} /></Link>
                    </div>
                    <div onClick={onLogout}>
                        <a href="/"><img src={LogoutLogo} alt='work7' style={{width:"40px", borderRadius:"50%",margin:"10px"}}/></a>
                    </div>
                </>
            )
        }
        else {
            return (
                <>
                    <div>
                        <Link to="/Sign_in"><img src={SignInLogo} alt='work3' style={{width:"40px", borderRadius:"50%",margin:"10px"}} /></Link>
                    </div>
                    <div>
                        <Link to='Sign_up'><img src={SignUpLogo} alt='work4'style={{width:"40px", borderRadius:"50%",margin:"10px"}} /></Link>
                    </div>
                </>
            )
        }
    }
    return (
        <div>
            <Router>
                <div className='Nav-ul flex-fill'>
                    <div className='navbarLogo'>
                        <Link to='/'>
                            <img src={logo} alt='Something went Wrong!' className='logo' />
                        </Link>
                    </div>
                    <div className='navbarLinks'>
                        <div>
                            <Link to='/Contact'><button className='nav-btn'>Contact Us</button></Link>
                        </div>
                        <div>
                            <Link to='/Exercise'><button className='nav-exer-btn'>Exercise</button></Link>
                        </div>
                        {Login_text()}
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Exercise' element={<FindExercise />} />
                    <Route path='/Sign_in' element={<SignIn />} />
                    <Route path='/Sign_up' element={<SignUp />} />
                    <Route path='/myprofile' element={<MyProfile />} />
                    <Route path='/workouts' element={<Workouts />} />
                    <Route path='/exercise_details' element={<Exercise />} />
                    <Route path="/workoutDetails" element={<WorkoutDetail />} />
                    <Route path="*" element={<h1><center>PAGE NOT FOUND</center></h1>} />
                </Routes>
                <div style={{height:"100px"}}>

                </div>
                <div className ="NavResponsive">

                    <Link to="/"><img src={logo} alt='work5' style={{width:"40px", borderRadius:"50%",margin:"10px"}}/></Link>
                    <Link to='/Exercise'><img src={ExerciseLogo} alt='work6' style={{width:"40px", borderRadius:"50%",margin:"10px"}}/></Link>
                    <Link to="/Contact"><img src={contactUs} alt='work7'  style={{width:"40px", borderRadius:"50%",margin:"10px"}}/></Link>
                    {Login_text_resp()}
                    
                </div>
            </Router>

        </div>

    );
}


export default NavBar;
