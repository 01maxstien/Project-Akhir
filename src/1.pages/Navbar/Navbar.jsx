import React, { Component } from 'react';
import Logo from '../Gambar/logopersipura.png'
import Sapersipura from '../Gambar/sapersipura.png'
import "./Navbar.css"
import { 
    MDBContainer, 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBNavItem, 
    MDBNavLink, 
    MDBIcon,
    MDBView ,
    MDBMask,
    MDBDropdown} from 'mdbreact';
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
                    <MDBNavbarToggler onClick={ this.toggleCollapse } />
                    <MDBCollapse isOpen = { this.state.collapse } navbar>
                        <MDBNavbarNav left >
                                <MDBNavItem >
                                    <MDBNavLink to="/" style={{color:"white",fontFamily:"Arial"}}>Home</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/news" style={{color:"white",fontFamily:"Arial"}}>News</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <div className="d-none d-md-inline"><b>Gallery</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/gallery/photo" style={{color:"black",fontFamily:"Arial"}}>Photo</MDBNavLink>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/gallery/video" style={{color:"black",fontFamily:"Arial"}}>Video</MDBNavLink>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <MDBNavItem>
                                <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <div className="d-none d-md-inline"><b>Profile</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/Profile/Tim" style={{color:"black",fontFamily:"Arial"}}>Tim</MDBNavLink>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                            <MDBNavLink to="/Profile/Squad" style={{color:"black",fontFamily:"Arial"}}>Squad</MDBNavLink>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
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
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <div className="d-none d-md-inline"><b>Options</b></div>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu className="dropdown-default">
                                            {
                                                this.props.userObj.role == 'admin'
                                                ?
                                                <>
                                                    <MDBDropdownItem>
                                                        <MDBNavLink to="/admin/dashboard" style={{color:"black",fontFamily:"Arial"}}>Dashboard Admin</MDBNavLink>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem>
                                                        <MDBNavLink style={{color:"black",fontFamily:"Arial"}} onClick={this.onBtnLogout}>Logout</MDBNavLink>
                                                    </MDBDropdownItem>
                                                </>
                                                :
                                                <>
                                                    <MDBDropdownItem>
                                                        <MDBNavLink to="" style={{color:"black",fontFamily:"Arial"}}>Cart</MDBNavLink>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem>
                                                        <MDBNavLink to="" style={{color:"black",fontFamily:"Arial"}}>History</MDBNavLink>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem divider/> 
                                                    <MDBDropdownItem>
                                                        <MDBNavLink style={{color:"black",fontFamily:"Arial"}} onClick={this.onBtnLogout}>Logout</MDBNavLink>
                                                    </MDBDropdownItem>
                                                </>
                                            }
                                           
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                      
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