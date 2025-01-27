
import axios from "axios";
import { useEffect, useState } from "react"

import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { message } from "antd";
const  BookAppoinment=()=>{
    const navigate=useNavigate();
    const [username, setUserName]=useState("");
    const [Useremail, setUserEmail]= useState("");

    useEffect(()=>{
        if(localStorage.getItem("patientname")==null)
        {
            navigate("/login");
        }
        else
        {
            setUserName(localStorage.getItem("patientname"));
            setUserEmail(localStorage.getItem("patientemail"));
        }
      
    },[])

    const logout=()=>{
        localStorage.clear();
        message.success("Your are logged-Out MR : "+username);
        navigate("/login");
    }


    
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
                <td>₹ {key.fees}</td>
                <td>
                <Button variant="success" ><a href="#" onClick={()=>{navigate(`/book/${key._id}`)}} style={{color:"white"}}>Book Now</a></Button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        
        <div style={{height:"510px"}}>
        <div align="center" style={{marginTop:"15px"}}>
            <h3>Welcome : {username}</h3>
            <h4>Email : {Useremail}</h4>
            <Button variant="danger" onClick={logout} >Log-Out</Button>
        </div>

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
          <th>Book Appoinment</th>
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