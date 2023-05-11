import { useState } from 'react'
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap'



const Register = () => {
    const [firstName, setFirstName] =useState('')
    const [LastName, setLastName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const [passwordConfirmation, setPasswordConfirmation] =useState('')

    function register(e){
        e.preventDefault();
        console.log(firstName,LastName,email, password,passwordConfirmation)
    }
  return (
    <div className="RegisterPage">
        <Container className="d-flex justify-content-center py-5">
            <div className="RegisterContainer d-flex align-items-center">
                <Card style={{ width: '18rem' }} className="RegisterCard">
                   <Card.Body>
                    <Row>
                        <Col>
                            <Form onSubmit={register} className="RegisterForm align-items-center">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="RegisterFName">
                                        <Form.Control type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)} placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="RegisterLName">
                                        <Form.Control type="text" value={LastName} onChange={(e)=> setLastName(e.target.value)} placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="LoginEmail">
                                    <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="RegisterPassword">
                                    <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="RegisterPasswordConfirm">
                                    <Form.Control type="passwordconfirm" value={passwordConfirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} placeholder="Confirm Password" />
                                </Form.Group>
                                <Row className="d-flex align-items-center"> 
                                    <Col>
                                        <Button  type="submit" value= "Register" className="btn-Register"> Sign up</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                   </Card.Body>
                </Card>
            </div>
        </Container>
           
    </div>
  )
}

export default Register