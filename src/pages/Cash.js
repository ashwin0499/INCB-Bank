import React from 'react'
import {DataTable,Text,Box,Meter,Main} from 'grommet'
import Header from '../components/Header'

import {TextInput,RadioButtonGroup,Button} from 'grommet';

export default function Statement() {
    const [value, setValue] = React.useState('one');
    const [amount, setAmount] = React.useState('');

    return (
        <div>
        <Header/>
        <Main pad="large">

<h2>Withdrawal/Deposit</h2>
<br />
    <TextInput
        style={{maxWidth:400}}
      placeholder="Amount"
      value={amount}
      onChange={event => setAmount(event.target.value)}
    />

    <br />
    <RadioButtonGroup
      name="doc"
      options={['Deposit', 'Withdraw']}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
<br />
    <Button style={{color:'white',maxWidth:400}} primary label="Submit Request" />


     
</Main>
        </div>
    )
}
