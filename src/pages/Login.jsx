import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, signUpProvider } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../store/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password, navigate);
    dispatch(loginHandle(user));
    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
    setEmail("");
    setPassword("");
  };
  const handleProviderLogin = () => {
    signUpProvider(navigate("/"));
  };
  return (
    <>
      <form
        className="max-w-xl mx-auto grid gap-y-4 py-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <a href="" className="text-left link">
          Forgot password?
        </a>
        <a href=""></a>
        <div>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </div>
        <div>
          <button
            className="btn btn-primary w-100"
            type="submit"
            onClick={handleProviderLogin}
          >
            CONTİNUE WİTH GOOGLE
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
