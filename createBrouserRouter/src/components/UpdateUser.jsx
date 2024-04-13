import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile4 } from "react-icons/ci";



const UpdateUser = () => {
  let { state } = useLocation();
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    userId: state.userId,
    login: state.login,
    emailId: state.emailId,
    contact: state.contact,
    gender: state.gender,
    avatar_url: state.avatar_url,
  });

  let { userId, login, emailId, contact, gender, avatar_url } = userDetails;
  let handleImage = (e) => {
    let { files, name } = e.target;
    setUserDetails({ ...userDetails, [name]: URL.createObjectURL(files[0]) });
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  console.log(userDetails);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/users/${state.id}`, userDetails);
    toast.success("User Details Updated Succesfully");
    navigate("/allusers/user");
  };
  return (
    <section className="create-user update-user" >
      <h2>Update User</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grp">
          <label htmlFor="loginId"><CiUser /> User Id : </label>
          <input
            type="text"
            name="userId"
            id="loginId"
            value={userId}
            placeholder="Enter User ID"
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-grp">
          <label htmlFor="username"><MdOutlineDriveFileRenameOutline /> User Name : </label>
          <input
            type="text"
            name="login"
            id="username"
            placeholder="Enter UserName"
            value={login}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-grp">
          <label htmlFor="emailId"><MdOutlineMail /> Email Id : </label>
          <input
            type="email"
            name="emailId"
            id="emailId"
            value={emailId}
            placeholder="Enter Your Email Id "
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-grp">
          <label htmlFor="mobileNo"><CiMobile4 /> Contact No :</label>
          <input
            type="tel"
            name="contact"
            id="mobileNo"
            pattern="[/0-9]{10}"
            placeholder="Please Enter Your Mobile No."
            value={contact}
            onChange={handleChange}
            required
          ></input>
        </div>

        <div className="form-grp border-bottom">
          <label htmlFor="gender">Select Gender :</label>
          <div
            className="genders"
            name="gender"
            value={gender}
            onChange={handleChange}
          >
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male" id="gender">
              Male
            </label>
            <input type="radio" name="gender" id="Female" value="female" />
            <label htmlFor="Female" id="gender">
              FeMale
            </label>
            <input type="radio" name="gender" id="Other" value="Others" />
            <label htmlFor="Other" id="gender">
              Other
            </label>
          </div>
        </div>
        <div className="form-grp border-bottom update-file">
          <input type="file" name="avatar_url" id="" onChange={handleImage} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default UpdateUser;
