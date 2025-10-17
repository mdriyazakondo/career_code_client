import React, { useContext } from "react";
import lotteReactAnimation from "../assets/SignIn.json";
import Lottie from "lottie-react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInUser, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // 👈 এটা ঠিক করা দরকার

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Signed in successfully!",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate(from, { replace: true }); // 👈 redirect after login
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={lotteReactAnimation}
            loop
            style={{ width: "400px" }}
          />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In Now!</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  required
                />
                <a className="link link-hover mt-2">Forgot password?</a>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
            <SocialLogin from={from} /> {/* 👈 প্রপস হিসেবে পাঠাও */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
