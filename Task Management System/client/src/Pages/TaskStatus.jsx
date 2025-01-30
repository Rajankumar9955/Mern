// import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
{/* --------------------------- This is Task Details inside the table------------- */}
               
               <details>
               <summary>Task Details</summary>

        <Table striped bordered hover size="sm">
           <thead>
                    <tr>
                        <th>Tasktitle</th>
                        <th>Completiondays</th>
                        <th>Description</th>
                    </tr>
         </thead>
         <tbody>
                    <tr>
                    <td>{key.tasktitle}</td>
                    <td>{key.completiondays}</td>
                    <td>{key.taskdescription}</td>
                    </tr>
        </tbody>
                </Table>
               </details>
        {/* --------------------------------------- */}
               
               <td><Button variant="warning" style={{fontWeight:"bolder"}}>{key.report}</Button></td>
             
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
          <th>Task Details</th>
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