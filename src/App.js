import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import Store from './1.pages/Store/Store';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './1.pages/Navbar/Navbar';
import Auth from './1.pages/Auth/Auth';
import Cookie from 'universal-cookie'
import {connect} from 'react-redux'
import {keepLogin} from './Redux/1.actions'
import Footer from './1.pages/Footer/Footer';
import Home from './1.pages/Home/Home'
import AdminDashBoard from './1.pages/Admin/AdminDashboard';
import ProductDetails from './1.pages/ProductDetails/ProductDetails';
import Cart from './1.pages/Cart/Cart'
import News from './1.pages/News/News'
import Gallery from './1.pages/Gallery/Photo'
import Video from './1.pages/Gallery/Video'


let cookieObj = new Cookie()
class App extends Component {

  componentDidMount(){
    let cookieVar = cookieObj.get('userData')
    if(cookieVar){
      this.props.keepLogin(cookieVar)
    }
  }

  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Store} path='/store' exact />
          <Route component={ProductDetails} path='/product-details/:id' exact />
          <Route component={AdminDashBoard} path='/admin/dashboard' exact />
          <Route component={Cart} path='/cart' exact />
          <Route component={Auth} path='/auth' exact />
          <Route component={News} path='/news' exact />
          <Route component={Gallery} path='/gallery/photo' exact />
          <Route component={Video} path='/gallery/video' exact />
        </Switch>
        <Footer/>
      </div>
    )
  }
}

export default connect(null, {keepLogin})(withRouter(App))
