import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className="LoginPage">
        <Container className="d-flex justify-content-center py-5">
            <div className="LoginContainer d-flex align-items-center">
                <Card style={{ width: '18rem' }} className="LoginCard">
                   <Card.Body>
                    <Row>
                        <Col>
                            <Form classname="LoginForm d-flex align-items-center">
                                <Form.Group className="mb-3" controlId="LoginEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="LoginPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Row className="d-flex align-items-center"> 
                                    <Col>
                                        <Button  type="submit" className="btn-Login"> Submit</Button>
                                    </Col>
                                    <Col>
                                        <Card.Link href="/Register" className="text-login">Create Account</Card.Link>
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

export default Login