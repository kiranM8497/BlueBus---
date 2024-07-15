
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import RegisterScreen from './screens/RegisterScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import FinalScreen from './screens/FinalScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import Myorders from './screens/MyordersScreen';



function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
      <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
        <Link className="brand" to="/">
            Home
            </Link>
        </div>
             
        <div>
        <Link className="redbus">
            Red Bus
            </Link>
        </div>
        <div>
        <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/myorders">My orders</Link>
                  </li>
                  <li>
                    <Link to="/profile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}

   {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist">Buses</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Customers</Link>
                  </li> 
                </ul> 
              </div>
            )}

        </div>
      </header>
      <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path="/product/:id" component={ProductScreen} exact></Route>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/signin" component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/shipping" component={ShippingAddressScreen}></Route>
      <Route path="/placeorder" component={PlaceOrderScreen}></Route>
      <Route path="/FinalScreen" component={FinalScreen}></Route>     
      <Route path="/forgotPassword" component={ForgetPasswordScreen}></Route>
      <Route path="/order/:id" component={OrderScreen}></Route>

      <PrivateRoute
            path="/profile"
            component={ProfileScreen}
      ></PrivateRoute>
      <PrivateRoute
            path="/myorders"
            component={Myorders}
      ></PrivateRoute>
      
      <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>

          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>

   <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>   
      </main>
      <footer className="row center">Contact Us : 9898989898 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Email : redbus@gmail.com</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;