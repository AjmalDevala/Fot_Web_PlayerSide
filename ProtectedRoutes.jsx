import axios from "axios"
import { Navigate } from "react-router-dom"
import Instance from "./src/components/config/Instance"

const protectedRoutes = ({ children }) => {
    const token = localStorage.getItem("token")
    if(token){
        Instance
        .get("/verifyUser",
        {headers : {
          Authorization : "Bearer " + localStorage.getItem("token"),
      }})
        .then((response) => {
          
          const user = response.data.user
         
          if(user.status === "Block"){
            localStorage.clear()
            window.location.reload()
            return <Navigate to = {"/login"} replace = {true}></Navigate>

          }else{
            return children
          }
        })
       
    }else{

        return <Navigate to = {"/login"} replace = {true}></Navigate>
    }

   return children
    
}

export default protectedRoutes