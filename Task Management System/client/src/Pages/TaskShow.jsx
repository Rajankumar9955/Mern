



import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TaskShow=()=>{
    
     const [Data,setdata]=useState([]);
    
        const loadData=async()=>{
           let api="http://localhost:8080/users/taskShow";
           try {
             const response=await axios.post(api, {email:localStorage.getItem("useremail")})
             setdata(response.data);
             console.log(response.data);
           } catch (error) {
             console.log(error)
           }
        }
        useEffect(()=>{

            loadData()

    },[])
     let sno=0;
    const ans=Data.map((key)=>{
      sno++
      return(
        <>
                   <tr>
                    <td>{sno}</td>
                    <td>{key.tasktitle}</td>
                    <td>{key.taskdescription}</td>
                    <td>{key.completiondays}</td>
                   </tr>
        </>
      )
    })
    return(
        <>
        
        <div id='usersection11' >
           <h4 align="center"style={{marginTop:"10px",marginBottom:"10px"}}>Your Task</h4>  
                               
           <Table striped bordered hover variant="light"  style={{width:"100%"}}>
      <thead>
        <tr>
          <td>Sno</td>
          <th>Task Title</th>
          <th>Description</th>
          <th>Completion Days</th>
        </tr>
        {ans}
      </thead>
      </Table>            
    
        </div>
        
        </>
    )
}
export default TaskShow