import React, { useEffect } from 'react'
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match }) => {
  const { id } = useParams()
  const productId = id
  const history = useNavigate()
  const location = useLocation()
  // const qty = location.search ? Number(location.search.split("=")[1]) : 1
  const qty = new URLSearchParams(location.search).get('qty')

  console.log(`id: ${id}`)
  console.log(`qty: ${qty}`)

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  console.log(`cartItems: ${cartItems}`)

  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? ( 
          // Check if there's anything in the cart
          <Message>
           {/* If cart is empty, show a message with a link to go back to home */}
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                {/* All 'item' fields are assigned in cartActions.js */}
                <Row>
                  <Col md={2}>
                    {/* Show the product image */}
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    {/* Name of the product along with a Link to it's product page */}
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  {/* Show the price of the product */}
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    {/* Update quanity when dropdowns change */}
                    <Form.Control
                      as='select'
                      // Update quantity the drop down value 
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {/* Show item count in stock */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    {/* Delete item from the cart */}
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      {/* Show trashcan icon to remove an item from the cart */}
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card> 
          {/* SubTotal Card */}
          <ListGroup variant='flush'>
            <ListGroup.Item>
              {/* Show the subtotal */}
              <h2>
                {/* Add current item to accumulator */}
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              {/* Show price */}
              $ { cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)} 
                {/* Show 2 decimals of price */}
            </ListGroup.Item>
            <ListGroup.Item>
              {/* Checkout button */}
              <Button
                type='button'
                className='btn-block'
                // Disable if nothing in the cart
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen