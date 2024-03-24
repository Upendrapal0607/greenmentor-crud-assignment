import React, { useState } from 'react'
import LoginPage from '../Components/Login';
import { SignUp } from '../Components/SignUp';

export const RegisterAndLogin = () => {
const [isLogin,setIsLogin] = useState(true);
  return (
    <div>
      {
        isLogin?<LoginPage setIsLogin = {setIsLogin}/>:<SignUp setIsLogin = {setIsLogin}/>
      }
    </div>
  )
}
