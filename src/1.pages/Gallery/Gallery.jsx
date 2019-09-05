import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact";
import './Gallery.css'
import GalleryPhoto from './Foto/Foto'
import GalleryVideo from './Video/Video'

class Gallery extends Component {
  state = {
    activeItemOuterTabs: "1",
    activeItemInnerPills: "1",
  };

  toggleOuterTabs = tab => e => {
    if (this.state.activeItemOuterTabs2 !== tab) {
      this.setState({
        activeItemOuterTabs: tab
      });
    }
  };

  toggleInnerPills = tab => e => {
    if (this.state.activeItemInnerPills !== tab) {
      this.setState({
        activeItemInnerPills: tab
      });
    }
  };

  render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" 
        style={{background:" linear-gradient(to left, rgba(128,2,2,1) 100%, rgba(0,0,0,1) 50%, rgba(128,2,2,1) 100%",marginTop:"130px"}}>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemOuterTabs === "1"} onClick={this.toggleOuterTabs("1")} role="tab" style={{color:"white"}} >
              <MDBIcon icon="camera" /> Photo
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#" active={this.state.activeItemOuterTabs === "2"} onClick={this.toggleOuterTabs("2")} role="tab" style={{color:"white"}} >
              <MDBIcon icon="video" /> Video
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent className="card mb-4" activeItem={this.state.activeItemOuterTabs}>
        <MDBTabPane tabId="1" role="tabpanel">
            <MDBRow>
              <GalleryPhoto/>
            </MDBRow>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <MDBRow>
                <GalleryVideo/>
            </MDBRow>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default Gallery