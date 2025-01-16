import axios from "axios";
import { useEffect, useState } from "react"




const AppoinmentData=()=>{
    const [data,setData]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/doctors/datadisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setData(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans=map
    return(
        <>
        
        <div>
            <div>

            </div>
        </div>
        
        </>
    )
}
export default AppoinmentData