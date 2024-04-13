import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ViewMore = () => {
       let {state}=useLocation();
       console.log(state)

       let [gitData, setGitData] = useState([{
        userId: state.userId,
        login: state.login,
        emailId: state.emailId,
        contact: state.contact,
        gender: state.gender,
        avatar_url: state.avatar_url,
       }
       ]);

       let fetchdata = async () => {
        let { data } = await axios.get("http://localhost:5000/users");
        console.log(data);
        setGitData(data);
      };

      // useEffect(() => {
      //   fetchdata();
      // }, [gitData]);

  return (
    // <article className='view-more'>
    //    <h1>view more Component</h1>
    // </article>
    <section className="view-more">
      {gitData.length ==0  ? (
        <h1 className="loading">Loading...........</h1>
      ) : (
        gitData.map((ele, index) => {
          return (
            <div key={index + 1}>
              <img src={ele.avatar_url} alt="" />
              <h1>
                <strong>User Id : </strong> {ele.id}
              </h1>
              
              <h1>
                <strong>User Name : </strong>
                {ele.login}
              </h1>
              <h1>
                <strong>Email Id : </strong> {ele.emailId}
              </h1>
              <h1>
                <strong>Contact : </strong> {ele.contact}
              </h1>
              <h1>
                <strong>Gender : </strong> {ele.gender}
              </h1>
            </div>
          );
        })
      )}
    </section>


  )
}

export default ViewMore
