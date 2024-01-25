import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const Cart = () => {
  const AccessToken = Cookies.get('jwt_token')
  if (AccessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  )
}
export default Cart
