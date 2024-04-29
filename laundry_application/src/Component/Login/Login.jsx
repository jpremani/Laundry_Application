import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { app } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const signinUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log("sign in success");
        navigate("/cart");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid User");
      });
  };

  return (
    <div className="Login">
      <form>
        <h1>Login Here</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
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
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <Link to="/signup">Sign Up Here</Link>

        <button type="submit" className="btn btn-primary" onClick={signinUser}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
