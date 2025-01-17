import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
const Display=()=>{
    const [mydata,setMydata]=useState([]);

    const loadData=async()=>{
        let api="http://localhost:8000/user/userdisplay";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.authorname}</td>
                <td>
                    {key.books.map((key1)=>{
                        return(
                            <>
                            <p>{key1.booktitle} price: {key1.bookprice}</p>
                            </>
                     )
                    })
                    }
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
          <th>Author Name</th>
          <th>Book Details</th>
          <th></th>
        </tr>
        {ans}
      </thead>
      </Table>
        </div>
        </>
    )
}
export default Display