import React, { useEffect, useState } from "react";
import "./MyProfile.css";
import { useNavigate } from "react-router-dom";
import FileUploder from "../Components/FileUploder";
import { useSelector, useDispatch } from "react-redux";
import { UpdateUserData } from "../reducers/actions/actionsMiddleware";
const MyProfile = () => {
  const userData = useSelector((store) => store.userData);
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const navigate = useNavigate();
  const profilePic = "ProfilePics/" + userData.userData.profilePic;
  useEffect(() => {
    if (userData.userData === null) {
      navigate("/");
    }
  }, [userData]);
  const UpdateUser = () => {
    dispatch(UpdateUserData({ name: newUserName, email: newUserEmail }));
  };
  return (
    <div className="container myprofileMain">
      <div className="myprofilePicDiv">
        <img
          src={profilePic}
          alt="Something went wrong"
          className="myprofilePic"
        />
      </div>
      <div className="myprofilePicDiv">
        <FileUploder name={userData.userData.name} />
      </div>

      <div className="myprofileFieldMain">
        <div className="myprofileField">
          Name
          <br /> <p className="myprofileField1"> {userData.userData.name} </p>
        </div>
        <div className="myprofileField">
          Email
          <br /> <p className="myprofileField1">
            {userData.userData.email}
          </p>
        </div>
      </div>
      <center>
        <div className="updateUser">
          <div className="one-align">
            <p className="updateProfilelabel">UserName:</p>
            <input
              type="text"
              className="UpdateProfileInput "
              required
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>
          <div className="one-align">
            <p className="updateProfilelabel">Email:</p>
            <input
              type="email"
              className="UpdateProfileInput "
              required
              onChange={(e) => setNewUserEmail(e.target.value)}
            />
          </div>
          <div className="one-align">
            <button
              className="UpdateProfileBtn col col-12"
              onClick={UpdateUser}
            >
              Update Profile
            </button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default MyProfile;
