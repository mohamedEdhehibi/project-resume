import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/productlist/${params.id}`);
                setProduct(response.data.product);
                console.log(response.data.product); // This will log the updated state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='detailcontent'>
            <Container style={{
                border: 'solid 3px', borderRadius: '15px', boxShadow: '20px'}}>

                <Row>

                    {/* <Col><img width='250' src={product.name} alt="" /></Col> */}
                    <Col className='mt-5'><h4>{product.name}</h4></Col>
                    <Col className='mt-5'><h4>{product.price}</h4></Col>
                </Row>
            </Container>
            {/* <Card className='cardcontent' style={{
                width: 300
            }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </div>
    )
}

export default ProductDetails
