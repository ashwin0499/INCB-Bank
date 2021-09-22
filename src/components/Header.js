import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link,
    useRouteMatch,
    useParams,
    
  } from "react-router-dom";
import { Store } from '../store/global';

export default function Header() {
    return (
        <div className="header">
        
        {/* <Clock type="digital" /> */}

        <span className="login100-form-title p-b-51" style={{fontSize:40,color:'#817EFE'}}>
                    INCB BANK
					</span>
 
 <div className="navHed">
 <Link to={`/dashboard`} activeClassName="active"><p>Dashboard</p></Link>
 <Link to={`/account-details`} activeClassName="active"><p>Account Details</p></Link>
 <Link to={`/statement`} activeClassName="active"><p>Statement</p></Link>
 <Link to={`/cash`} activeClassName="active"><p>Withdraw/Deposit</p></Link>
 <Link to={`/account-transfer`} activeClassName="active"><p>Account Transfer</p></Link>
<p onClick={()=>{Store.logout()}}>Logout</p>

 </div>
        </div>
    )
}
