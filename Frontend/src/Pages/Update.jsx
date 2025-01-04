
import { useState,useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import dltimg from "../Images/dltimg.png"
import edtimg from "../Images/editimg.jpg"
const Update=()=>{
    const [data,setData]=useState([]);

    const loadData=()=>{
        let api="http://localhost:8000/cars/datadisplay";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    
    const mydel=(id)=>{
        let api="http://localhost"
    }

    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.car_name}</td>
                <td>{key.car_model}</td>
                <td>{key.fuel_type}</td>
                <td>{key.launch_date}</td>
                <td>{key.car_mileage} km/L</td>
                <td>₹ {key.car_price}</td>
                <td>
                    <a href="">
                        <img src={edtimg} alt="" className="update" />
                        </a>
                </td>
                <td>
                     <a href="#" onClick={()=>{mydel(key._id)}}>
                        <img src={dltimg} alt="" className="update"/>
                        </a>
                </td>
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
          <th>Car Name</th>
          <th>Car Model</th>
          <th>Fuel Type</th>
          <th>Launch Date</th>
          <th>Mileage</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </>
    )
}
export default Update;