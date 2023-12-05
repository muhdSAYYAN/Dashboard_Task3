import React from 'react'
import Dashdatas from './Dashdatas'
import Empty from './Empty'

const DashDataMain = ({ activeMenu }) => {
  return (
    <div className='DashData'>
        {activeMenu === 'dashboard' && <Dashdatas />}
        {activeMenu === 'support' && <Empty />}
        {activeMenu === 'plugins' && <Empty/>}
        {activeMenu === 'help' && <Empty />}
    </div>
  )
}

export default DashDataMain