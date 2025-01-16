
import axios from "axios";
import { useEffect, useState } from "react"

import Table from 'react-bootstrap/Table';


const  BookAppoinment=()=>{
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
                <td>{key.fees}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        
        <div style={{height:"510px"}}>
            <div>
                <h1 align="center" style={{marginTop:"10px"}}>Available Doctors</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Doctor Name</th>
          <th>Deparment</th>
          <th>Age</th>
          <th>Shift Timing</th>
          <th>Fees</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </div>
        
        </>
    )
}
export default BookAppoinment