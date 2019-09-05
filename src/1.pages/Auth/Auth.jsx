import React, { Component } from 'react';
import './Auth.css'
// 1. Import action itu sendiri
import {onLogin, onRegister} from './../../Redux/1.actions'
// 2. Import connect dari react-redux
import {connect} from 'react-redux'
import Cookie from 'universal-cookie'
import {Redirect} from 'react-router-dom'
import swal from 'sweetalert';

let cookieObj = new Cookie()

class Auth extends Component {
    state = {
        page : 'REGISTER',
        registerUsername : '',
        registerPassword : '',
        repeatPassword : '',
        registerEmail : '',
        loginUsername : '',
        loginPassword: '',
        isSame:true
    }

    componentWillReceiveProps(newProps){
        cookieObj.set('userData', newProps.username, {path : '/'})
    }

    onLoginBtnHandler = () => {
        // let loginObj = {
        //     username : this.state.loginUsername,
        //     password : this.state.loginPassword
        // }
        // this.props.onLogout()
        this.props.onLogin({asalNama : this.state.loginUsername, asalKunci : this.state.loginPassword})
    }

    onRegisterBtnHandler = () => {
        if(this.state.repeatPassword !== this.state.registerPassword || (this.state.repeatPassword == '' && this.state.registerPassword == '')){
            this.setState({isSame : false})
        }
        if(!this.state.registerEmail){
            this.refs.registerEmail.className += ' invalid-input'
        }
        if(!this.state.registerUsername){
            this.refs.registerUsername.className += ' invalid-input'
        }
        if(!this.state.repeatPassword){
            this.refs.repeatPassword.className += ' invalid-input'
        }
        if(!this.state.registerPassword){
            this.refs.registerPassword.className += ' invalid-input'
        }
        if(this.state.registerEmail && this.state.registerPassword && this.state.repeatPassword && this.state.registerUsername){
            let registerObj = {
                username : this.state.registerUsername,
                password : this.state.registerPassword,
                email : this.state.registerEmail
            }
    
            this.props.onRegister(registerObj)
        }else{
            swal('input')
        }
    }

    validateInputRegister = () => {
        
    }

    passwordChecker = () => {
        if(!this.state.isSame){
            return(
                <div className="alert alert-danger" style={{fontSize:"13px"}}>Password Tidak Sesuai</div>
            )
        }
    }

    render() {
        if(this.props.username !== ''){
            return <Redirect to="/" exact />
        }
        return (
            <div className="col-md-8 offset-md-2" style={{marginTop:"220px"}}>
                {
                    this.props.message !== ''
                    ?
                    <h3>{this.props.message}</h3>
                    :
                    null
                }
                <div className="row" style={{marginBottom:"50px"}}>
                    <div className="col-3 text-center auth-left">
                        <h3>Welcome!</h3>
                        <p>Silahkan Login Jika Sudah Memiliki Akun!
                           Jika Belum Silahkan <i>Register</i> Dulu Ya
                        </p>
                        <br/>
                        <br/>
                        <div className="tab-auth">
                            <div className={"d-inline-block m-1 text-center " + (this.state.page == "LOGIN" ? "active-auth" : '')} onClick={() => this.setState({page : 'LOGIN'})}>
                                Login
                            </div>
                            <div className={"d-inline-block m-1 text-center " + (this.state.page == "REGISTER" ? 'active-auth' : '')} onClick={() => this.setState({page : "REGISTER"})}>
                                Register
                            </div>
                        </div>
                    </div>
                    <div className="col-9 auth-right text-center pb-5">
                        {
                            this.state.page == "REGISTER" 
                            ?
                            <div>
                                <form className="text-center" action="#!">
                                    <p className="h4 mb-4" style={{color:"white",marginLeft:"50px"}}>Please Register</p>
                                    <div className="row">
                                    <div className="col-6">
                                    <input type="text" id="defaultLoginFormUsername" onChange={(e) => this.setState({registerUsername : e.target.value})} className="form-control mb-4" placeholder="Username" style={{width:"80%", marginLeft:"40px"}} />
                                    <input type="text" id="defaultLoginFormEmail" onChange={(e) => this.setState({registerEmail : e.target.value})} className="form-control mb-4" placeholder="Email" style={{width:"80%", marginLeft:"40px"}} />
                                    </div>
                                    <div className="col-6">
                                    <input type="password" id="defaultLoginFormPassword" onChange={(e) => this.setState({registerPassword : e.target.value})} className="form-control mb-4" placeholder="Password" style={{width:"80%", marginRight:"10px"}} />
                                    <input type="password" id="defaultLoginFormRepeatPassword" onChange={(e) => this.setState({repeatPassword : e.target.value})} className="form-control mb-4" placeholder="Repeat Password" style={{width:"80%", marginRight:"10px"}} />
                                    </div>
                                    </div> 
                                </form>
                                <div className="row">
                                    <div className="col-5 pt-3" style={{marginLeft:"200px",width:"50%"}}>
                                    {this.passwordChecker()}
                                    </div>
                                    <div className="col-7">
                                        {
                                            !this.props.isLoading
                                            ?
                                            <button className="btn btn-info btn-block my-3" onClick={this.onRegisterBtnHandler} type="submit" style={{width:"50%", marginLeft:"220px"}}>Register</button>
                                            :
                                            <div className="spinner-border text-primary">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            :
                            <div>
                                 <form className="text-center" action="#!">
                                    <p className="h4 mb-4" style={{color:"white"}}>Please Sign in</p>
                                    <input type="text" id="defaultLoginFormEmail" onChange={(e)=>this.setState({loginUsername:e.target.value})} className="form-control mb-4" placeholder="Username" style={{width:"50%", margin:"auto"}} />
                                    <input type="password" id="defaultLoginFormPassword" onChange={(e)=>this.setState({loginPassword:e.target.value})} className="form-control mb-4" placeholder="Password" style={{width:"50%", margin:"auto"}} />
                                    <button className="btn btn-info btn-block my-3" onClick={this.onLoginBtnHandler} type="submit" style={{width:"50%", margin:"auto"}}>Sign in</button>
                                <br/>
                                
                                </form>
                                
                            </div>

                        }
                    </div>
                    <div className="col" style={{marginTop:"120px"}}>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading : state.user.loading,
        message : state.user.msg,
        username : state.user.username
    }
}

// 3. connect (<MAPSTATETOPROPS>, {<ACTION>})(<COMPONENT>)
export default connect(mapStateToProps, {onLogin, onRegister})(Auth);