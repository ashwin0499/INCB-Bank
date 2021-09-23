import React from 'react'
import Headers from '../components/Header'
import { Box, Button, Grommet, Spinner,Card,CardBody,List,Main } from "grommet";
import { Store } from '../store/global';


export default function AccountDetails() {
    const a= (JSON.parse(Store.user))
    return (
        <div>
            <Headers/>

            <Main pad="large">

                    <List 
                    style={{maxWidth:600}}
        primaryKey="name"
        secondaryKey="percent"
        data={[
            { name: 'Account Name', percent: a.empName },
            { name: 'Account Number', percent: a.account.newAcc},
            { name: 'Balance', percent: a.account.balance },
            { name: 'Account Email', percent: a.email },
            { name: 'Pan Card', percent: a.pancard },
            { name: 'Aadhar Card', percent: a.aadhar },
            { name: 'Address', percent: a.address },
            { name: 'Address', percent: a.phoneNumber },
            { name: 'Date of Birth', percent: a.dob },
            
        ]}
        />

</Main>
            
        </div>

        
    )
}
