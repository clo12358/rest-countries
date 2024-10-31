import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
    const [countriesList, setCountriesList] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const { searchTerm } = props;

    // Fetch all countries only once when the component mounts
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((response) => {
                setCountriesList(response.data);
                setFilteredCountries(response.data); // Initialize filtered list
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Filter countries whenever searchTerm changes
    useEffect(() => {
        if (searchTerm) {
            setFilteredCountries(
                countriesList.filter((country) =>
                    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            setFilteredCountries(countriesList); // Reset to all countries if searchTerm is empty
        }
    }, [searchTerm, countriesList]);

    let countryCards = filteredCountries.map((country, index) => {
        return (
            <Col key={index} md={4} className="mb-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: '10rem' }} src={country.flags.png} alt={`${country.name.common}`} />
                    <Card.Body>
                        <Card.Title className='font-colour bold'>{country.name.common}</Card.Title>
                        <Link to={`/country/${country.name.common}`} className='text'>
                            <Button variant="info" size="sm">View More</Button>
                        </Link>
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