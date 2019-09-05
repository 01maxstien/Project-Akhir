import React, { Component } from 'react';
import {connect} from 'react-redux'
import ProductBox from '../../2.component/General/ProductBox';
import Axios from 'axios';
import { urlApi } from '../../3.helpers/database';
import swal from 'sweetalert'
import Carousel from '../Carousel/Carousel'




class Store extends Component {
    state={
        productData:[]
    }

    componentDidMount(){
        this.getDataProducts()
    }

    getDataProducts=()=>{
        Axios.get(urlApi+'products')
        .then((res)=>{
            this.setState({productData:res.data})
        })
        .catch((err)=>{
            console.log(err)
            swal("error",'System Error','error')
        })
    }

    renderProducts=()=>{
        let jsx = this.state.productData.map(val=>{
            return(
                <ProductBox nama={val.nama} harga={val.harga} discount={val.discount} img={val.img} id={val.id}/>
            )
        })
        return jsx
    }
    render() {
        return (
            <div className="container"style={{marginTop:"100px"}}>
                <div className="row">
                    <div className="col-lg-3 mt-4" >
                        <div className="input-group mb-2" >
                            <input type="text" ref="searchBook" className="form-control" style={{marginTop:"10px"}}placeholder="Masukkan kata kunci ... "  />
                            <div className="input-group-append">
                                <button className="btn" style={{backgroundColor:"darkred",color:"white"}} type="button" id="button-addon2" ><i className="fas fa-search" /></button>
                            </div>
                        </div> 
                        <div className="card p-2">
                            <form ref="formFilter" style={{boxShadow:"none", fontSize:"14px"}}>
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-dark  -1">Silahkan Input</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari Produk"></input>
                                
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-dark mb-1">Silahkan Input</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari Toko"></input>
                                
                                <div className="form-label col-sm-6 text-left font-weight-bold pl-1 text-dark mb-1">Silahkan Input</div>
                                <input className="form-control form-control-sm mb-2" placeholder="Cari User"></input> 

                                <button className="btn" style={{backgroundColor:"darkred",color:"white"}}><i class="fas fa-filter"></i> Filter</button>                               
                            </form>

                        </div>
                        
                    </div>
                    <div className="col-lg-9 mt-4">
                            <Carousel/>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userObj : state.user
    }
}

export default connect (mapStateToProps,null)(Store)