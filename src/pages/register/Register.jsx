import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import './register.scss'

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const cPasswordRef = useRef(null);
  const navigate = useNavigate();

  const handleOnClick = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const cPassword = cPasswordRef.current.value;

    if (username === "" || password === "" || cPassword === "")
    {
      setErrorMessage('Please enter both username and password.');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
     
    }
    else if (password !== cPassword)
    {   
      setErrorMessage('your password did not match');
      passwordRef.current.value = '';
      cPasswordRef.current.value = '';
      
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }
    else  
    {
      navigate("/dashboard");
      setErrorMessage('');
      console.log('Registration successful');
    }
  };

  useEffect(() => {
    ScrollReveal().reveal('._register-container', {
      duration: 2000,
      easing: 'ease-in-out',
      reset: true,
      origin: '',
      distance: '10px',
      opacity: 0,
      afterReveal: (domEl) => {
        console.log('Element revealed:', domEl);
      },
    });
  }, []);

  return (
    <div className='__register'>
      <div className="__image-overlay flex items-center justify-center ">
        <div className="_register-container h-[auto] w-[400px] bg-white p-[40px] grid grid-rows-[1fr,auto,1fr] rounded-[5px]">
          <div className="mb-[50px] text-center text-2xl font-bold  ">BOBSI INTRANET</div>
          <div className=" flex flex-col">
            <span className='mb-[20px] font-medium'>Register</span>
            <label htmlFor="">Username</label>
            <input type="text" placeholder='Enter your username' className='  h-[40px] p-5' ref={usernameRef}/>
              
            <label htmlFor="" className='mt-3'>Password</label>
            <input type="password" placeholder='Enter your Password'  className='  h-[40px] p-5' ref={passwordRef} />

            <label htmlFor="" className='mt-3'>Confirm Password</label>
            <input type="password" placeholder='Re-type your password ' className='  h-[40px] p-5' ref={cPasswordRef} />
                    
           
            <input type="submit" onClick={handleOnClick} value="Register"  className='mt-3 h-[40px] bg-green-500'/>
            {errorMessage && (
              <div className="text-red-500 text-[14px] pt-2 text-center">{errorMessage}</div>
            )}
          </div>
          <div className="mt-[20px] text-center text-[13px]">
            <span>Already have an account?</span><br />
            <Link to='/' className='text-[blue] ps-1'>Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
