// import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const TaskStatus=()=>{
    const [Data,setData]=useState([]);

    const loadData=async()=>{
        try {
            let api="http://localhost:8080/users/taskstatus";
            const response=await axios.get(api);
            setData(response.data);
            console.log(Data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        loadData()
    },[])

    const ans=Data.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empid.name}</td>
                <td>{key.empid.email}</td>
                <td>{key.empid.designation}</td>

                <td>{key.tasktitle}</td>
                <td>{key.completiondays}</td>
               <div id="descript">
                 <td style={{width:"5000px"}}>{key.taskdescription}</td>
               </div>
               <td>sdf</td>
             
            </tr>
            </>
        )
    })
    return(
        <>
  
        <div id="formstatus">
        <Table striped bordered hover variant="light"  style={{width:"100%"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Task Title</th>
          <th>Completion Days</th>
          <th style={{width:"5000px"}}>Task Description</th>
          <th>Task Status</th>
        </tr>
        {ans}
      </thead>
      </Table>
      </div>
        </>
    )
}
export default TaskStatus