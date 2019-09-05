import React from 'react';


class Footer extends React.Component{
    render(){
        return(
            <div>   
                {/* <footer className="page-footer font-small grey darken-3 inline-block"> */}
                    <div className="footer text-right py-3" style={{background:'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(128,2,2,1) 100%, rgba(0,0,0,1) 100%'}}>
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3"> </i>
                            </a>
                            {/* Youtube */}
                            <a className="tw-ic">
                                <i className="fab fa-youtube fa-lg white-text mr-md-5 mr-3 "> </i>
                            </a>
                            {/*Instagram*/}
                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 "> </i>
                            </a>
                    </div>
                {/* </footer> */}
            </div>
        );
    }
}
export default Footer;