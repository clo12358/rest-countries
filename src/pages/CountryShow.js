import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CountryShow = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const currenciesToCommaSeparatedString = (currs) => {
        if (!currs) {
            return "None";
        }
        return Object.values(currs).map(curr => curr.name).join(", ");
    };

    useEffect(() => {
        // Fetch country data
        axios
            .get(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => {
                setCountry(response.data[0]);
            })
            .catch((error) => console.log(error));
    }, [countryName]);

    if (!country) return <p>Loading...</p>;

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter" className='bold'>
                        Coats of Arms
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image alt={`${country.name.common} coat of arms`} src={country.coatOfArms.png} style={{ height: '20rem', width: '20rem' }} />
                </Modal.Body>
                <Modal.Footer className='text'>
                    <Button variant="info" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <Container className='font-colour'>
            <Row>
                <Col>
                    <Image alt={`${country.name.common} flag`} src={country.flags.svg} style={{ height: '20rem', width: '30rem' }} rounded fluid />
                </Col>
                <Col className='flex'>
                    <h1 className='bold'>{country.name.common}</h1>
                    {/* Official Name */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Official Name:</span>
                        <span className="fs-6 text">{country.name.official}</span>
                    </div>
                    {/* Capital */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Capital:</span>
                        <span className="fs-6 text">{country.capital}</span>
                    </div>
                    {/* Time Zone */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Time Zone:</span>
                        <span className="fs-6 text">{country.timezones}</span>
                    </div>
                    {/* Population */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Population:</span>
                        <span className="fs-6 text">{country.population} people</span>
                    </div>
                    {/* Currency */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Currency:</span>
                        <span className="fs-6 text">{currenciesToCommaSeparatedString(country.currencies)}</span>
                    </div>
                    {/* Region */}
                    <div className="d-flex align-items-center">
                        <span className="fs-6 bold me-2">Region:</span>
                        <span className="fs-6 text">{country.region}</span>
                    </div>
                    {/* Coats of Arms Button */}
                    {country.coatOfArms?.png && (
                        <div className='mt-4 text'>
                            <Button variant="info" onClick={() => setModalShow(true)}>
                                View Coats of Arms
                            </Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    )}
                </Col>
            </Row>
            <Row className="mt-4">
                <h4 className='bold'>Google Map Location:</h4>
                <iframe
                    title={`${country.name.common} Map`}
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAw_UERlsU6i7zkUoNXn-SLTjzvNggOJ8Y&q=${encodeURIComponent(country.name.common)}`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Row>
        </Container>
    );
}

export default CountryShow;
