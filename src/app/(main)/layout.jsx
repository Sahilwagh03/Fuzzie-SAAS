import React from 'react'
import Sidebar from '@/components/sidebar/sidebar'
import InfoBar from '@/components/infobar'
const Layout = ({children}) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <Sidebar/>
        <div className='w-full'>
          <InfoBar />
          {children}
        </div>
    </div>
  )
}

export default Layout