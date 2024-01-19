import React from 'react'
import Sidebar from './sidebar'

const Layout = ({children}) => {
  return (
    <div>
      <Sidebar />
        <div className="content-wrapper">
            {children} 
        </div>
    </div>
  )
}

export default Layout
