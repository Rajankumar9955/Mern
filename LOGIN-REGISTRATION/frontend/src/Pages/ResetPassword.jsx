
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ResetPassword=()=>{
    return(
        <>
           <div align="center">
        <FloatingLabel controlId="floatingPassword" label="Email" className="mb-1">
            <Form.Control type="email" placeholder="Email" name='email'   />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Old Password" className="mb-1">
          <Form.Control type="password" placeholder="Old Password" name='oldpassword'   />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="New Password" className="mb-1">
          <Form.Control type="password" placeholder="New Password" name='newpassword'   />
        </FloatingLabel>
      <Button variant="success" >Success</Button>
           </div>
        </>
    )
}
export default ResetPassword;