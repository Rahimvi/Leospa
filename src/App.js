import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import AddService from './component/Home/AddService/AddService';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';
import { createContext, useState } from 'react';
import Order from './component/Dashboard/Order/Order';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Login from './component/Login/Login/Login';
import OrderList from './component/Dashboard/OrderList/OrderList';
import CustomerReview from './component/Dashboard/CustomerReview/CustomerReview';
import AllOrders from './component/Dashboard/AllOrders/AllOrders';
import AddAdmin from './component/Dashboard/AddAdmin/AddAdmin';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute path="/order/:orderId">
            <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/order">
            <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/orderList">
            <OrderList></OrderList>
        </PrivateRoute>
        <PrivateRoute path="/allOrder">
            <AllOrders></AllOrders>
        </PrivateRoute>
        <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <CustomerReview></CustomerReview>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
