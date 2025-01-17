import axios from "axios"
import { useEffect, useState } from "react"

const Display=()=>{
    const [mydata,setMydata]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/user/userdisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    return(
        <>
        <h1>Display Section!!</h1>
        </>
    )
}
export default Display