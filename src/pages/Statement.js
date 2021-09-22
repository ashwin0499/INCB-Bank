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
    property: 'name',
    header: <Text>Name</Text>,
    primary: true,
  },
  {
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
  },
  ]}
  data={[
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
  ]}
/>
</Main>
        </div>
    )
}
