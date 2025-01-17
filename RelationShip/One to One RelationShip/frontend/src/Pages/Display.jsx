import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
const Display=()=>{
    const [data,setData]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/user/userdisplay";
        const response=await axios.get(api);
         setData(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

    const sno=0;
    const ans=data.map((key)=>{
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.firstname} {key.lastname}</td>
                <td>{key.userid.email}</td>
                <td>{key.userid.username}</td>
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
          <th>Name</th>
          <th>Email</th>
          <th>UserId</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </div>
        </>
    )
}
export default Display;