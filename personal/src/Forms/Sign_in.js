import React, { useEffect, useState } from 'react';
import "./Sign_up.css"
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { GetUserData } from '../reducers/actions/actionsMiddleware';
import Modal from '../Components/Modal';
const SignIn = () => {
    var navigate = useNavigate()
    const userData = useSelector((store)=> store.userData )
    const Notification = useSelector((store)=> store.Notification)
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [ModalOpen, setModalOpen] = useState(false)
    
    useEffect(() => {
        if (userData.userData !== null) {
            navigate('/')
        }
        if (Notification.data.from ==="Sign_In"){
            setModalOpen(true)
        }
    },[Notification, userData])

    const handleName = (e) => {
        setUsername(e.target.value)
    }
    const handlePassward = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(GetUserData ({ name: username, password: password }))
        // UserProfile.CheckUser({ name: username, password: password })
        // setTimeout(function () {
        //     var response = UserProfile.responseFind()
        //     if (response === null) {
        //         setError("Something Went Wrong")
        //     }
        //     else if (response === "User Not found") {
        //         setError("UserName or Password incorrect")

        //     } else {
        //         console.log(response)
        //         localStorage.setItem('userData', JSON.stringify(response))
        //         navigate('/')
        //         // window.location.reload(false);
        //     }
        // }, 1000);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="card-signUp">
                    <h4 className="singup-signUp">Sign In</h4>
                    <div className="inputBox-signUp">
                        <input type="text" required onChange={handleName} />
                        <span>Username</span>
                    </div>

                    <div className="inputBox-signUp">
                        <input type="password" required onChange={handlePassward} />
                        <span>Password</span>
                    </div>
                    <button type='submit' className="enter-signUp ">Enter</button>

                </div>
            </form>
            <Modal open={ModalOpen} close={() => setModalOpen(false)}>
                {Notification.data.data}
            </Modal>
        </div>
    );
}

export default SignIn;
