import { Navigate } from "react-router-dom";

export const AuthorizeUser = () =>{
    const token = localStorage.getItem('token')
    if(!token){
       return <Navigate to={'/signin'} replace={true}></Navigate>
    }
  
}