// import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Spin } from "antd";
const TaskStatus=()=>{
    const [Data,setData]=useState([]);
    const [isVisible,setisVisible]=useState(true);
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

    useEffect(()=>{
        setTimeout(() => {
            setisVisible(false)
        }, 1500);
        setisVisible(true)
    },[])
    let sno=0;
    const ans=Data.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.empid.name}</td>
                <td>{key.empid.email}</td>
                <td>{key.empid.designation}</td>
{/* --------------------------- This is Task Details inside the table------------- */}
               
               <details>
               <summary>Details</summary>

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
                <td>{key.taskstatus}</td>
               <td><Button variant="warning" style={{fontWeight:"bolder"}}>{key.report}</Button></td>
             
            </tr>
            </>
        )
    })
    return(
        <>
      {isVisible?(          
        <div align="center" style={{marginTop:"100px"}}>
            <Spin tip="Loading" size="large"></Spin>
        </div>
        ):(
        <div id="formstatus">
        <Table striped bordered hover variant="light"  style={{width:"100%"}}>
        <thead>
        <tr>
          <th>Sno</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Task Details</th>
          <th>Task Status</th>
          <th>Report</th>
        </tr>
        
        </thead>
        <tbody>
        {ans}
        </tbody>
        </Table>
        </div>
              )}
                
                </>
            )
        }
export default TaskStatus