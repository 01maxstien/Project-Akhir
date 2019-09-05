import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tim from '../Gambar/fototim.jpg'
import Mandala from '../Gambar/mandala.jpg'
import Background  from '../Gambar/backgroundhome.png'
import LogoTim from '../Gambar/logopersipura.png'
import './Home.css'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBView ,MDBMask} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';



    

class Home extends Component {
    render() {
        return (
        <div style={{marginTop:"20px"}}>
            <MDBView src={Background} >
              <MDBMask overlay="black-light" className="flex-center flex-column text-white text-center">
              <div className="banner-area" id="home">
                <div className="containertext">
                  <span className="text1">Welcome <br />To Our Website</span>
                  <span className="text2"></span>
                </div>
              </div>
              </MDBMask>
            </MDBView>
        </div> 
        
        );
    }
}

export default Home;