import React, { Component } from 'react';
import Logo from '../Gambar/logopersipura.png'
import Sapersipura from '../Gambar/sapersipura.png'
import "./Navbar.css"
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBView ,MDBMask} from 'mdbreact';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Cookie from 'universal-cookie'
import { resetUser } from "./../../Redux/1.actions";

let cookieObj = new Cookie()
class NavbarComp extends Component {
    state = {
        collapse: false
      };
      
      toggleCollapse = () => {
        this.setState({ collapse: !this.state.collapse });
      }

    onBtnLogout = () => {
        cookieObj.remove('userData')
        this.props.resetUser()
    }

    render() {
        return (
            <div>
                <MDBNavbar expand="md" style={{background:" linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(128,2,2,1) 100%, rgba(0,0,0,1) 100%"}} dark expand="md" scrolling fixed="top">
                    <MDBNavbarBrand href="/">
                        <img src={Logo} style={{width:"50px"}} alt="LOGO"/>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={ this.onClick } />
                    <MDBCollapse isOpen = { this.state.collapse } navbar>
                        <MDBNavbarNav left >
                                <MDBNavItem >
                                    <MDBNavLink to="/" style={{color:"white",fontFamily:"Arial"}}>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/news" style={{color:"white",fontFamily:"Arial"}}>News</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/gallery" style={{color:"white",fontFamily:"Arial"}}>Gallery</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/profile" style={{color:"white",fontFamily:"Arial"}}>Profile</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/store" style={{color:"white",fontFamily:"Arial"}}>Store</MDBNavLink>
                                </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            {
                                this.props.userObj.username !== '' && this.props.userObj.role !== ''
                                ?
                                <>
                                    <MDBNavItem>
                                        <MDBNavLink style={{color:"white"}}>{this.props.userObj.username}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink style={{color:"white"}}>{this.props.userObj.role}</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink  style={{color:"white"}} onClick={this.onBtnLogout}>Logout</MDBNavLink>
                                    </MDBNavItem>
                                    
                                </>
                                :
                                <>
                                    <MDBNavItem>
                                         <MDBNavLink to='/auth' style={{color:"white"}}>  
                                            <MDBIcon icon="sign-in-alt" style={{height:"50px",marginRight:"10px"}}/> 
                                            <img src={Sapersipura} style={{width:"150px"}} alt="LOGO"/> 
                                         </MDBNavLink>
                                    </MDBNavItem>
                                </>
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj : state.user
    }
}

export default connect(mapStateToProps, {resetUser})(NavbarComp)