import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Gallery.css";

class LightboxPage extends React.Component {
state = {
  videoIndex: 0,
  isOpen: false,
  videos: [
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk',
    'https://www.youtube.com/embed/lEi_XBg2Fpk'
    
  ]
}

renderVideos = () => {
  let videoIndex = -1;
  const { videos } = this.state;

return videos.map(videoSrc => {
  videoIndex++;
  const privateKey = videoIndex;
  return (
    <MDBCol md="4" key={videoIndex}>
      <figure>
          <iframe src={videoSrc} className="embed-responsive-item" allowFullScreen ></iframe>
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { videoIndex, isOpen, videos } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox no-margin" style={{marginTop:"150px",marginBottom:"20px"}}>
          <MDBRow>
            {this.renderVideos()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={videos[videoIndex]}
          nextSrc={videos[(videoIndex + 1) % videos.length]}
          prevSrc={videos[(videoIndex + videos.length - 1) % videos.length]}
          videoTitle={videoIndex + 1 + "/" + videos.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              videoIndex: (videoIndex + videos.length - 1) % videos.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              videoIndex: (videoIndex + 1) % videos.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightboxPage;