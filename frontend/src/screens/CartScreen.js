import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap' 
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = () => {
  const { productId } = useParams()
  const location = useLocation()
  const qty = new URLSearchParams(location.search).get('qty')

  console.log(qty)

  return (
    <div>
        Cart Screen
    </div>
  )
}

export default CartScreen
