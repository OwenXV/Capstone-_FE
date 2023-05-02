import Form from 'react-bootstrap/Form'
import { Row, Col,Container } from "react-bootstrap"
import buy from '../assets/buy.png'


const Register = () => {
  return (
    <div className="regPage">
      <Container>
        <Row>
          <Col>
            <img src={buy} alt="photo" height='800px'/>
          </Col>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Register