import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const NavigationBar = (props) => {

    const {searchTerm, setSearchTerm} = props;

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <Navbar className="bg-body-tertiary justify-content-between" sticky="top">
            <Container>
          {/* <Navbar.Brand href="#">Countires of the world</Navbar.Brand> */}
          <h2>Countries of the world</h2>
        <Form inline>
          <Row>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                    value={searchTerm} 
                    onChange={handleChange}
                />
            </Col>
            <Col xs="auto">
            <Button variant="info" type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        </Container>
      </Navbar>
    )
}

export default NavigationBar;