


import { Link } from "react-router-dom"
const Menu=()=>{
    return(
        <>
        
       <div>
            <div style={{height:"40px", width:"60px",marginLeft:"40px"}}>
                
                <button style={{marginTop:"60px",width:"120px",height:"40px"}}><Link to="home">Home</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="bookappoinment">Appoinment</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="display">Display</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="contact">Contact</Link></button>
                <div style={{marginTop:"100px",width:"180px",height:"40px",marginLeft:"14px"}}>                
                    <button ><Link to="adddoctor">Add Doctor</Link></button>
                </div>
            </div>
           
       </div>
      
        </>
    )
}
export default Menu