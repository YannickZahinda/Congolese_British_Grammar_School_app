import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import LoginImage from "../../assets/login.png";
import "./index.css";
import axios from '../../api/axios';
import AuthContext from "../../context/AuthProvider";

// const USER_REGEX = /^[a-zA-Z][A-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const LOGIN_URL = "/users/sign_in";

const Login = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidEmail(result);
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({user: {email: user, password: pwd}}), 
        {
          headers: {'content-Type' : 'application/json'}
          // withCredentials: 'true'
        }
      );
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setAuth({user, pwd, roles, accessToken})
        setUser('');
        setPwd('');
        setSuccess(true);
    } catch (err)  {
        if (!err?.response){
          setErrMsg('No Server Response')
        }else if (err.response?.status === 400){
          setErrMsg('Missing username or Password')
        }else if (err.response?.status === 401){
          setErrMsg('Unauthorized')
        }else {
          setErrMsg('Login Failed');
        }
        errRef.current.focus();
      }
  };

  return (
    <>
      {success ? (
        <section className="success_container">
          <div className="success flex justify-center">
            <FontAwesomeIcon icon={faCheck} />
            <h2>Success!</h2>
            <p>You have successfully logged in.</p>
            <p>
              <a href="#">Go to Admin Dashboard</a>
            </p>
          </div>
        </section>
      ) : (
        <div className="relative flex w-full h-full text-black ">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="w-1/2 h-screen ">
            <div className="flex flex-col justify-center w-2/3 h-full mx-auto text-white xl:w-1/2">
              <div>
                <p className="mb-3 text-3xl font-bold text-black">
                  Welcome back
                </p>
              </div>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="mb-2.5 block font-normal text-black"
                      htmlFor="email"
                    >
                      Username or email
                      <span className={validEmail ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span
                        className={validEmail || !user ? "hide" : "invalid"}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      ref={userRef}
                      value={user}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      aria-invalid={validEmail ? "false" : "true"}
                      // aria-describedby={uidnote}
                      onFocus={() => setUserFocus(true)}
                      // onBlur={() => setUserFocus(false)}
                      required
                      className="inline-block w-full p-4 leading-none placeholder-[#B1B1B1] bg-white border border-1 border-gray-200 text-black rounded-lg text-3lack "
                      placeholder="Enter username or email"
                    />
                  </div>
                  <div className="mt-4">
                    <label
                      className="mb-2.5 block font-normal text-black"
                      htmlFor="password"
                    >
                      Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      className="inline-block w-full p-4 leading-none text-black placeholder-[#B1B1B1] bg-white border border-1 border-gray-200 rounded-lg"
                      placeholder="Enter password"
                    />

                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters. <br />
                      Must include uppercase and lowercases character. A number
                      and a special character. <br />
                      Allowed special character:{" "}
                      <span aria-label="exclamation mark">!</span>
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent sign">%</span>
                    </p>
                  </div>
                  <div className="flex flex-col justify-end w-full mt-4 sm:flex-row">
                    <div>
                      <a
                        href="#"
                        className="text-sm hover:text-gray-600 text-[#184C72]"
                      >
                        <span className="text-black">Forgot password? </span>
                        Reset password
                      </a>
                    </div>
                  </div>
                  <div className="my-10">
                    <button
                      type="submit"
                      // disabled={!validEmail || validPwd ? true : false}
                      className="w-full p-4 bg-[#184C72] rounded-lg hover:bg-[#184C71]"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-4">
                    <fieldset className="border-t border-gray-400 border-solid">
                      <legend className="px-2 mx-auto text-sm text-center text-black">
                        OR
                      </legend>
                    </fieldset>
                  </div>
                  <div className="flex justify-center mt-4">
                    <p className="text-black">
                      Don't have an account yet?{" "}
                      <span className="text-[#184C72] font-semibold cursor-pointer hover:font-bold">
                        {" "}
                        Create account
                      </span>{" "}
                    </p>
                  </div>
                  {/* <p id="uidnote" className={ userFocus && user &&!validEmail ? "instruction" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} /> *
                4 to 24 characters. <br/>
                Must begin with a Letter. <br />
                Letters, numbers, underscore, hyphens allowed
              </p> */}
                </form>
              </div>
            </div>
          </div>
          <div className="h-screen w-1/2 relative ">
            <div className="flex items-center content-center justify-center bg-red-300">
              <p className="absolute text-white  w-[310px] text-3xl text-center top-20 ">
                L' école Congolese B.G.S. offre un cadre éducatif qui rassure la
                communauté de la ville de Kolwezi...
              </p>
            </div>

            <img
              src={LoginImage}
              className="hidden object-cover w-full h-full lg:block"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
