import React from "react";
import LoginImage from "../../assets/login.png";

const Login = () => {
  return (
    <div className='relative flex w-full h-full text-black '>
      <div className='w-1/2 h-screen '>
        <div className='flex flex-col justify-center w-2/3 h-full mx-auto text-white xl:w-1/2'>
          <div>
            <p className='mb-3 text-3xl font-bold text-black'>Welcome back</p>
          </div>

          <div className='mt-10'>
            <form>
              <div>
                <label
                  className='mb-2.5 block font-normal text-black'
                  for='email'
                >
                  Username or email
                </label>
                <input
                  type='email'
                  id='email'
                  className='inline-block w-full p-4 leading-none placeholder-[#B1B1B1] bg-white border border-1 border-gray-200 text-black rounded-lg text-3lack '
                  placeholder='Enter username or email'
                />
              </div>
              <div className='mt-4'>
                <label
                  className='mb-2.5 block font-normal text-black'
                  for='email'
                >
                  Password
                </label>
                <input
                  type='password'
                  id='email'
                  className='inline-block w-full p-4 leading-none text-black placeholder-[#B1B1B1] bg-white border border-1 border-gray-200 rounded-lg'
                  placeholder='Enter password'
                />
              </div>
              <div className='flex flex-col justify-end w-full mt-4 sm:flex-row'>
                <div>
                  <a
                    href='#'
                    className='text-sm hover:text-gray-600 text-[#184C72]'
                  >
                    <span className='text-black'>Forgot password? </span>
                    Reset password
                  </a>
                </div>
              </div>
              <div className='my-10'>
                <button className='w-full p-4 bg-[#184C72] rounded-lg hover:bg-[#184C71]'>
                  Login
                </button>
              </div>
              <div className='mt-4'>
                <fieldset className='border-t border-gray-400 border-solid'>
                  <legend className='px-2 mx-auto text-sm text-center text-black'>
                    OR
                  </legend>
                </fieldset>
              </div>
              <div className='flex justify-center mt-4'>
                <p className='text-black'>
                  Don't have an account yet?{" "}
                  <span className='text-[#184C72] font-semibold cursor-pointer hover:font-bold'>
                    {" "}
                    Create account
                  </span>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='h-screen w-1/2 relative '>
        <div className='flex items-center content-center justify-center bg-red-300'>
          <p className='absolute text-white  w-[310px] text-3xl text-center top-20 '>
            L' école Congolese B.G.S. offre un cadre éducatif qui rassure la
            communauté de la ville de Kolwezi...
          </p>
        </div>

        <img
          src={LoginImage}
          className='hidden object-cover w-full h-full lg:block'
        />
      </div>
    </div>
  );
};

export default Login;
