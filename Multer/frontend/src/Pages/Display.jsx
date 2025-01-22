import axios from "axios";
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';



const Display=()=>{
    const [data,setMydata]=useState([]);

    const loadData= async()=>{
         let api="http://localhost:8000/multerexample/displaydata";
         try {
                const response=await axios.get(api);
                console.log(response.data);
                setMydata(response.data);
         } catch (error) {
            console.log(error);
         }
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=data.map((key)=>{
        return(
            <>
                 <tr>
                     <td>
                        <img src={`http://localhost:8000/uploads/${key.imgname}`} alt="" style={{height:"100px",width:"100px"}} />
                     </td>
                     <td>{key.rollno}</td>
                     <td>{key.name}</td>
                     <td>{key.city}</td>
                 </tr>   
            </>
        )
    })
    return(
        <>
         <Table striped bordered hover>
      <thead>
        <tr>
             <th>Photo</th>
             <th>Rollno</th>
             <th>Name</th>
             <th>City</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </>
    )
}
export default Display;