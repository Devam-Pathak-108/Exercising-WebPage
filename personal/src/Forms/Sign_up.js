import React, { useState,useEffect } from 'react';
import './Sign_up.css'
import Modal from '../Components/Modal';
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import { InsertNewUser } from '../reducers/actions/actionsMiddleware';

const SignUp = () => {
    
    const userData = useSelector((store)=> store.userData)
    const Notification = useSelector((store)=>store.Notification)
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(userData.userData!==null){
            navigate('/')
        }
        if (Notification.data.from == "Sign_Up"){
            setModalOpen(true)  
        }
    },[Notification,userData])
    

    const [ModalOpen, setModalOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [conform, setConform] = useState("")
    const [passError, setPassError] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handlePassward = (e) => {
        setPassword(e.target.value)
    }
    const handleConform = (e) => {
        setConform(e.target.value)
    }
    const handleSubmit =  (e) => {
        e.preventDefault()
        

            if (conform === password) {
                setPassError('')
                dispatcher( InsertNewUser({
                    name: name,
                    email: email,
                    password: password
                }))
                // navigate("/")
                
                // UserProfile.register({
                //     name: name,
                //     email: email,
                //     password: password
                // })
                // //takes time to set responce
                // setTimeout(function () {
                //     setResponse(UserProfile.responseInsert())
                //     setModalOpen(true)
                // }, 1000);
            }
            else {
                if (conform !== '' && password !== '') {
                    setPassError(' Password and Conform Password are not equal')
                }
            }
    }
    
    return (

        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="card-signUp">
                    <h2 className="singup-signUp">Sign Up</h2>
                    <div className="inputBox-signUp">
                        <input type="text" required onChange={handleEmail} />
                        <span className="user-signUp">Email</span>
                    </div>

                    <div className="inputBox-signUp">
                        <input type="text" required onChange={handleName} />
                        <span>Username</span>
                    </div>

                    <div className="inputBox-signUp">
                        <input type="password" required onChange={handlePassward} />
                        <span>Password</span>
                    </div>
                    <div className="inputBox-signUp">
                        <input type="password" required onChange={handleConform} />
                        <span>Conform Password</span>
                    </div>
                    {passError}

                    <button type='submit' className="enter-signUp " >Enter</button>

                </div>
            </form>
            <Modal open={ModalOpen} close={() => setModalOpen(false)}>
                {Notification.data.data}
            </Modal>
        </div>

    );
}

export default SignUp;
