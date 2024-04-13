import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  let [gitData, setGitData] = useState([]);
  let [deleteCount, setDeletCount] = useState(0);

  let fetchdata = async () => {
    let { data } = await axios.get("http://localhost:5000/users");
    console.log(data);
    setGitData(data);
  };

  let deleteUser = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/users/${id}`);
    setDeletCount(deleteCount + 1);
  };
  useEffect(() => {
    fetchdata();
  }, [deleteCount]);

  return (
    <section className="users">
      {gitData.length ==0  ? (
        <h1 className="loading">Loading...........</h1>
      ) : (
        gitData.map((ele, index) => {
          return (
            <div key={index + 1}>
              <img src={ele.avatar_url} alt="" />
              <p>
                <strong>User Id :</strong> {ele.id}
              </p>
              <h1>
                <strong>User Name : </strong>
                {ele.login}
              </h1>

              <Link to={"/allusers/update"} state={ele} className="editbtn">
                Update
              </Link>
              <button
                onClick={() => {
                  deleteUser(ele.id);
                }}
              >
                Delete
              </button>
              <Link to={"/allusers/viewuser"} state={ele}>
                View More
              </Link>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Users;
