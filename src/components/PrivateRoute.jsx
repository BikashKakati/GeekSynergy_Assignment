import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Navigate } from 'react-router-dom';
const USER_KEY = "SIGNUP_TOKEN";

const PrivateRoute = ({children}) => {
    const {getItem} = useLocalStorage(USER_KEY);
    const userData = getItem();
  return (
     userData?.isLogin ? children : <Navigate to="/login"/>
  )
}

export default PrivateRoute