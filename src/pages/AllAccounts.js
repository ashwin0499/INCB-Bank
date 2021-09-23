import React,{useEffect,useState} from 'react'

import {DataTable,Text,Box,Meter,Main} from 'grommet'

import Header from '../components/Header';
import axios from 'axios';

export default function AllAccounts() {
    const [data,setData] = useState([])
    useEffect(() => {
       axios.get('http://localhost:9090/emp').then(x=>{

        let b = x.data.filter(y=>y.manager!=true)

        setData(b)

       })
    }, [])

    return (
        <>

        <Header/>
        <Main pad="large">


        <DataTable
  columns={[
  {
    property: 'empName',
    header: <Text>Name</Text>,
    primary: true,
  },
  {
    property: 'account.accId',
    header: <Text>Account No.</Text>,
    primary: true,
  },
  {
    property: 'account.balance',
    header: <Text>Balance</Text>,
    primary: true,
  },
  {
    property: 'aadhar',
    header: <Text>Aadhar</Text>,
    primary: true,
  },
  {
    property: 'pancard',
    header: <Text>Pan Card</Text>,
    primary: true,
  },
  {
    property: 'phoneNumber',
    header: <Text>Phone No.</Text>,
    primary: true,
  },
  {/* {
    property: 'percent',
    header: 'Complete',
    render: datum => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    ),
  }, */}
  ]}
  data={data}
/>
        </Main>
   
   </>
    )
}
