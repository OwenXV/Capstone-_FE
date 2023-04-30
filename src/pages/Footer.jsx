import { Row, Col,Container } from "react-bootstrap"



function Footer(){
    return(
            <div className="pt-5 mx-0" id="footer-sec">
                <Container className="px-5">
                    <Row xs="auto">
                        <Col className="socmed-icons"><i className="bi bi-facebook"></i></Col>
                        <Col className="socmed-icons"><i className="bi bi-instagram"></i></Col>
                        <Col className="socmed-icons"><i className="bi bi-twitter"></i></Col>
                        <Col className="socmed-icons"><i className="bi bi-youtube"></i></Col>
                    </Row>
                    <Row xs={2} sm={2} md={4} lg={4} className="pt-3">
                        <Col><p>Home</p></Col>
                        <Col><p>Investor</p></Col>
                        <Col><p>Gift Cards</p></Col>
                        <Col><p>Corporate Information</p></Col>
                        <Col><p>Jobs</p></Col>
                        <Col><p>Privacy</p></Col>
                        <Col><p>Newsletter</p></Col>
                        <Col><p>Contact Us</p></Col>
                        
                    </Row>
                    <Row className="pt-2">
                        <Col>
                        <p className="fw-lighter text-start">©All Rights Reserved. Benta PH, Inc.</p>
                        </Col>
                      
                    </Row>
                </Container>
            </div>
    
    )
}

export default Footer