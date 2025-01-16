


import { Link } from "react-router-dom"
const Menu=()=>{
    return(
        <>
        
       <div>
            <div style={{height:"40px", width:"60px",marginLeft:"40px"}}>
                
                <button style={{marginTop:"60px",width:"120px",height:"60px",borderRadius:"15px"}} id="btn"><Link to="home">Home</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"60px",borderRadius:"15px"}} id="btn"><Link to="bookappoinment">Appoinment</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"60px",borderRadius:"15px"}} id="btn"><Link to="display">Display</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"60px",borderRadius:"15px"}} id="btn"><Link to="contact">Contact</Link></button>
                <div style={{marginTop:"100px",width:"180px",height:"40px",marginLeft:"14px"}} >          
                    <button id="btn1"><Link to="adddoctor">Add Doctor</Link></button>
                </div>
            </div>
           
       </div>
      
        </>
    )
}
export default Menu