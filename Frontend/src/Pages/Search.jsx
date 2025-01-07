

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const [carName,setcarName]=useState("");

    const [mydata,setMyData]=useState([]);
    const handleSubmit=()=>{
        let api="http://localhost:8000/cars/datasearch";
        axios.post(api,{carName:carName}).then((res)=>{
            setMyData(res.data);
        })
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.car_name}</td>
                <td>{key.car_model}</td>
                <td>{key.fuel_type}</td>
                <td>{key.launch_data}</td>
                <td>{key.car_mileage}</td>
                <td>{key.car_price}</td>
            </tr>
            </>
        )
    })
    return(
        <>
           <h1 align="center">Search Here!!</h1>
           <div align="center" id='forms'>
       <FloatingLabel controlId="floatingInput" label="Car Name" className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" value={carName} onChange={(e)=>{setcarName(e.target.value)}} />
      </FloatingLabel>
      <Button variant="success" onClick={handleSubmit}>Save</Button>
      </div>
      <hr size="2" />
      <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Car Name</th>
          <th>Car Model</th>
          <th>Fuel Type</th>
          <th>Launch Date</th>
          <th>Mileage</th>
          <th>Price</th>
        </tr>
        {ans}
      </thead>
      </Table>
            </div>
        </>
    )
}
export default Search;