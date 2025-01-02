
import { useEffect, useState } from "react";
import axios from "axios";

import Table from 'react-bootstrap/Table';
const Display=()=>{
    const [myData,setMyData]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/students/datadisplay";
        axios.get(api).then((res)=>{
            setMyData(res.data);
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
        <h1 align="center">This is Display Section!</h1>
        <div style={{marginLeft:"40px"}}>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
        {ans}
      </thead>
      </Table>
      

     
        </div>
        </>
    )
}
export default Display;