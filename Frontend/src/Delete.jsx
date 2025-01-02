import axios from "axios";
import { useEffect, useState } from "react";
const Delete=()=>{
    const [myData, setMydata]=useState([]);
    
    const loadData=()=>{
        let api="http://localhost:8000/students/datadelete";
        axios.get(api).then((res)=>{
            setMydata(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=myData.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <h1 align="center">This is Delete Section!</h1>
        <div>
           <table>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
           </table>
        </div>
        </>
    )
}
export default Delete;