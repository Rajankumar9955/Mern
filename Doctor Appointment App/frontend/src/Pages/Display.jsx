
import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const  Display=()=>{
    const [data,setData]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/bookings/datadisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setData(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const mydel=(id)=>{
        let api="http://localhost:8000/bookings/datadelete";
         axios.post(api,{id:id}).then((res)=>{
            message.error("Data Deleted!!");
            loadData();
         })
      }

    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.doctorname}</td>
                <td>{key.department}</td>
                <td>{key.age}</td>
                <td>{key.shifttime}</td>
                <td>₹ {key.fees}</td>
                <td>
                    <a href="#" onClick={()=>{mydel(key._id)}}>
                    <Button variant="danger">Delete</Button>
                    </a>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        
        <div style={{height:"510px"}}>
            <div>
                <h1 align="center" style={{marginTop:"10px"}}>Your Booking</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Doctor Name</th>
          <th>Deparment</th>
          <th>Age</th>
          <th>Shift Timing</th>
          <th>Fees</th>
          <th>Delete</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </div>
        
        </>
    )
}
export default Display;