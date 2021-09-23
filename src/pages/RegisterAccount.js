import React, { Component } from "react";

import "../assets/login.scss";

import axios from "axios";

// import AccountDetails from './AccountDetails'

import { Box, Button, Grommet, Spinner,Card,CardBody } from "grommet";
// function clickFn(params) {
//     alert(1)
// }

import { observer } from "mobx-react";
import { Store } from "../store/global";
import Header from "../components/Header";

export default class Login extends Component {
  state = {
    title: "HELLO World",
    username: "",
    pass: "",
    dashboard: "",
    flag: 1,
    error:'',
    created:false,
    newAccount:String(parseFloat(Math.random().toFixed(10).replace("0.",""))),
  };

  clickFn = () => {
    
    console.log(this.state.newAccount)
    axios.post('http://localhost:9090/register-emp',
    {
        "email": this.state.username,
        "empName": this.state.name,
        "address": this.state.address,
        "password": this.state.pass,
        "phoneNumber": this.state.phoneNumber,
        "account":{
            "newAcc":this.state.newAccount,
            "balance":0
        },
        "pancard": this.state.pancard,
        "aadhar": this.state.aadhar,
        "dob": this.state.DOB,
        "manager":false
      })
      .then(()=>{
alert('Entry Saved')
this.setState({created:true})
      })
  };

  render() {
    return (
      <>
       (
          <div>
              <Header/>
            <div className="limiter">
              <div className="container-login100">
                <div className="wrap-login100 p-t-50 p-b-90">
                  <form className="login100-form validate-form flex-sb flex-w">
                    <span
                      className="login100-form-title p-b-51"
                      style={{ fontSize: 40, color: "#817EFE" }}
                    >
                    </span>

                    <span className="login100-form-title p-b-51" style={{}}>
                      New Account Creation
                    </span>

<br />
                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="name"
                        placeholder="Customer Name"
                        value={ this.state.name}
                        onChange={(event)=>this.setState({name:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>


                    <br />

                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >

                      <input
                        className="input100"
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={ this.state.username }
                        onChange={(event)=>this.setState({username:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />

                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Password is required"
                    >
                      <input
                        className="input100"
                        type="password"
                        name="pass"
                        placeholder="Password"
                        value={ this.state.pass }
                        onChange={(event)=>this.setState({pass:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>

                    <br />
                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={ this.state.address}
                        onChange={(event)=>this.setState({address:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />

                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={ this.state.phoneNumber}
                        onChange={(event)=>this.setState({phoneNumber:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />



                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="aadhar"
                        placeholder="Aadhar Card"
                        value={ this.state.aadhar}
                        onChange={(event)=>this.setState({aadhar:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />

                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="pancard"
                        placeholder="Pancard Card"
                        value={ this.state.pancard}
                        onChange={(event)=>this.setState({pancard:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />


                    <div
                      className="wrap-input100 validate-input m-b-16"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="date of birth"
                        placeholder="Date of Birth"
                        value={ this.state.DOB}
                        onChange={(event)=>this.setState({DOB:event.target.value}) }
                      />
                      <span className="focus-input100"></span>
                    </div>
                    <br />

              


                    <br />

                    <p style={{color:'red',marginBottom:10}}>{this.state.error}</p>


                    <div className="container-login100-form-btn m-t-17">
                      <button
                        className="login100-form-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          {
                            /* this.clickFn() */
                          }
                          {
                            /* store.increment() */
                          }
                          {/* Store.setAuth(); */}

                          console.log(Store.auth);
                          this.clickFn()
                        }}
                      >
                        Create New Account
                      </button>
                    </div>

                    {/* <Spinner size="large"/>
                    <Button primary label="label" /> */}
                  </form>
                </div>
              </div>
            </div>
          </div>

      </>
    );
  }
}
