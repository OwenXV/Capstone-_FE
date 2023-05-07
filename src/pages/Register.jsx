import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import regphoto from '../assets/regphoto.jpg'


const Register = () => {
  return (
    <div className="RegisterPage">
        <Container className="d-flex justify-content-center py-5">
            <div className="RegisterContainer d-flex align-items-center">
                <Card style={{ width: '18rem' }} className="RegisterCard">
                   <Card.Body>
                    <Row>
                        <Col>
                            <Form classname="RegisterForm d-flex align-items-center">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="RegisterFName">
                                        <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="RegisterLName">
                                        <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="LoginEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="LoginPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Row className="d-flex align-items-center"> 
                                    <Col>
                                        <Button  type="submit" className="btn-Register"> Sign up</Button>
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