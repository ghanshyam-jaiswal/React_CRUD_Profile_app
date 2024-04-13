import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

const CreateUser = () => {
  let navigate = useNavigate();
  let [userDetails, setUserDetails] = useState({
    id: "",
    userId: "",
    login: "",
    emailId: "",
    contact: "",
    gender: "",
    avatar_url: "",
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
    axios.post("http://localhost:5000/users", userDetails);
    navigate("/allusers/user");
  };
  return (
    <section className="create-user">
      <h2>Create User</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grp">
          <label htmlFor="loginId"><CiUser /></label>
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
          <label htmlFor="username"> <MdOutlineDriveFileRenameOutline /></label>
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
          <label htmlFor="emailId"><MdOutlineMail /></label>
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
          <label htmlFor="mobileNo"><CiMobile4 /></label>
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
        <div className="form-grp border-bottom">
          <input type="file" name="avatar_url" id="" onChange={handleImage} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CreateUser;
