import React from 'react'
import {DataTable,Text,Box,Meter,Main} from 'grommet'
import Header from '../components/Header'

import {TextInput,Button} from 'grommet';


export default function Statement() {
    const [value, setValue] = React.useState('');
    const [amount, setAmount] = React.useState('');

    return (
        <div>
        <Header/>
        <Main pad="large">

        <TextInput
        style={{maxWidth:400}}
      placeholder="Account Number"
      value={value}
      onChange={event => setValue(event.target.value)}
    />

<br />
    <TextInput
        style={{maxWidth:400}}
      placeholder="Amount"
      value={amount}
      onChange={event => setAmount(event.target.value)}
    />

    <br />

    <Button style={{color:'white',maxWidth:400}} primary label="Send Money" />

</Main>
        </div>
    )
}
