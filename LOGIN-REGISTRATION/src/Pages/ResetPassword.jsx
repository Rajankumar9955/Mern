
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ResetPassword=()=>{
    return(
        <>
           <div align="center" style={{border:"2px solid black",borderRadius:"15px"}} >
            <div style={{width:"85%",marginLeft:"8px"}}>
            <h4 style={{marginTop:"20px",marginBottom:"15px"}}>Reset Password</h4>
        <FloatingLabel controlId="floatingPassword" label="Email" className="mb-1">
            <Form.Control type="email" placeholder="Email" name='email'   />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Old Password" className="mb-1">
          <Form.Control type="password" placeholder="Old Password" name='oldpassword'   />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="New Password" className="mb-1">
          <Form.Control type="password" placeholder="New Password" name='newpassword'   />
        </FloatingLabel>
      <Button variant="success" style={{marginBottom:"15px",marginTop:"15px"}}>Success</Button>
           </div>
           </div>
        </>
    )
}
export default ResetPassword;