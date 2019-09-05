import React from "react";
import { MDBContainer, MDBRow, MDBCol,MDBIframe } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./GalVideo.css";

class Video extends React.Component {
state = {
  videoIndex: 0,
  isOpen: false,
  video: [
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o",
    "https://www.youtube.com/embed/FlucQ2jyo3o"
  ]
}

renderVideos = () => {
  let videoIndex = -1;
  const { video } = this.state;

return video.map(VideoSrc => {
  videoIndex++;
  const privateKey = videoIndex;
  return (
    <MDBCol md="4" key={videoIndex}>
      <figure>
      {/* <MDBIframe src={VideoSrc}  onClick={()=>this.setState({ videoIndex: privateKey, isOpen: true })}  /> */}
      <iframe className="embed-responsive-item" 
      src={VideoSrc} allowfullscreen onClick={()=>this.setState({ videoIndex: privateKey, isOpen: true })}></iframe>
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { videoIndex, isOpen, videos } = this.state;
  return (
      <MDBContainer className="mt-3 ml-3 mr-3">
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            {this.renderVideos()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={videos[videoIndex]}
          nextSrc={videos[(videoIndex + 1) % videos.length]}
          prevSrc={videos[(videoIndex + videos.length - 1) % videos.length]}
          imageTitle={videoIndex + 1 + "/" + videos.length}
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

export default Video;