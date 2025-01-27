import { message } from "antd";
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
            <tr>{key.name}</tr>
            <tr>{key.email}</tr>
            <tr>{key.designation}</tr>
            <tr>{key.empid.tasktitle}</tr>
            <tr>{key.empid.completiondays}</tr>
            <tr>{key.empid.taskdescription}</tr>
            </>
        )
    })
    return(
        <>
        <h1 align="center">Task Status</h1>
        <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Task Title</th>
          <th>Completion Days</th>
          <th>Task Description</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </>
    )
}
export default TaskStatus