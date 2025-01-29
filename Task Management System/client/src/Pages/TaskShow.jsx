



import { useEffect, useState } from 'react';
import axios from 'axios';

const TaskShow=()=>{
    
     const [Data,setdata]=useState({});
    
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
     
    
    return(
        <>
        
        <div id='usersection11' >
                                <h4 align="center"style={{marginTop:"10px",marginBottom:"10px"}}>Your Task</h4>  
                               
                               <div style={{marginTop:"45px"}} align="center">
                                <div>
                                          <div>
                                            <h5>Task Title</h5>
                                          </div>
                                          <div>
                                            <h4>{Data.tasktitle}</h4>
                                          </div>
                                          <div>
                                            <h5>Description</h5>
                                          </div>
                                          <div>
                                            <h4>{Data.taskdescription}</h4>
                                          </div>
                                          <div>
                                            <h5>Completion Days</h5>
                                          </div>
                                          <div>
                                            <h4>{Data.completiondays}</h4>
                                          </div>
                                </div>
                               </div>
    
                            </div>
        
        </>
    )
}
export default TaskShow