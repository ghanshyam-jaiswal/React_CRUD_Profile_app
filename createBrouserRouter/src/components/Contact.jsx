import React from "react";
import contactImage from "../assets/contactPage.png";
import { TbPhoneCall } from "react-icons/tb";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
const Contact = () => {
  return (
    <section className="contactPage">
      <article>
        <h1>Have Some Questions ? </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi
          reprehenderit cum laudantium, quis ex harum odio tempora amet et
          voluptates fugiat asperiores soluta deleniti eos qui, mollitia aperiam
          debitis dolores tempore perferendis. Rerum fugiat nesciunt praesentium
        </p>

        <div className="contactDesign">
          <img src={contactImage} alt="" />
          <h1>Contact Us On :</h1>
          <ul>
            <li>
              <TbPhoneCall className="Icon" /> +91 7000365566
            </li>
            <li>
              <FaEnvelopeOpenText className="Icon" /> ghanshyamjaiswal@gmail.com{" "}
            </li>
            <li>
              <MdOutlineLocationOn className="Icon" />sector 17, Gurgaon, Haryana
            </li>
          </ul>
        </div>
        <form>
          <div className="form-grp">
            <input
              type="text"
              name="userId"
              id="loginId"
              placeholder="Enter First Name"
              required
            ></input>
          </div>

          <div className="form-grp">
            <input
              type="text"
              name="login"
              id="username"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="form-grp">
            <input
              type="email"
              name="emailId"
              id="emailId"
              placeholder="Enter Your Email Id "
              required
            ></input>
          </div>

          <div className="form-grp">
            <input
              type="tel"
              name="contact"
              id="mobileNo"
              pattern="[/0-9]{10}"
              placeholder="Please Enter Your Mobile No."
              required
            ></input>
          </div>
          <div className="form-grp">
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Write Your Message Here...."
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </article>
    </section>
  );
};

export default Contact;
