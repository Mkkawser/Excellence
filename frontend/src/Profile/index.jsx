import React, { useEffect, useState } from "react";
import axios from "axios";
import Update_profile from "./updateProfile";

const Profile = () => {
  const id = localStorage.getItem("user_id");
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/profile/${id}`)
      .then((val) => setProfile(val.data[0]))
      .catch((err) => console.log(err));
  }, []);
  // console.log(profile);
  return (
    <>
      <div className="">
        <p>{profile.name}</p>
        <p>{profile._id}</p>
        <p>{profile.email}</p>
        <p>{profile.age}</p>
      </div>
      <div className="">
        <Update_profile />
      </div>
    </>
  );
};

export default Profile;
