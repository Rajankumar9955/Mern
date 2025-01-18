import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Display=()=>{
    const [data,setData]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/user/datadisplay";
        const response=await axios.get(api);
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
                <td>{key.imgname}</td>
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
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Images</th>
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