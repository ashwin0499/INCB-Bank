import React, { Component } from 'react'

import '../assets/login.scss'

import axios from 'axios';

// import AccountDetails from './AccountDetails'

import { Box, Button, Grommet,Spinner } from 'grommet';
// function clickFn(params) {
//     alert(1)
// }


import { observer } from "mobx-react"
import {Store} from '../store/global'
    

export default class Login extends Component {


    state={
        title:"HELLO World",
        username:'',
        pass:'',
        dashboard:'',
        flag:0,
    }

    clickFn =()=>{
        axios('https://jsonplaceholder.typicode.com/todos/1')
        .then(x=>{
            console.log(x.data)
            
            this.setState({title:x.data.userId})

        })


        // axios.post('httpsdwdwd',{userid:this.state.username,pass:this.state.pass})
        // .then(x=>{

        // })

    }

    render() {

        return (

<>

{this.state.flag==0?
            <div>

            <span className="login100-form-title p-b-51" style={{fontSize:40,color:'#817EFE'}}>
                    INCB BANK
					</span>

					<span className="login100-form-title p-b-51" style={{}}>
						Login
					</span>


            </div>


:
           <div>

            <div className="limiter" >
		    <div className="container-login100">
			<div className="wrap-login100 p-t-50 p-b-90">
				<form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-51" style={{fontSize:40,color:'#817EFE'}}>
                    INCB BANK
					</span>

					<span className="login100-form-title p-b-51" style={{}}>
						Login
					</span>

                    <br />

					
					<div className="wrap-input100 validate-input m-b-16" data-validate = "Username is required">
						<input className="input100" type="text" name="username" placeholder="Username"/>
						<span className="focus-input100"></span>
					</div>
					<br />
					
					<div className="wrap-input100 validate-input m-b-16" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input100"></span>
					</div>
					
					<div className="flex-sb-m w-full p-t-3 p-b-24">
						{/* <div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label className="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div> */}

						{/* <div>
							<a href="#" className="txt1">
								Forgot?
							</a>
						</div> */}
					</div>
                    <br />

					<div className="container-login100-form-btn m-t-17">
						<button className="login100-form-btn" onClick={(e)=>{
                            e.preventDefault()
                            {/* this.clickFn() */}
                            {/* store.increment() */}
                            Store.setAuth()

                            console.log(Store.auth)
                        }}>
							Login
						</button>
					</div>
                    {/* <Spinner size="large"/>
                    <Button primary label="label" /> */}


				</form>
			    </div>
		        </div>
	        </div>

        </div>}

        </>
        )
    }
}
