import React from 'react'
import Headers from '../components/Header'

import {DataTable,Text,Box,Meter,Main} from 'grommet'

import { Store } from '../store/global'

export default function Dashboard() {
    const a= (JSON.parse(Store.user))
    console.log(a)
    return (
        <div>
            <Headers/>
            <Main pad="large">
                <h1>Welcome, {a.empName}</h1>
            </Main>
        </div>
    )
}
