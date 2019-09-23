import React from 'react';
import BankPapua from '../Gambar/LogoBankPapua.png'
import Freeport from '../Gambar/PT Freeport Indonesia.png'
import specs from '../Gambar/specs.png'
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBBtn,MDBIcon } from "mdbreact";

// class Footer extends React.Component{
//     render(){
//         return(
//             <div style={{background:'#7C0707'}}>
//                 <div>
                    
//                     <div className="footer text-center py-3">
//                             <a className="ins-ic">
//                                 <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 "> </i>
//                             </a>
//                             <a className="fb-ic">
//                             <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3"> </i>
//                             </a>
//                             <a className="tw-ic">
//                                 <i className="fab fa-youtube fa-lg white-text mr-md-5 mr-3 "> </i>
//                             </a>
//                             <a className="ins-ic">
//                                 <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 "> </i>
//                             </a>
//                         </div>

//                         <div className="footer text-center py-3">
//                         <a className="ins-ic">
//                         <img src={Freeport} style={{width:"100px"}} alt="LOGO"/>
//                         </a>
//                         <a className="ins-ic">
//                         <img src={BankPapua} style={{width:"100px"}} alt="LOGO"/>
//                         </a>
//                         <a className="ins-ic">
//                         <img src={specs} style={{width:"100px"}} alt="LOGO"/>
//                         </a>
//                     </div>
//                 </div>
//             </div>
           
          
//         );
//     }
// }
// export default Footer;



const FooterPage = () => {
    return (
      <MDBFooter style={{background:"#761B1B"}} className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <h5 className="title" style={{marginLeft:"40px"}}> <b>Address</b></h5>
              <ul>
                <li className="list-unstyled text-left">
                <MDBIcon icon="map-marker-alt"> Jl.raya Sentani-Waena, Jayapura, Papua</MDBIcon> 
                </li>
                <li className="list-unstyled text-left">
                <MDBIcon icon="phone">   081355265316</MDBIcon> 
                </li>
                <li className="list-unstyled text-left">
                <MDBIcon far icon="envelope">   maxstienhosang@gmail.com </MDBIcon>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="2">
              <h5 className="title text-left" style={{marginLeft:"40px"}}> <b>Menu</b></h5>
              <ul>
                <li className="list-unstyled text-left">
                  <a href="#!">Home</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">News</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">Gallery</a>
                </li>
                <li className="list-unstyled text-left">
                  <a href="#!">Store</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title text-center ml-5"> <b>Social Media</b></h5>
              <ul style={{display:"flex"}}>
              
                <li className="list-unstyled text-left">
                    <MDBBtn color="transparent"> <MDBIcon fab icon="facebook" />  Facebook </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                    <MDBBtn gradient="transparent" > <MDBIcon fab icon="instagram" />  Instagram </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                 < MDBBtn color="trasparent" > <MDBIcon fab icon="twitter" />  Twitter </MDBBtn>
                </li>
                <li className="list-unstyled text-left">
                 < MDBBtn color="transparent" > <MDBIcon fab icon="youtube" />  Youtube </MDBBtn>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      
        <div className="footer-copyright text-center py-3" style={{borderTopColor:"black"}}>
            <a className="ins-ic">
                <img src={Freeport} style={{width:"100px"}} alt="LOGO"/>
            </a>
            <a className="ins-ic">
                 <img src={BankPapua} style={{width:"100px"}} alt="LOGO"/>
            </a>
            <a className="ins-ic">
                <img src={specs} style={{width:"100px"}} alt="LOGO"/>
            </a>
        </div>
    
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
  
  export default FooterPage;