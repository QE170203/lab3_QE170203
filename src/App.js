import logo from './logo.svg';
import './App.css';
import { Container, Row, Navbar, Nav, NavDropdown, Form, Button, Carousel, CarouselImage, Col, Modal, ListGroup, Card } from "react-bootstrap";
import img1 from './images/pizza1.jpg';
import img2 from './images/pizza2.jpg';
import img3 from './images/pizza3.jpg';
import menu1 from './images/menu1.jpg';
import menu2 from './images/menu2.jpg';
import menu3 from './images/menu3.jpg';
import menu4 from './images/menu4.jpg';
import { useState } from 'react';
import { useCart } from './component/useCart';
function App() {
  const { cartItems, handleBuyClick, handleQuantityChange, totalItemsInCart } = useCart();
  const [showCart, setShowCart] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
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
                <Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Nav>
                <Form className="d-flex">

                  <Button variant="primary" onClick={handleCartToggle}>Item: {totalItemsInCart}
                  </Button>
                  <Modal show={showCart} onHide={handleCartToggle}>
                    <Modal.Header closeButton>
                      <Modal.Title>Using Grid in Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {cartItems.length === 0 ? (
                        <p>No item, please add some.</p>
                      ) : (
                        <ListGroup>
                          {cartItems.map((item) => (
                            <ListGroup.Item key={item.name}>
                              <Row>
                                <Col xs={3}>{item.name}</Col>
                                <Col xs={3}>{item.quantity}</Col>
                                <Col xs={3}>
                                  <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => handleQuantityChange(item.name, 1)}
                                  >
                                    +
                                  </Button>{' '}
                                </Col>
                                <Col xs={3}>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleQuantityChange(item.name, -1)}
                                  >
                                    -
                                  </Button>
                                </Col>
                              </Row>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      )}
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleCartToggle}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Form>
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
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button onClick={() => handleBuyClick('Card title 1')} variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button onClick={() => handleBuyClick('Card title 2')} variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu3} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button onClick={() => handleBuyClick('Card title 3')} variant="primary">Buy</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={menu4} />
                <Card.Body>
                  <Card.Title>Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button onClick={() => handleBuyClick('Card title 4')} variant="primary">Buy</Button>
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