

import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


const UserCreate=()=>{
    return(
        <>
         
         <div>
               <div id='firstdiv1' >
                  <div id='seconddiv' align="center">
      
                              <div id='modelss'>        
                                 <FloatingLabel id='formss1'
                                 controlId="floatingInput" label="Enter Name" className="mb-1">
                                 <Form.Control type="text" placeholder="name@example.com"  name='name' value={input.name} onChange={handleInput}/>
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Enter Email" id='formsss'className="mb-1">
                                 <Form.Control type="email" placeholder="Password"  name='password' value={input.password} onChange={handleInput}/>
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Enter Designation" id='formsss'className="mb-1">
                                 <Form.Control type="=text" placeholder="Password" />
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Enter Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password" />
                                 </FloatingLabel>

                                 <Button variant="success" id='btn' onClick={handleSubmit}>CREATE</Button>
                              </div>
                  </div>
               </div>
            </div>
        
        </>
    )
}
export default UserCreate