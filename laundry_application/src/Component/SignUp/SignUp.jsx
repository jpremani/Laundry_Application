import React, { useState } from "react";
import "./SignUp.css";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const creteUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((value) => {
      console.log(value);
      alert(`${email} created`);
      navigate("/login");
    });
  };
  return (
    <div className="SignUp">
      <form>
        <h1>SignUp Here</h1>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={creteUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default SignUp;
