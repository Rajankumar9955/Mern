

import Button from 'react-bootstrap/Button';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const Home=()=>{
    return(
        <>
            <div>
               <div id='firstdiv' align="center">
                  <div id='seconddiv' align="center">
      
                              <div id='modelss'>        
                                 <FloatingLabel id='formss'
                                 controlId="floatingInput" label="Email address" className="mb-1">
                                 <Form.Control type="email" placeholder="name@example.com" />
                                 </FloatingLabel>
                                 <FloatingLabel controlId="floatingPassword" label="Password" id='formsss'className="mb-1">
                                 <Form.Control type="password" placeholder="Password" />
                                 </FloatingLabel>

                                 <Form.Select aria-label="Default select example" id='options'className="mb-2">
                                  <option>Select Option</option>
                                  <option value="1">ADMIN</option>
                                  <option value="2">USER'S</option>
                                 </Form.Select>

                                 <Button variant="success" id='btn'>Log-in</Button>
                              </div>
                  </div>
               </div>
            </div>
        </>
    )
}
export default Home