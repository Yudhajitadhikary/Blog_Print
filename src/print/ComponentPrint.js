import React, { Component } from 'react'
// import { connect } from 'react-redux';
export default class CardPrint extends Component {
    render() {
        const {email,password,pincode,address,phoneno}=this.props
        return (
            <div>
                <div style={{textAlign:'center',paddingLeft:'30px',fontSize:'30px',color:'green'}}>Here's a print copy of data you entered :)</div>
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}} >
                    <div style={{color:'Red',paddingRight:'10px',fontSize:'22px'}}>Email:</div><div style={{fontSize:'22px'}}>{email}</div>
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                <div style={{color:'Red',paddingRight:'10px',fontSize:'22px'}}>Password:</div><div style={{fontSize:'22px'}}>{password}</div>
                </div >
                <div style={{display:'flex',padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Red',paddingRight:'10px',fontSize:'22px'}}>Pincode:</div><div style={{fontSize:'22px'}}>{pincode}</div>
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                 <div style={{color:'Red',paddingRight:'10px',fontSize:'22px'}}>Address:</div><div style={{fontSize:'22px'}}>{address}</div> 
                </div>
                <div style={{display:'flex' ,padding:'20px 20px 20px 50px '}}>
                   <div style={{color:'Red',paddingRight:'10px',fontSize:'22px'}}>PhoneNo:</div><div style={{fontSize:'22px'}}>{phoneno}</div> 
                </div>
            </div>
        )
    }
}

 
 
