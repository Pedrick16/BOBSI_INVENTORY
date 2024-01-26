import { useRef, useState } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';



const Login = () => {
  useEffect(() => {
    ScrollReveal().reveal('._login-container', {
      duration: 2000,
      easing: 'ease-in-out',
      reset: true, // This resets the properties when scrolling down
      origin: '', // You can change the origin as needed
      distance: '10px', // You can adjust the distance
      opacity: 0,
      afterReveal: (domEl) => {
        // Optional: You can add custom logic after the reveal animation
        console.log('Element revealed:', domEl);
      },
    });

    


  }, [])
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();


  const [errorMessage, setErrorMessage] = useState('');





  const handleOnClick = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username && password) {
      navigate("/dashboard");
      setErrorMessage('');
      console.log('Login successful');
    } else {
      setErrorMessage('Please enter both username and password.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000)
    }


  }



 
  
  return (
    <div className="__login">
      <div className="__image-overlay flex items-center justify-center  ">
        <div className="_login-container h-[auto] w-[400px] bg-white p-[40px] grid grid-rows-[1fr,auto,1fr] rounded-[5px]">
          <div className="mb-[50px] text-center text-2xl font-bold">
            BOBSI INTRANET
          </div>
          <div className=" flex flex-col">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="   h-[40px] p-5"
              ref={usernameRef}
            />

            <label htmlFor="" className="mt-5">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your Password "
              className=" h-[40px] p-5"
              ref={passwordRef}
            />

            <input
              type="submit"
              onClick={handleOnClick}
              value="Login"
              className="mt-5 h-[40px] bg-green-500"
            />

            {errorMessage && (
              <div className="text-red-500 text-[14px] pt-2 text-center">{errorMessage}</div>
            )}
            {/* <span className=' text-red-500'>{errorMessage}</span> */}
          </div>
          <div className="mt-[20px] text-center text-[13px]">
            <span>Don’t have an account?</span>
            <br />
            <Link to="/register" className="text-[blue] ps-1">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Login