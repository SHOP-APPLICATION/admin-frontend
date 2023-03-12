import { Layout } from 'antd'
import React from 'react'

const index = ({colorBgContainer, children}) => {
  return (
    <Layout.Content
    style={{
      margin: '0 16px',
    }}
  >
   {children}
    
  </Layout.Content>
  )
}

export default index