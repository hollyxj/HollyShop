import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap' 
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProductDetails } from '../actions/productActions'


const ProductScreen = () => {
    const { id } = useParams()
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
      }

    useEffect(() =>  {
        dispatch(listProductDetails(id))
    }, [ dispatch, id ])

    const navigate = useNavigate()

    const addToCartHandler = () => {
        navigate(`../cart/${id}?qty=${qty}`)
   };

    return<>
        <Link className='btn btn-secondary my-3' to='/'>
            Go Back
        </Link>
        {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Row>
            <Col className='product-page-section' md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col className='product-page-section' md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} 
                        text={`${product.numReviews} reviews`}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <b>Price: ${product.price}</b>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <em>About this item:</em><br/>{product.description}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col className='product-page-section'>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col className='product-page-section' >
                                    Price:
                                </Col>
                                <Col className='product-page-section'>
                                    <strong>${addDecimals(product.price)}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col className='product-page-section' >
                                    Status:
                                </Col>
                                <Col className='product-page-section'>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        {product.countInStock > 0 && (
                            <ListGroup.Item>
                                <Row>
                                    <Col className='product-page-section' >Qty</Col>
                                    <Col className='product-page-section' >
                                        <Form.Control 
                                            as='select'
                                            className='selectForm'  
                                            value={qty} 
                                            onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )}

                        <ListGroup.Item>
                            <Button 
                                onClick={addToCartHandler}
                                className='btn-lg' 
                                type='button'
                                disabled={product.countInStock === 0}
                            >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

        )}
        
    </>
}

export default ProductScreen
