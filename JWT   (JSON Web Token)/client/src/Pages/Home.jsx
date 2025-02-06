import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home=()=>{
            const navigate=useNavigate();
            const UserAuth=async()=>{
                 const token=localStorage.getItem("token");

                  let api="http://localhost:8000/user/UserAuth";
                  const tokenRes=await axios.post(api, null, {headers: { "auth-token": token } });
                  localStorage.setItem("usename", tokenRes.data.name);
                  localStorage.setItem("useremail", tokenRes.data.email);
                  navigate("/dashboard")
                }

          useEffect(()=>{
            UserAuth()
          },[])

    return(
        <>
          <h1 align="center">Home Section</h1>

        </>
    )
}
export default Home;