import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import './News.css'

const BlogPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5" style={{background:"black"}}>
      <MDBCardBody>
        <h2 className="judulAwal" style={{color:"white"}}>
          News About Us
        </h2>
        <MDBRow style={{marginTop:"80px"}}>
          <MDBCol lg="5" xl="4" >
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://cdn0-production-images-kly.akamaized.net/mHF77yrIJuw2mOgIaGZA6b7WWnM=/0x0:4160x2412/1280x720/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/bola/watermark-color-landscape.png,1160,20,0)/kly-media-production/medias/2874765/original/090631800_1565103818-IMG_20190806_182750.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <b className="judulBerita">Jacksen Tiago Janjikan Laga Persipura Vs Bali United Jadi Hiburan Terbaiks</b>
            </h3>
            <p className="isiberita">
            Suasana Jayapura kembali kondusif pasca aksi massa lalu. 
            Panpel Persipura Jayapura pun siap menggelar pertandingan Persipura kontra Bali United pada pekan ke-17 Shopee Liga 1 2019 di Stadion Mandala, Jayapura, Minggu (1/9/2019).
            </p>
           
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://cdn0-production-images-kly.akamaized.net/OGS_hpEmfYTMLa__No6uQr8Gmcs=/0x0:0x0/1280x720/filters:quality(75):strip_icc():format(jpeg):watermark(kly-media-production/assets/images/watermarks/bola/watermark-color-landscape.png,1160,20,0)/kly-media-production/medias/2396325/original/001291500_1540906900-Imanuel_Wanggai-1.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <b className="judulBerita">Jacksen Tiago Mencari Momen Tepat Memainkan Imanuel Wanggai</b>
            </h3>
            <p className="isiberita">
            Bola.com, Jayapura - Pelan tapi pasti skuat Persipura Jayapura mulai komplet lagi. Dua pemain yang dibekap cedera, 
            Ian Luis Kabes dan Imanuel Wanggai, telah pulih dari cedera sehingga membuat hati sang pelatih, Jacksen Tiago, menjadi gembira.
            </p>
           
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://cdn0-production-images-kly.akamaized.net/v3YVBaoE5TMe84J6sPhBapMHGhI=/1280x720/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1584606/original/080671000_1493891954-jacksen.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <b className="judulBerita">Jacksen Tiago Menghormati Keputusan PT LIB Menunda Laga Persipura Kontra Bali United</b>
            </h3>
            <p className="isiberita">
            Bola.com, Jayapura - PT LIB memutuskan menunda laga Persipura Jayapura
             kontra Bali United pada Shopee Liga 1 2019 yang sedianya digelar di Stadion Mandala, Minggu (1/9/2019), 
             karena alasan keamanan di Kota Jayapura.
            </p>
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default BlogPage;