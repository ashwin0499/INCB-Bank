import React from 'react'
import {DataTable,Text,Box,Meter,Main} from 'grommet'
import Header from '../components/Header'


export default function Statement() {
    return (
        <div>
        <Header/>
        <Main pad="large">

        <DataTable
  columns={[
  {
    property: 'date',
    header: <Text>Date</Text>,
    primary: true,
  },
  {
    property: 'details',
    header: <Text>Detail</Text>,
    primary: true,
  },
  {
    property: 'reff',
    header: <Text>Referrence No.</Text>,
    primary: true,
  },
  {
    property: 'credit',
    header: <Text>Credit</Text>,
    primary: true,
  },
  {
    property: 'debit',
    header: <Text>Debit</Text>,
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
  data={[
    { details: 'Withdraw from ATM', date:'12-09-2020',reff:'92838810',credit:0, debit:3000 },
    { details: 'Deposit', date:'18-09-2020',reff:'31241251',credit:5540, debit:0 },
    { details: 'Transfer #990', date:'20-09-2020',reff:'341213',credit:0, debit:8000},


  ]}
/>
</Main>
        </div>
    )
}
