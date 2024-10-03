import logo from './logo.svg';
import './App.css';
import { Container, Row, Navbar, Nav, NavDropdown, Form, Button, Carousel, CarouselImage, Col, Card, Modal, show, handleClose, handleShowe, Badge, ButtonGroup, ButtonToolbar, cardSize, increaseSize, decreaseSize } from "react-bootstrap";
import img1 from './images/pizza1.jpg';
import img2 from './images/pizza2.jpg';
import img3 from './images/pizza3.jpg';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';
import { useState } from 'react';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [cardSize, setCardSize] = useState(200); // Initial size is 200px

  const increaseSize = () => {
    setCardSize(prevSize => prevSize + 20); // Increase size by 20px
  };

  const decreaseSize = () => {
    setCardSize(prevSize => (prevSize > 20 ? prevSize - 20 : prevSize)); // Decrease size by 20px but not below 20px
  };
  return (
    <>
      <Container>
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    Link
                  </Nav.Link>
                </Nav>
                <Button variant="primary" onClick={handleShow}>
                  Item: <Badge bg="secondary">0</Badge>

                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Using Gird in Modal</Modal.Title>
                  </Modal.Header>
                  <div style={{ width: `${cardSize}px`, border: '1px solid black', padding: '10px', transition: 'width 0.3s ease' }}>
                    <ButtonToolbar className="w-100">
                      <div className="d-flex justify-content-between align-items-center w-100">
                        <Modal.Body className="mb-0">Card Title 1 2</Modal.Body>
                        <ButtonGroup>
                          <Button className="mx-2" onClick={increaseSize} style={{ backgroundColor: 'red', color: 'white' }}>+</Button>
                          <Button className="mx-2" onClick={decreaseSize} style={{ backgroundColor: 'blue', color: 'white' }}>-</Button>
                        </ButtonGroup>
                      </div>
                    </ButtonToolbar>
                  </div>

                  <Modal.Body>Card Title 2  3</Modal.Body>
                  <Modal.Body>Card Title 3  3</Modal.Body>
                  <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img src={img1} text="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img2} text="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={img3} text="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Row>
        <Row>
          <Row className='mt-5'>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu1} />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu2} />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu3} />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu4} />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>

    </>
  );
}

export default App;