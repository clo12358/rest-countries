import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {

    const [countriesList, setCountriesList] = useState([]);
    const {searchTerm} = props;

    // useEffect(() => {
    //     axios.get(`https://restcountries.com/v3.1/all`)
    //     .then(response => {
    //         setCountriesList(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }, );

    useEffect(() => {
        if(!searchTerm){
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                console.log(response.data);
                setCountriesList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }

        setCountriesList(countriesList.filter((country) => {
            return country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        }))

    }, [searchTerm]);

    

    let countryCards = countriesList.map((country, index) => {
        return (
            <Col key={index} md={4} className="mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '10rem' }} src={country.flags.png} alt={`${country.name.common}`} />
                    <Card.Body>
                        <Card.Title>{country.name.common}</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button variant="primary" size="sm">View More</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        );
    });

    return (
        <div className="container">
            <Row>
                {countryCards}
            </Row>
        </div>
    );
}

export default Home;