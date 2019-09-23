import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import player1 from './Gambar Pemain/dedeSulaiman.jpeg'

const CardExample = () => {
  return (
    <div>
    <MDBCol>
      <MDBCard style={{ width: "22rem",marginTop:"130px",marginLeft:"20px", height:"500px"}}>
        <MDBCardImage className="img-fluid" src={player1} waves />
        <center>
        <MDBCardBody>
          <MDBCardTitle>Goal Keeper</MDBCardTitle>
          <MDBCardText>
            Dede Sulaiman
          </MDBCardText>
          <MDBBtn href="#">Detail Profile</MDBBtn>
        </MDBCardBody>
        </center>
        
      </MDBCard>
    </MDBCol>
    </div>
    
  )
}

export default CardExample;