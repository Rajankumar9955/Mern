


import { Link } from "react-router-dom"
const Menu=()=>{
    return(
        <>
        
       <div>
            <div style={{height:"40px", width:"60px",marginLeft:"40px"}}>
                
                <button style={{marginTop:"60px",width:"120px",height:"40px"}}><Link to="home">Home</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="home">Home</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="home">Home</Link></button>
                <button style={{marginTop:"10px",width:"120px",height:"40px"}}><Link to="home">Home</Link></button>
            </div>
       </div>
        
        </>
    )
}
export default Menu