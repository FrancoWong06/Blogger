import React, { useState } from "react";
import "./SignUp.css";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { FaEye, FaConnectdevelop, FaArrowRight } from "react-icons/fa";
import { IoIosCreate, IoIosFlash } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignUpDetails((prevDetails) => ({
      ...prevDetails,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setSignUpDetails({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="SignUp">
      <div className="platform-features">
        <div>
          <h1>Join Our Community</h1>
          <h3>
            Start your journey with ModernBlog. Share your unique perspective
            and connect with like-minded individuals.
          </h3>
          <div className="features">
            <div>
              <FaEye className="icon" />
              <div>
                <h3>Discover</h3>
                <p>Explore new ideas</p>
              </div>
            </div>
            <div>
              <IoIosCreate className="icon" />
              <div>
                <h3>Create</h3>
                <p>Share your stories</p>
              </div>
            </div>
            <div>
              <FaConnectdevelop className="icon" />
              <div>
                <h3>Connect</h3>
                <p>Build your network</p>
              </div>
            </div>
            <div>
              <IoIosFlash className="icon" />
              <div>
                <h3>Engage</h3>
                <p>Interact with content</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sign-up-container">
        <form className="sign-up">
          <HiOutlineSquare3Stack3D className="sign-up-icon" />
          <h2>Create your account</h2>
          <h3>Start your journey with ModernBlog</h3>

          <div className="sign-up-input-div">
            <label>User Name</label>
            <input
              type="text"
              name="username"
              placeholder="John Doe"
              value={signUpDetails.username}
              onChange={handleChange}
            />
          </div>

          <div className="sign-up-input-div">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              value={signUpDetails.email}
              onChange={handleChange}
            />
          </div>

          <div className="sign-up-input-div">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="●●●●●●●●"
              minLength={8}
              value={signUpDetails.password}
              onChange={handleChange}
            />
          </div>

          <button className="create-account-btn">
            Create account <FaArrowRight />
          </button>

          <div className="have-account-div">
            <p>Already have an account?</p>
            <NavLink to="/login" className="login-nav">
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
